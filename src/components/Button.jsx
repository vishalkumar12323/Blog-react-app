import clsx from "clsx";

const Button = ({ className, type, children, ...props }) => {
  return (
    <button className={clsx(`text-black`, className)} type={type} {...props}>
      {children}
    </button>
  );
};

export default Button;
