const Container = ({ children }) => {
  return (
    <main className="max-w-screen-xl mx-auto min-h-screen flex flex-col">
      {children}
    </main>
  );
};

export default Container;
