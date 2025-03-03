import { filterReducer, initialFilterState, RoomListFilterAction, RoomListFilterModel } from '../roomListFilterReducer';

describe('filterReducer', () => {
    it('should handle SET_ROOM_NAME action', () => {
        const action: RoomListFilterAction = {
            type: 'SET_ROOM_NAME',
            payload: 'Room 1',
        };

        const expectedState: RoomListFilterModel = {
            roomName: 'Room 1',
            onlyAvailable: false,
        };

        const newState = filterReducer(initialFilterState, action);
        expect(newState).toEqual(expectedState);
    });

    it('should handle TOGGLE_ONLY_AVAILABLE action', () => {
        const action: RoomListFilterAction = {
            type: 'TOGGLE_ONLY_AVAILABLE',
        };

        const stateWithAvailabilityTrue: RoomListFilterModel = {
            roomName: '',
            onlyAvailable: true,
        };

        const stateWithAvailabilityFalse: RoomListFilterModel = {
            roomName: '',
            onlyAvailable: false,
        };

        const newState1 = filterReducer(stateWithAvailabilityFalse, action);
        expect(newState1.onlyAvailable).toBe(true);

        const newState2 = filterReducer(stateWithAvailabilityTrue, action);
        expect(newState2.onlyAvailable).toBe(false);
    });
});