import { Header, Footer, Container, NotificationBar } from "./components";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { authService } from "./services/auth_service";
import { login as authLogin, logout } from "./store/authSlice";

const App = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   authService
  //     .getSession()
  //     .then((user) => {
  //       if (user) {
  //         const userData = {
  //           id: user.$id,
  //           name: user.name,
  //           email: user.email,
  //         };
  //         dispatch(authLogin(userData));
  //         navigate("/");
  //       } else {
  //         dispatch(logout());
  //       }
  //     })
  //     .catch((e) => console.log(e));
  // }, []);

  return (
    <>
      <Header />
      <NotificationBar />
      {/* <Container>
        <Outlet />
      </Container> */}
      {/* <Footer /> */}
    </>
  );
};

export default App;
