import { RoomAction, RoomState, initialState, roomReducer } from '../roomReducer';

describe('roomReducer', () => {
  it('should handle BOOK_ROOM_SUCCESS action', () => {
    const action: RoomAction = {
      type: 'BOOK_ROOM_SUCCESS',
      payload: 'Room Room 1 booked successfully',
    };

    const expectedState: RoomState = {
      message: 'Room Room 1 booked successfully',
      error: '',
    };

    const newState = roomReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });

  it('should handle RELEASE_ROOM_SUCCESS action', () => {
    const action: RoomAction = {
      type: 'RELEASE_ROOM_SUCCESS',
      payload: 'Room Room 1 is now available',
    };

    const expectedState: RoomState = {
      message: 'Room Room 1 is now available',
      error: '',
    };

    const newState = roomReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });

  it('should handle ERROR action', () => {
    const action: RoomAction = {
      type: 'ERROR',
      payload: 'Room is already free',
    };

    const expectedState: RoomState = {
      message: '',
      error: 'Room is already free',
    };

    const newState = roomReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });
});
