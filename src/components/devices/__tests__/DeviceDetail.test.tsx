import { screen, fireEvent } from "@testing-library/react";

import { mockDevice } from "@helpers/tests/mocks/devices";
import { i18nRender } from "@helpers/tests/i18nRender";

import DeviceDetail from "../DeviceDetail";

describe("DeviceDetail Component", () => {
  const mockBackFn = vi.fn();

  it("should render device details correctly", () => {
    i18nRender(<DeviceDetail device={mockDevice} backFn={mockBackFn} />);

    expect(screen.getByText("Device 1")).toBeInTheDocument();
    expect(screen.getByText("Type:")).toBeInTheDocument();
    expect(screen.getByText("Display")).toBeInTheDocument();
    expect(screen.getByText("Battery:")).toBeInTheDocument();
    expect(screen.getByText("15%")).toBeInTheDocument();
    expect(screen.getByTestId("device-battery-icon")).toBeInTheDocument();
  });

  it("should call backFn when ChevronLeft is clicked", () => {
    i18nRender(<DeviceDetail device={mockDevice} backFn={mockBackFn} />);

    fireEvent.click(screen.getByTestId("device-detail-back-button"));
    expect(mockBackFn).toHaveBeenCalled();
  });

  it("should render BatteryDisplay with and without showNumber", () => {
    i18nRender(<DeviceDetail device={mockDevice} backFn={mockBackFn} />);

    expect(screen.getByTestId("device-battery-icon")).toBeInTheDocument();
    expect(screen.getByText("15%")).toBeInTheDocument();
  });
});
