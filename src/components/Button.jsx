import clsx from "clsx";

const Button = ({ className, type, children, ...props }) => {
  return (
    <button
      className={clsx(
        `capitalize py-2 px-8 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:shadow-green-400 transition focus:ring-4 focus:ring-lime-300 enabled:hover:bg-gradient-to-br dark:focus:ring-lime-800 active:shadow  rounded-lg font-medium text-[15px]`,
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

// ("items-stretch justify-center p-0.5 text-center  transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 text-gray-900 focus:ring-4 focus:ring-lime-300 enabled:hover:bg-gradient-to-br dark:focus:ring-lime-800 rounded-lg");
