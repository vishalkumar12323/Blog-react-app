import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuthState } from "../store/authSlice";

const Layout = ({ children, isAuthenticated = true }) => {
  const authStatus = useSelector(getAuthState);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && authStatus !== isAuthenticated) {
      navigate("/login");
    } else if (!isAuthenticated && authStatus !== isAuthenticated) {
      navigate("/");
    }
  }, [authStatus, navigate, isAuthenticated]);
  return <>{children}</>;
};

export default Layout;
