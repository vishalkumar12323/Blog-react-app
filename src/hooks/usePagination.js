import { useState, useEffect } from "react";

const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page, totalPages) => {
    if (page >= 1 && page <= totalPages / 10 && page !== currentPage) {
      setCurrentPage(currentPage);
    }
  };

  return { currentPage, onPageChange };
};

export default usePagination;
