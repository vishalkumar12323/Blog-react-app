import { CircleButton } from "./index";
import { IoMdArrowUp } from "react-icons/io";

const ScrollToTopButton = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className=" w-fit flex justify-center items-center flex-col fixed z-50 bottom-[16%] right-[16%]">
      <div className="mt-3 inline-block">
        <CircleButton onClick={handleClick}>
          <IoMdArrowUp size={25} className="transition bounce" />
        </CircleButton>
      </div>
    </div>
  );
};

export default ScrollToTopButton;
