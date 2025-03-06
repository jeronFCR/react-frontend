import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { ChevronsLeft, ChevronsRight } from 'lucide-react';

import { usePagination, useRoomListFilter } from '@hooks';
import { useRooms } from '@services';

import RoomListCard from '@components/room/RoomListCard';
import { Button, SkeletonList } from '@components/ui';
import { Checkbox, FieldSet, SingleInput } from '@components/ui/form';

export default function Home() {
  const navigate = useNavigate();
  const [t] = useTranslation();
  const { isLoading, data: rooms } = useRooms();

  const { filterState, filteredRooms, setRoomName, toggleOnlyAvailable } = useRoomListFilter(rooms);

  const { paginatedData, currentPage, totalPages, nextPage, prevPage, resetPage } = usePagination(filteredRooms);

  const handleRoomClick = useCallback((id: string) => navigate(`/rooms/${id}`), [navigate]);

  useEffect(() => resetPage(), [filterState]);

  return (
    <ul key={currentPage} className="list p-4 size-152 bg-base-100 rounded-box shadow-md">
      <li className="pb-2 opacity-(--custom-opacity) tracking-wide">
        <FieldSet title={t('room.list.filter-form.legend')}>
          <SingleInput
            className="flex-1"
            dataTestId="room-list-name-filter"
            placeholder={t('room.list.filter-form.name-input.placeholder')}
            value={filterState.roomName}
            changeFn={(e) => setRoomName(e.target.value)}
          />

          <Checkbox
            dataTestId="room-list-available-filter"
            label={t('room.list.filter-form.available-checkbox.label')}
            checked={filterState.onlyAvailable}
            changeFn={toggleOnlyAvailable}
          />
        </FieldSet>
      </li>

      {isLoading ? (
        <li className="list-row block">
          <SkeletonList />
        </li>
      ) : !paginatedData.length ? (
        <li className="block text-center text-gray-500 mt-auto">{t('room.list.no-rooms')}</li>
      ) : (
        paginatedData.map((room) => (
          <li key={room.id} data-testid="room-list-item" className="list-row cursor-pointer" onClick={() => handleRoomClick(room.id)}>
            <RoomListCard room={room} />
          </li>
        ))
      )}

      <li className="text-xs tracking-wide text-center mt-auto">
        <div className="join">
          <Button dataTestId="room-list-prev-page" className="join-item" onClick={prevPage} disabled={currentPage === 0}>
            <ChevronsLeft size={10} />
          </Button>

          <Button dataTestId="room-list-reset-page" className="join-item" onClick={resetPage} disabled={currentPage === 0}>
            <span>{t('room.list.page-number', { page: currentPage + 1 })}</span>
          </Button>

          <Button
            dataTestId="room-list-next-page"
            className="join-item"
            onClick={nextPage}
            disabled={currentPage === totalPages - 1 || !paginatedData.length}
          >
            <ChevronsRight size={10} />
          </Button>
        </div>
      </li>
    </ul>
  );
}
