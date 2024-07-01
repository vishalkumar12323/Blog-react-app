import clsx from "clsx";

const Button = ({ className, type, children, ...props }) => {
  return (
    <button
      className={clsx(
        `py-2 px-8 border border-green-400/75 dark:border-green-500/75 bg-green-500 hover:bg-green-600 hover:shadow-green-400 transition active:shadow  rounded-lg text-[15px]`,
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
