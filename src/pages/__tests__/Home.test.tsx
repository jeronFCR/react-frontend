import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { screen } from '@testing-library/react';
import { HttpResponse, http } from 'msw';
import { setupServer } from 'msw/node';

import { i18nRender } from '@helpers/tests/i18nRender';
import { mockRoomList } from '@helpers/tests/mocks/room';

import Home from '../Home';

const queryClient = new QueryClient();

const server = setupServer(
  http.get(`${import.meta.env.VITE_API_URL}/rooms`, () => {
    return HttpResponse.json(mockRoomList);
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const renderWithProviders = () => {
  return i18nRender(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[`/`]}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  );
};

describe('Home component', () => {
  it('should render filters', async () => {
    renderWithProviders();

    expect(screen.getByTestId('room-list-name-filter')).toBeInTheDocument();
    expect(screen.getByTestId('room-list-available-filter')).toBeInTheDocument();
  });
});
