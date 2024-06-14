import clsx from "clsx";
import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className, ...props },
  ref
) {
  const id = useId();
  return (
    <>
      <div className="w-full">
        {label && <label htmlFor={id}>{label}</label>}
        <input
          type={type}
          className={clsx(`outline-none py-2 px-2`, className)}
          {...props}
          ref={ref}
        />
      </div>
    </>
  );
});

export default Input;
