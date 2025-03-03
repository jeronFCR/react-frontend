import { screen, waitFor, cleanup } from "@testing-library/react";
import { useNavigate } from "react-router-dom";

import { i18nRender } from "@helpers/tests/i18nRender";

import NotFound from "../NotFound";

vi.mock("react-router-dom", () => ({
  useNavigate: vi.fn(),
}));

describe("NotFound Component", () => {
  const mockNavigate = vi.fn();

  beforeEach(() => {
    useNavigate.mockReturnValue(mockNavigate);
  });

  afterEach(() => {
    vi.clearAllMocks();
    cleanup();
  });

  it("should render the NotFound component correctly", () => {
    i18nRender(<NotFound />);

    expect(screen.getByText("404 - Page not found")).toBeInTheDocument();
    expect(
      screen.getByText(/Redirecting in \d+ second(s)?\.\.\./)
    ).toBeInTheDocument();
  });

  it("should decrement the secondsLeft counter every second", async () => {
    i18nRender(<NotFound />);

    expect(
      screen.getByText(/Redirecting in 5 seconds\.\.\./)
    ).toBeInTheDocument();

    await waitFor(
      () => {
        expect(
          screen.getByText(/Redirecting in 4 seconds\.\.\./)
        ).toBeInTheDocument();
      },
      { timeout: 1500 }
    );

    await waitFor(
      () => {
        expect(
          screen.getByText(/Redirecting in 3 seconds\.\.\./)
        ).toBeInTheDocument();
      },
      { timeout: 2500 }
    );
  });

  it(
    "should navigate to the home page after 5 seconds",
    async () => {
      i18nRender(<NotFound />);

      expect(mockNavigate).not.toHaveBeenCalled();

      await waitFor(
        () => {
          expect(mockNavigate).toHaveBeenCalledWith("/");
        },
        { timeout: 5500 }
      );
    },
    { timeout: 6000 }
  );

  it("should clear the interval and timeout when the component unmounts", () => {
    const clearIntervalSpy = vi.spyOn(global, "clearInterval");
    const clearTimeoutSpy = vi.spyOn(global, "clearTimeout");

    const { unmount } = i18nRender(<NotFound />);

    unmount();

    expect(clearIntervalSpy).toHaveBeenCalled();
    expect(clearTimeoutSpy).toHaveBeenCalled();
  });
});
