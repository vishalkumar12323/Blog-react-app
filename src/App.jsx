import { Header, Footer, Container, ScrollToTopButton } from "./components";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getSession } from "./store/authSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSession());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Header />
        <Outlet />
        <Footer />
        <ScrollToTopButton />
      </Container>
    </>
  );
};

export default App;
