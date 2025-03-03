import { renderHook, act } from "@testing-library/react";

import { mockRoomList } from "@helpers/tests/mocks/room";

import { useRoomListFilter } from "../useRoomListFilter";

describe("useRoomListFilter", () => {
    test("returns all rooms when no filters are applied", () => {
        const { result } = renderHook(() => useRoomListFilter(mockRoomList));
        expect(result.current.filteredRooms).toHaveLength(2);
    });

    test("filters rooms by name correctly", () => {
        const { result } = renderHook(() => useRoomListFilter(mockRoomList));

        act(() => {
            result.current.setRoomName("Room 2");
        });

        expect(result.current.filteredRooms).toHaveLength(1);
        expect(result.current.filteredRooms[0].name).toBe("Room 2");
    });

    test("filters only available rooms when toggled", () => {
        const { result } = renderHook(() => useRoomListFilter(mockRoomList));

        act(() => {
            result.current.toggleOnlyAvailable();
        });

        expect(result.current.filteredRooms).toHaveLength(1);
        expect(result.current.filteredRooms.every(room => !room.busy)).toBe(true);
    });

    test("updates filterState correctly when setRoomName is called", () => {
        const { result } = renderHook(() => useRoomListFilter(mockRoomList));

        act(() => {
            result.current.setRoomName("Room 1");
        });

        expect(result.current.filterState.roomName).toBe("Room 1");
    });

    test("toggles onlyAvailable correctly", () => {
        const { result } = renderHook(() => useRoomListFilter(mockRoomList));

        expect(result.current.filterState.onlyAvailable).toBe(false);

        act(() => {
            result.current.toggleOnlyAvailable();
        });

        expect(result.current.filterState.onlyAvailable).toBe(true);

        act(() => {
            result.current.toggleOnlyAvailable();
        });

        expect(result.current.filterState.onlyAvailable).toBe(false);
    });
});