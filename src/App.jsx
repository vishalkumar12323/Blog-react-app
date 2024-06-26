import { Header, Footer, Container } from "./components";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { authService } from "./services/auth_service";
import { login, logout } from "./store/authSlice";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   authService
  //     .getSession()
  //     .then((user) => {
  //       console.log(user);
  //       if (user) {
  //         dispatch(login({ user }));
  //       } else {
  //         dispatch(logout());
  //       }
  //     })
  //     .catch((e) => console.log(e))
  //     .finally(() => setIsLoggedIn(true));
  // }, []);
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
