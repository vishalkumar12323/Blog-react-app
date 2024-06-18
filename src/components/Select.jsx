import clsx from "clsx";
import React, { useId } from "react";

const Select = ({ label, options, className = "", ...props }, ref) => {
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
            `outline-none py-[7px] rounded-md w-full px-2 text-[18px] mb-3 border focus:shadow`,
            className
          )}
          ref={ref}
        >
          {options?.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default React.forwardRef(Select);
