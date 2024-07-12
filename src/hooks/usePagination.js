import { useState } from "react";

const usePagination = (totalPage) => {
  const [page, setPage] = useState(1);

  const handlePagination = (selectedPage) => {
    console.log("outside...", { selectedPage, totalPage, page });
    if (
      selectedPage >= 1 &&
      selectedPage <= Math.ceil(totalPage / 5) &&
      selectedPage !== page
    ) {
      console.log("inside...");
      setPage(selectedPage);
    }
  };

  return { page, handlePagination };
};

export default usePagination;
