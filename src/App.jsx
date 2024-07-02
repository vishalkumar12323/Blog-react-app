import { Header, Footer, Container } from "./components";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { authService } from "./services/auth_service";
import { login as authLogin, logout } from "./store/authSlice";

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getSession()
      .then((user) => {
        if (user) {
          dispatch(authLogin(user));
        }
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default App;
