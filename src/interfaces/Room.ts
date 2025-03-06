import { Booking } from './Booking';
import { Device } from './Device';

export interface Room {
  id: string;
  name: string;
}

export type RoomFullDetail = Room & {
  booking: Booking | undefined;
  devices: Device[];
};

export type RoomShortDetail = Room & {
  busy: boolean;
};
