import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authState } from "../store/authSlice";

const Layout = ({ children, isAuthenticated = true }) => {
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector(authState);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(isAuthenticated && authStatus !== isAuthenticated);
    // console.log(authStatus);
    if (isAuthenticated && authState !== isAuthenticated) {
      navigate("/");
    }
  }, [authStatus, navigate, isAuthenticated]);
  return <>{children}</>;
};

export default Layout;
