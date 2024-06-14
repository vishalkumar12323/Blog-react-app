import clsx from "clsx";
import React, { useId } from "react";

const Select = ({ label, options, className = "", ...props }, ref) => {
  const id = useId();
  return (
    <>
      <div className="w-full">
        {label && <label htmlFor={id}></label>}
        <select {...props} id={id} className={clsx(``, className)} ref={ref}>
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
