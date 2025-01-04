import React from "react";
const Container = ({ children }: {children: React.ReactNode}) => {
  return (
    <main className="max-w-screen-xl mx-auto min-h-screen flex flex-col">
      {children}
    </main>
  );
};

export default Container;
