import React from 'react';
import { useTranslation } from 'react-i18next';

import { ChevronRight, DoorOpen } from 'lucide-react';

import { RoomShortDetail } from '@interfaces';

interface RoomListCardProps {
  room: RoomShortDetail;
}

const RoomListCard: React.FC<RoomListCardProps> = ({ room }) => {
  const [t] = useTranslation();

  return (
    <>
      <div>
        <DoorOpen size={35} />
      </div>
      <div>
        <div data-testid="room-list-name">{room.name}</div>
        <div data-testid="room-list-status" className="text-xs font-semibold opacity-(--custom-opacity)">
          <div className="inline-grid *:[grid-area:1/1]">
            <div className={`status ${room.busy ? 'status-error' : 'status-success'} animate-ping`}></div>
            <div className={`status ${room.busy ? 'status-error' : 'status-success'}`}></div>
          </div>{' '}
          {room.busy ? t('room.list.card.busy-status') : t('room.list.card.available-status')}
        </div>
      </div>
      <div className="p-2">
        <ChevronRight />
      </div>
    </>
  );
};

export default RoomListCard;
