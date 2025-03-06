import { screen } from '@testing-library/react';

import { i18nRender } from '@helpers/tests/i18nRender';
import { mockRoomList } from '@helpers/tests/mocks/room';

import RoomListCard from '../RoomListCard';

describe('RoomListCard Component', () => {
  it('should display room name', () => {
    i18nRender(<RoomListCard room={mockRoomList[0]} />);

    expect(screen.getByTestId('room-list-name')).toHaveTextContent('Room 1');
  });

  it('should display Available status', () => {
    i18nRender(<RoomListCard room={mockRoomList[1]} />);

    expect(screen.getByTestId('room-list-status')).toHaveTextContent('Available');
  });

  it('should display Busy status', () => {
    i18nRender(<RoomListCard room={mockRoomList[0]} />);

    expect(screen.getByTestId('room-list-status')).toHaveTextContent('Busy');
  });
});
