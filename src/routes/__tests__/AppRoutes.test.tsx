import { render, screen, waitFor } from "@testing-library/react";

import AppRoutes from "../AppRoutes";

vi.mock("@pages/Home", () => ({
  default: () => <div>Home Page</div>,
}));
vi.mock("@pages/Room", () => ({
  default: () => <div>Room Page</div>,
}));
vi.mock("@pages/NotFound", () => ({
  default: () => <div>Not Found Page</div>,
}));

describe("AppRoutes Component", () => {
  it("should render the Home component for the root path", async () => {
    render(<AppRoutes />);

    await waitFor(() => {
      expect(screen.getByText("Home Page")).toBeInTheDocument();
    });
  });

  it("should render the Room component for the /rooms/:roomId path", async () => {
    window.history.pushState({}, "", "/rooms/1");

    render(<AppRoutes />);

    await waitFor(() => {
      expect(screen.getByText("Room Page")).toBeInTheDocument();
    });
  });

  it("should render the NotFound component for an unknown path", async () => {
    window.history.pushState({}, "", "/unknown");

    render(<AppRoutes />);

    await waitFor(() => {
      expect(screen.getByText("Not Found Page")).toBeInTheDocument();
    });
  });
});
