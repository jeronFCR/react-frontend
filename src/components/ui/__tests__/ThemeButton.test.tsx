import { render, screen, fireEvent } from "@testing-library/react";

import { useTheme } from "@contexts/ThemeContext";

import { ThemeButton } from "../ThemeButton";

vi.mock("@contexts/ThemeContext", () => ({
  useTheme: vi.fn(),
}));

describe("ThemeButton", () => {
  const setThemeMock = vi.fn();

  beforeEach(() => {
    useTheme.mockReturnValue({
      theme: "customLight",
      setTheme: setThemeMock,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should render theme component correctly", () => {
    render(<ThemeButton />);

    const checkbox = screen.getByTestId("swap-theme-checkbox");
    expect(checkbox).toBeInTheDocument();
  });

  it("should swap theme when click", () => {
    render(<ThemeButton />);

    const checkbox = screen.getByTestId("swap-theme-checkbox");

    fireEvent.click(checkbox);

    expect(setThemeMock).toHaveBeenCalledWith("customDark");
  });

  it("should return to customLight when swap", () => {
    useTheme.mockReturnValue({
      theme: "customDark",
      setTheme: setThemeMock,
    });

    render(<ThemeButton />);

    const checkbox = screen.getByTestId("swap-theme-checkbox");

    fireEvent.click(checkbox);

    expect(setThemeMock).toHaveBeenCalledWith("customLight");
  });
});
