import { useReducer, useMemo, useCallback } from "react";

import { RoomList } from "@interfaces";
import {
  filterReducer,
  initialFilterState,
} from "@reducers/roomListFilterReducer";

export function useRoomListFilter(rooms: RoomList[]) {
  const [filterState, dispatch] = useReducer(filterReducer, initialFilterState);

  const filteredRooms = useMemo(
    () =>
      rooms.filter(
        (room) =>
          (!filterState.onlyAvailable || !room.busy) &&
          room.name.toLowerCase().includes(filterState.roomName.toLowerCase())
      ),
    [rooms, filterState]
  );

  const setRoomName = useCallback(
    (name: string) => dispatch({ type: "SET_ROOM_NAME", payload: name }),
    []
  );
  const toggleOnlyAvailable = useCallback(
    () => dispatch({ type: "TOGGLE_ONLY_AVAILABLE" }),
    []
  );

  return { filterState, filteredRooms, setRoomName, toggleOnlyAvailable };
}