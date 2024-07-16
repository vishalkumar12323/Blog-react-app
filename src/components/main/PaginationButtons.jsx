import clsx from "clsx";
import { Button } from "../index";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const PaginationButtons = ({ handlePagination, total, page }) => {
  return (
    <div className="w-full mb-4 flex justify-center items-center gap-3">
      <Button
        className={clsx(`px-[15px!important] text-[22px]`, {
          "opacity-0": page === 1,
        })}
        onClick={() => handlePagination(page - 1)}
      >
        {" "}
        <MdChevronLeft />{" "}
      </Button>
      {[...Array(Math.ceil(total / 5))].map((_, i) => (
        <Button key={i + 1} onClick={() => handlePagination(i + 1)}>
          {i + 1}
        </Button>
      ))}
      <Button
        className={clsx(`px-[15px!important] text-[22px]`, {
          "opacity-0": page === Math.ceil(total / 5),
        })}
        onClick={() => handlePagination(page + 1)}
      >
        {" "}
        <MdChevronRight />{" "}
      </Button>
    </div>
  );
};

export default PaginationButtons;
