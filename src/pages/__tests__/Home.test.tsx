import { screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

import { mockRoomList } from "@helpers/tests/mocks/room";
import { i18nRender } from "@helpers/tests/i18nRender";

import Home from "../Home";

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

describe("Home component", () => {
  it("should render filters", async () => {
    renderWithProviders();

    expect(screen.getByTestId("room-list-name-filter")).toBeInTheDocument();
    expect(
      screen.getByTestId("room-list-available-filter")
    ).toBeInTheDocument();
  });
});
