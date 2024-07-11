import { useState, useEffect } from "react";

const usePagination = () => {
  const [page, setPage] = useState(1);

  const onPageChange = (currentPage, totalPages) => {
    if (
      currentPage >= 1 &&
      currentPage <= totalPages / 10 &&
      currentPage !== page
    ) {
      setPage(currentPage);
    }
  };

  return { page, onPageChange };
};

export default usePagination;
