import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { HttpResponse, http } from 'msw';
import { setupServer } from 'msw/node';

import { i18nRender } from '@helpers/tests/i18nRender';
import { mockDevice } from '@helpers/tests/mocks/devices';
import { mockRoom } from '@helpers/tests/mocks/room';

import Room from '../Room';

const queryClient = new QueryClient();

const server = setupServer(
  http.get(`${import.meta.env.VITE_API_URL}/rooms/:id`, () => {
    return HttpResponse.json(mockRoom);
  }),
  http.get(`${import.meta.env.VITE_API_URL}/devices/:id`, () => {
    return HttpResponse.json(mockDevice);
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const renderWithProviders = (roomId = '1') => {
  return i18nRender(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[`/room/${roomId}`]}>
        <Routes>
          <Route path="/room/:roomId" element={<Room />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  );
};

describe('Room Component', () => {
  it('should display room details', async () => {
    renderWithProviders();

    expect(screen.getByRole('presentation')).toBeInTheDocument();

    await waitFor(() => expect(screen.getByText('Room 1')).toBeInTheDocument());
    expect(screen.getByText('Device 1')).toBeInTheDocument();
  });

  it('should load device details when a device is clicked and should close', async () => {
    renderWithProviders();

    await waitFor(() => screen.getByText('Device 1'));
    fireEvent.click(screen.getByText('Device 1'));

    await waitFor(() => expect(screen.getByTestId('device-detail-name')).toHaveTextContent('Device 1'));

    await waitFor(() => {
      fireEvent.click(screen.getByTestId('device-detail-back-button'));
    });
  });
});
