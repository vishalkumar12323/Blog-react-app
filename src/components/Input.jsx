import clsx from "clsx";
import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <>
      <div className="w-full mb-1">
        {label && (
          <label htmlFor={id} className="pl-1 capitalize text-[17px]">
            {label}
          </label>
        )}
        <input
          id={id}
          type={type}
          className={clsx(
            `outline-none py-[7px] rounded-md w-full px-2 text-[18px] mb-3 border focus:shadow transition-all dark:text-black`,
            className
          )}
          {...props}
          ref={ref}
        />
      </div>
    </>
  );
});

export default Input;
