import { RoomFullDetail, RoomShortDetail } from "@interfaces";

import { mockDeviceShortList } from "./devices";

export const mockRoomList: RoomShortDetail[] = [
    {
        id: '500bd236-558b-4573-b7b2-4cc9891d30b5',
        name: 'Room 1',
        busy: true
    }, {
        id: '500bd236-test-4573-test-4cc9891d30b5',
        name: 'Room 2',
        busy: false
    }
]

export const mockRoom: RoomFullDetail = {
    id: '500bd236-558b-4573-b7b2-4cc9891d30b5',
    name: 'Room 1',
    devices: mockDeviceShortList,
    booking: { fullName: 'Test Name', avatar: 'Test Avatar' }
}