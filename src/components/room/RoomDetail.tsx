import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { ChevronLeft, DoorOpen, TvMinimal } from 'lucide-react';

import { Device, RoomFullDetail } from '@interfaces';

import { Button, Card, Skeleton } from '@components/ui';

interface DetailProps {
  room: RoomFullDetail | undefined;
  loading: boolean;
  selectDevice: (device: Device) => void;
  handleRoomAction: (actionType: 'BOOK' | 'RELEASE') => void;
}

const RoomDetail: React.FC<DetailProps> = ({ room, loading, selectDevice, handleRoomAction }) => {
  const navigate = useNavigate();
  const [t] = useTranslation();

  return (
    <Card>
      {loading ? (
        <Skeleton />
      ) : room ? (
        <>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <div data-testid="room-detail-back" className="cursor-pointer" onClick={() => navigate('/')}>
              <ChevronLeft />
            </div>
            <DoorOpen />
            <span>{room.name}</span>
          </h2>

          <h3 className="mt-4 text-lg font-semibold">{t('room.detail.devices-section.title')}</h3>
          <div className="mt-2 space-y-2">
            {room.devices.map((device) => (
              <Button key={device.id} className="w-full flex justify-between items-center" onClick={() => selectDevice(device)}>
                <span>{device.name}</span>
                <TvMinimal />
              </Button>
            ))}
          </div>

          <h3 className="mt-4 text-lg font-semibold">{t('room.detail.book-section.title')}</h3>
          {room.booking ? (
            <div className="flex items-center gap-2">
              <img className="w-6 h-6 rounded-full" src={room.booking.avatar} />
              <span>{room.booking.fullName}</span>
            </div>
          ) : (
            <p className="text-gray-500">{t('room.detail.book-section.no-booking')}</p>
          )}

          <Button dataTestId="room-detail-action-button" className="w-full" onClick={() => handleRoomAction(room.booking ? 'RELEASE' : 'BOOK')}>
            {room.booking ? t('room.detail.actions.release-button') : t('room.detail.actions.book-button')}
          </Button>
        </>
      ) : (
        <p className="text-center text-gray-500">{t('room.detail.no-data')}</p>
      )}
    </Card>
  );
};

export default RoomDetail;
