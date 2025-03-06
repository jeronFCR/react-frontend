import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';

import { baseServerRoom } from '@helpers/tests/server';

import { useBookRoom, useReleaseRoom, useRoom, useRooms } from '../useRoom';

const server = baseServerRoom;

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('useRooms hook', () => {
  it('should fetch rooms successfully', async () => {
    const queryClient = new QueryClient();

    const { result } = renderHook(() => useRooms(), {
      wrapper: ({ children }) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>,
    });

    await waitFor(() => expect(result.current.data).toHaveLength(1));
    expect(result.current.data[0]).toEqual({ id: '1', name: 'Room 1' });
  });
});

describe('useRoom hook', () => {
  it('should fetch a single room successfully', async () => {
    const queryClient = new QueryClient();

    const { result } = renderHook(() => useRoom('1'), {
      wrapper: ({ children }) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>,
    });

    await waitFor(() => expect(result.current.data).toEqual({ id: '1', name: 'Room 1' }));
  });
});

describe('useBookRoom hook', () => {
  it('should books a room successfully', async () => {
    const queryClient = new QueryClient();

    const { result } = renderHook(() => useBookRoom('1'), {
      wrapper: ({ children }) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>,
    });

    await waitFor(() => {
      result.current.mutate();
      expect(result.current.isSuccess).toBe(true);
    });
  });

  it('should get error if room already booked', async () => {
    const queryClient = new QueryClient();

    const { result } = renderHook(() => useBookRoom('22'), {
      wrapper: ({ children }) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>,
    });

    await waitFor(() => {
      result.current.mutate();
      expect(result.current.isError).toBe(true);
    });
  });
});

describe('useReleaseRoom hook', () => {
  it('should releases a room successfully', async () => {
    const queryClient = new QueryClient();

    const { result } = renderHook(() => useReleaseRoom('1'), {
      wrapper: ({ children }) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>,
    });

    await waitFor(() => {
      result.current.mutate();
      expect(result.current.isSuccess).toBe(true);
    });
  });

  it('should get error if room already released', async () => {
    const queryClient = new QueryClient();

    const { result } = renderHook(() => useReleaseRoom('22'), {
      wrapper: ({ children }) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>,
    });

    await waitFor(() => {
      result.current.mutate();
      expect(result.current.isError).toBe(true);
    });
  });
});
