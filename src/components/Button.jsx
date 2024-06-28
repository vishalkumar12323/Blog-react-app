import clsx from "clsx";

const Button = ({ className, type, children, ...props }) => {
  return (
    <button
      className={clsx(
        `border border-green-400/75 dark:border-green-500/75 bg-green-500/75 hover:bg-green-600/75 hover:shadow-green-400 transition active:shadow py-2 px-8 rounded-lg text-[15px]`,
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
