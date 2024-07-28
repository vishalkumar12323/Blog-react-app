import clsx from "clsx";

const DefaultButton = ({ className, type, children, ...props }) => {
  return (
    <button
      className={clsx(
        `flex justify-center items-center capitalize py-2 px-6 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800  text-sm  text-center me-2 mb-2 active:shadow  rounded-lg font-medium text-[15px]`,
        className
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default DefaultButton;
