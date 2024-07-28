import clsx from "clsx";

const Container = ({ children, className }) => {
  return (
    <main className={clsx(`max-w-screen-xl mx-auto flex flex-col`, className)}>
      {children}
    </main>
  );
};

export default Container;
