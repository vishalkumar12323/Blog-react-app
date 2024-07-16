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
            `outline-none py-2 px-2 text-black w-full bg-transparent border border-pink-500 to-orange-500 focus:bg-gradient-to-br focus:from-pink-100 focus:to-orange-100 transition-all`,
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
