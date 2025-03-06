import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';

import { baseServerDevice } from '@helpers/tests/server';

import { useDevice } from '../useDevice';

const server = baseServerDevice;

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('useDevice hook', () => {
  it('should fetch a device successfully', async () => {
    const queryClient = new QueryClient();

    const { result } = renderHook(() => useDevice('1'), {
      wrapper: ({ children }) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>,
    });

    await waitFor(() => expect(result.current.data).toEqual({ id: '1', name: 'Device 1' }));
  });

  it('should not fetch a device when id is null', async () => {
    const queryClient = new QueryClient();

    const { result } = renderHook(() => useDevice(null), {
      wrapper: ({ children }) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>,
    });

    await waitFor(() => expect(result.current.data).toBeUndefined());
  });
});
