import clsx from "clsx";
import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", autoComplete = "off", ...props },
  ref
) {
  const id = useId();
  return (
    <>
      <div className="w-full mb-4">
        {label && (
          <label htmlFor={id} className="pl-1 capitalize text-[17px]">
            {label}
          </label>
        )}
        <input
          id={id}
          type={type}
          className={clsx(
            `outline-none py-2 px-2 text-black dark:text-white w-full bg-transparent border border-lime-500/75`,
            className
          )}
          autoComplete={autoComplete}
          {...props}
          ref={ref}
        />
      </div>
    </>
  );
});

export default Input;
