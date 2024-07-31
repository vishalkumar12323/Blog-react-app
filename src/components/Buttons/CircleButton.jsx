import clsx from "clsx";
import { forwardRef } from "react";

const CircleButton = ({ className, type, children, ...props }) => {
  return (
    <button
      className={clsx(
        `w-10 h-10 inline-flex justify-center items-center capitalize text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 text-sm text-center active:shadow  rounded-full font-medium text-[15px]`,
        className
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default CircleButton;
