import clsx from "clsx";
import React, { useId } from "react";

const Select = React.forwardRef(function Select(
  { label, options, className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <>
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="text-[17px] mb-1 pl-1">
            {" "}
            {label}{" "}
          </label>
        )}
        <select
          {...props}
          id={id}
          className={clsx(
            `outline-none py-[7px] w-full px-2 bg-transparent text-black dark:text-white text-[18px] mb-3 border border-pink-500 to-orange-500 focus:shadow`,
            className
          )}
          ref={ref}
        >
          {options?.map((option) => (
            <option
              value={option}
              key={option}
              className="bg-slate-900 text-black dark:text-white"
            >
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
});

export default Select;
