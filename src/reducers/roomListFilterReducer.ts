export interface RoomListFilterModel {
  roomName: string;
  onlyAvailable: boolean;
}

export type RoomListFilterAction = { type: 'SET_ROOM_NAME'; payload: string } | { type: 'TOGGLE_ONLY_AVAILABLE' };

export const initialFilterState: RoomListFilterModel = {
  roomName: '',
  onlyAvailable: false,
};

export const filterReducer = (state: RoomListFilterModel, action: RoomListFilterAction): RoomListFilterModel => {
  switch (action.type) {
    case 'SET_ROOM_NAME':
      return { ...state, roomName: action.payload };
    case 'TOGGLE_ONLY_AVAILABLE':
      return { ...state, onlyAvailable: !state.onlyAvailable };
    default:
      return state;
  }
};
