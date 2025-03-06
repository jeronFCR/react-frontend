export type RoomAction =
  | { type: 'BOOK_ROOM_SUCCESS'; payload: string }
  | { type: 'RELEASE_ROOM_SUCCESS'; payload: string }
  | { type: 'ERROR'; payload: string };

export interface RoomState {
  message: string;
  error: string;
}

export const initialState: RoomState = {
  message: '',
  error: '',
};

export const roomReducer = (state: RoomState, action: RoomAction): RoomState => {
  switch (action.type) {
    case 'BOOK_ROOM_SUCCESS':
    case 'RELEASE_ROOM_SUCCESS':
      return { ...state, message: action.payload, error: '' };
    case 'ERROR':
      return { ...state, error: action.payload, message: '' };
    default:
      return state;
  }
};
