import { Booking } from "./Booking";
import { Device } from "./Device";

export interface Room {
    id: string;
    name: string;
}

export type RDetail = Room & {
    booking: Booking | undefined;
    devices: Device[];
}

export type RoomList = Room & {
    busy: boolean;
}