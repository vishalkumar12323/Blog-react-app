import clsx from "clsx";

const Button = ({ className, type, children, ...props }) => {
  return (
    <button
      className={clsx(
        `flex justify-center items-center capitalize py-2 px-6 bg-gradient-to-r from-lime-300 via-lime-400 to-lime-500 hover:shadow-green-400 transition focus:ring-4 focus:ring-lime-300 enabled:hover:bg-gradient-to-br dark:focus:ring-lime-800 active:shadow  rounded-lg font-medium text-[15px]`,
        className
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
