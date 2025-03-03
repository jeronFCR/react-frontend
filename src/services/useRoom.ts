import { useQuery, useMutation } from '@tanstack/react-query';

import { RDetail, RoomList } from '@interfaces';

export const useRooms = () => {
    return useQuery<RoomList[]>({
        queryKey: ['rooms'],
        initialData: [],
        queryFn: async () => {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms`);
            return response.json();
        },
        refetchInterval: Number(import.meta.env.VITE_API_REFETCH),
        refetchOnMount: true,
        refetchOnWindowFocus: true
    });
};

export const useRoom = (id: RoomList['id'] | undefined) => {
    return useQuery<RDetail>({
        queryKey: ['rooms', id],
        queryFn: async () => {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms/${id}`);

            if (!response.ok) {
                const errorResponse = await response.json();
                throw Error(errorResponse.error);
            }

            return response.json();
        },
        enabled: !!id,
        refetchInterval: Number(import.meta.env.VITE_API_REFETCH),
        refetchOnWindowFocus: true
    });
};

export const useBookRoom = (id: RDetail['id'] | undefined) => {
    return useMutation({
        mutationFn: async () => {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms/${id}/book`, { method: 'POST' });

            if (!response.ok) {
                const errorResponse = await response.json();
                throw Error(errorResponse.error);
            }

            return response.json();
        },
    });
};

export const useReleaseRoom = (id: RDetail['id'] | undefined) => {
    return useMutation({
        mutationFn: async () => {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms/${id}/release`, { method: 'POST' });

            if (!response.ok) {
                const errorResponse = await response.json();
                throw Error(errorResponse.error);
            }

            return response.json();
        },
    });
};