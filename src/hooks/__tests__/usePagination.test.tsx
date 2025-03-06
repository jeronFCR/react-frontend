import { act, renderHook } from '@testing-library/react';

import { usePagination } from '../usePagination';

describe('usePagination Hook', () => {
  const data = Array.from({ length: 20 }, (_, i) => i + 1);
  const itemsPerPage = 5;

  it('should initialize with correct values', () => {
    const { result } = renderHook(() => usePagination(data, itemsPerPage));

    expect(result.current.currentPage).toBe(0);
    expect(result.current.totalPages).toBe(4);
    expect(result.current.paginatedData).toEqual([1, 2, 3, 4, 5]);
  });

  it('should go to the next page', () => {
    const { result } = renderHook(() => usePagination(data, itemsPerPage));

    act(() => {
      result.current.nextPage();
    });

    expect(result.current.currentPage).toBe(1);
    expect(result.current.paginatedData).toEqual([6, 7, 8, 9, 10]);
  });

  it('should go to the previous page', () => {
    const { result } = renderHook(() => usePagination(data, itemsPerPage));

    act(() => {
      result.current.nextPage();
      result.current.prevPage();
    });

    expect(result.current.currentPage).toBe(0);
    expect(result.current.paginatedData).toEqual([1, 2, 3, 4, 5]);
  });

  it('should reset to the first page', () => {
    const { result } = renderHook(() => usePagination(data, itemsPerPage));

    act(() => {
      result.current.nextPage();
      result.current.nextPage();
      result.current.resetPage();
    });

    expect(result.current.currentPage).toBe(0);
    expect(result.current.paginatedData).toEqual([1, 2, 3, 4, 5]);
  });

  it('should set a specific page', () => {
    const { result } = renderHook(() => usePagination(data, itemsPerPage));

    act(() => {
      result.current.setPage(2);
    });

    expect(result.current.currentPage).toBe(2);
    expect(result.current.paginatedData).toEqual([11, 12, 13, 14, 15]);
  });

  it('should not go beyond total pages', () => {
    const { result } = renderHook(() => usePagination(data, itemsPerPage));

    act(() => {
      result.current.setPage(10);
    });

    expect(result.current.currentPage).toBe(3);
    expect(result.current.paginatedData).toEqual([16, 17, 18, 19, 20]);
  });

  it('should not go below page 0', () => {
    const { result } = renderHook(() => usePagination(data, itemsPerPage));

    act(() => {
      result.current.setPage(-5);
    });

    expect(result.current.currentPage).toBe(0);
    expect(result.current.paginatedData).toEqual([1, 2, 3, 4, 5]);
  });
});
