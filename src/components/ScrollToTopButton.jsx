import React from "react";
import { CircleButton } from "./index";
import { IoMdArrowUp } from "react-icons/io";

const ScrollToTopButton = () => {
  return (
    <span className="w-fit flex justify-center items-center flex-col sticky z-50 bottom-[10%] right-0">
      <span className="text-2xl cursor-default capitalize">go to top</span>
      <div className="mt-3 inline-block">
        <CircleButton>
          <IoMdArrowUp size={25} />
        </CircleButton>
      </div>
    </span>
  );
};

export default ScrollToTopButton;
