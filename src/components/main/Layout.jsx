import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useHref, useParams } from "react-router-dom";
import { session } from "../../store/authSlice";

const Layout = ({ children, isAuthenticated = true }) => {
  const { status: authStatus } = useSelector(session);
  const navigate = useNavigate();
  const href = useHref();
  const { id, slug } = useParams();

  useEffect(() => {
    if (isAuthenticated && authStatus !== isAuthenticated) {
      switch (href) {
        case "/new-blog":
          navigate(href);
          break;
        case `/blog/${id}/${slug}`:
          navigate(href);
          break;
        case `/edit/${id}/${slug}`:
          navigate(href);
          break;
        default:
          navigate("/");
          break;
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
