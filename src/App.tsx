import React from "react";
import { Header, Footer, Container } from "./components";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getSession } from "./store/authSlice";
import { AppDispatch } from "./store/store";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // dispatch(getSession());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Header />
        <Outlet />
        <Footer />
      </Container>
    </>
  );
};

export default App;
