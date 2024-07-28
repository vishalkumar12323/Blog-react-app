import clsx from "clsx";
import { DefaultButton } from "../index";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const PaginationButtons = ({ handlePagination, total, page }) => {
  return (
    <div className="w-full mb-4 flex justify-center items-center gap-3">
      <DefaultButton
        className={clsx(`px-[15px!important] text-[22px]`, {
          "opacity-0": page === 1,
        })}
        onClick={() => handlePagination(page - 1)}
      >
        {" "}
        <MdChevronLeft />{" "}
      </DefaultButton>
      {[...Array(Math.ceil(total / 5))].map((_, i) => (
        <DefaultButton key={i + 1} onClick={() => handlePagination(i + 1)}>
          {i + 1}
        </DefaultButton>
      ))}
      <DefaultButton
        className={clsx(`px-[15px!important] text-[22px]`, {
          "opacity-0": page === Math.ceil(total / 5),
        })}
        onClick={() => handlePagination(page + 1)}
      >
        {" "}
        <MdChevronRight />{" "}
      </DefaultButton>
    </div>
  );
};

export default PaginationButtons;
