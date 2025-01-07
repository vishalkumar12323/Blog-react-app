import { useState } from "react";

const usePagination = (totalPage: number) => {
  const [page, setPage] = useState(1);

  const handlePagination = (selectedPage: number) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= Math.ceil(totalPage / 5) &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  return { page, handlePagination };
};

export default usePagination;
