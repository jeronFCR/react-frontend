import { useQuery } from '@tanstack/react-query';

import { Device } from '@interfaces';

export const useDevice = (id: Device['id'] | undefined | null) => {
  return useQuery<Device>({
    queryKey: ['devices', id],
    queryFn: async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/devices/${id}`);
      return response.json();
    },
    enabled: !!id,
    refetchInterval: Number(import.meta.env.VITE_API_REFETCH),
  });
};
