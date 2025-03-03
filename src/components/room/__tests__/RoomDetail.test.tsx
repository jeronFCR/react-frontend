import { fireEvent, screen } from "@testing-library/react";
import { vi } from "vitest";
import { BrowserRouter as Router } from "react-router-dom";

import { i18nRender } from "@helpers/tests/i18nRender";
import { mockRoom } from "@helpers/tests/mocks/room";

import RoomDetail from "../RoomDetail";

describe("RoomDetail", () => {
  const mockSelectDevice = vi.fn();
  const mockHandleRoomAction = vi.fn();
  const mockNavigate = vi.fn();

  beforeEach(() => {
    vi.stubGlobal("useNavigate", () => mockNavigate);
  });

  it("should render a loading state with a skeleton", () => {
    i18nRender(
      <Router>
        <RoomDetail
          loading={true}
          room={undefined}
          selectDevice={mockSelectDevice}
          handleRoomAction={mockHandleRoomAction}
        />
      </Router>
    );

    expect(screen.getByRole("presentation")).toBeInTheDocument();
  });

  it("should render when room is undefined and show a fallback message", () => {
    i18nRender(
      <Router>
        <RoomDetail
          loading={false}
          room={undefined}
          selectDevice={mockSelectDevice}
          handleRoomAction={mockHandleRoomAction}
        />
      </Router>
    );

    expect(screen.getByText("No room data")).toBeInTheDocument();
  });

  it("should render room details when room data is provided", () => {
    i18nRender(
      <Router>
        <RoomDetail
          loading={false}
          room={mockRoom}
          selectDevice={mockSelectDevice}
          handleRoomAction={mockHandleRoomAction}
        />
      </Router>
    );

    expect(screen.getByText("Room 1")).toBeInTheDocument();

    expect(screen.getByText("Device 1")).toBeInTheDocument();
    expect(screen.getByText("Device 2")).toBeInTheDocument();
    expect(screen.getByText("Device 3")).toBeInTheDocument();

    expect(screen.getByText("Test Name")).toBeInTheDocument();

    expect(screen.getByText("Release")).toBeInTheDocument();
  });

  it("should call selectDevice when a device is clicked", () => {
    i18nRender(
      <Router>
        <RoomDetail
          loading={false}
          room={mockRoom}
          selectDevice={mockSelectDevice}
          handleRoomAction={mockHandleRoomAction}
        />
      </Router>
    );

    fireEvent.click(screen.getByText("Device 1"));

    expect(mockSelectDevice).toHaveBeenCalledWith({
      id: "asdf-558b-4573-b7b2-test",
      name: "Device 1",
    });
  });

  it('should call handleRoomAction with "BOOK" when the room is not booked', () => {
    i18nRender(
      <Router>
        <RoomDetail
          loading={false}
          room={{ ...mockRoom, booking: undefined }}
          selectDevice={mockSelectDevice}
          handleRoomAction={mockHandleRoomAction}
        />
      </Router>
    );

    fireEvent.click(screen.getByTestId("room-detail-action-button"));

    expect(mockHandleRoomAction).toHaveBeenCalledWith("BOOK");
  });

  it('should call handleRoomAction with "RELEASE" when the room is already booked', () => {
    i18nRender(
      <Router>
        <RoomDetail
          loading={false}
          room={mockRoom}
          selectDevice={mockSelectDevice}
          handleRoomAction={mockHandleRoomAction}
        />
      </Router>
    );

    fireEvent.click(screen.getByTestId("room-detail-action-button"));

    expect(mockHandleRoomAction).toHaveBeenCalledWith("RELEASE");
  });
});
