import { useState, useMemo } from "react";

interface PaginationResult<T> {
  paginatedData: T[];
  currentPage: number;
  totalPages: number;
  nextPage: () => void;
  prevPage: () => void;
  resetPage: () => void;
  setPage: (page: number) => void;
}

export function usePagination<T>(
  data: T[],
  itemsPerPage: number = 6
): PaginationResult<T> {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = useMemo(
    () => Math.ceil(data.length / itemsPerPage),
    [data, itemsPerPage]
  );

  const paginatedData = useMemo(
    () =>
      data.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage),
    [data, currentPage, itemsPerPage]
  );

  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 0));
  const resetPage = () => setCurrentPage(0);
  const setPage = (page: number) =>
    setCurrentPage(Math.max(0, Math.min(page, totalPages - 1)));

  return {
    paginatedData,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    resetPage,
    setPage,
  };
}
