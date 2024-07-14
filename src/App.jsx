import { Header, Footer, Container } from "./components";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSession, session } from "./store/authSlice";

const App = () => {
  const { loading, status, user } = useSelector(session);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log({ loading, status, user });
  useEffect(() => {
    dispatch(getSession());
  }, []);

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
