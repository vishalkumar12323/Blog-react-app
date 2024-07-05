import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useHref, useParams } from "react-router-dom";
import { getAuthState } from "../../store/authSlice";

const Layout = ({ children, isAuthenticated = true }) => {
  const authStatus = useSelector(getAuthState);
  const navigate = useNavigate();
  const href = useHref();
  const { slug } = useParams();

  useEffect(() => {
    if (isAuthenticated && authStatus !== isAuthenticated) {
      if (href === "/add-blog") {
        navigate("/add-blog");
      } else if (href === "/all-blogs") {
        navigate("/all-blogs");
      } else if (href === `/blog/${slug}`) {
        navigate(`/blog/${slug}`);
      } else {
        navigate("/");
      }
    } else if (!isAuthenticated && authStatus !== isAuthenticated) {
      if (href === "/signup") {
        navigate("/signup");
      } else {
        navigate("/login");
      }
    }
  }, [authStatus, navigate, isAuthenticated]);
  return <>{children}</>;
};

export default Layout;
