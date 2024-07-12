import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useHref, useParams } from "react-router-dom";
import { getAuthState } from "../../store/authSlice";

const Layout = ({ children, isAuthenticated = true }) => {
  const authStatus = useSelector(getAuthState);
  const navigate = useNavigate();
  const href = useHref();
  const { id, slug } = useParams();

  useEffect(() => {
    if (isAuthenticated && authStatus !== isAuthenticated) {
      switch (href) {
        case "/new-blog":
          navigate("/new-blog");
          break;
        case `/blog/${id}/${slug}`:
          navigate(`/blog/${id}/${slug}`);
          break;
        case `/edit-blog/${id}`:
          navigate(`/edit-blog/${id}`);
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
