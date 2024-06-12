import { useSelector } from "react-redux";
// import { useNavigation, Link } from "react-router-dom";
import { authState } from "../../store/authSlice";

const Header = () => {
  const authStatus = useSelector(authState);
  const navItems = [
    { name: "Home", active: true, url: "/" },
    { name: "All Posts", active: authStatus, url: "/all-posts" },
    { name: "Add Post", active: authStatus, url: "/add-post" },
    { name: "Login", active: !authStatus, url: "/login" },
    { name: "Signup", active: !authStatus, url: "/signup" },
  ];
  return (
    <header className="h-16 flex items-center">
      <nav className="flex">
        <div>
          <a href="/" className="logo">
            BLOGIFY
          </a>
        </div>
        <ul>
          {navItems.map((item) =>
            item.active ? (
              <li key={item.name}>
                <button>{item.name}</button>
              </li>
            ) : null
          )}
          {authStatus && <button>Logout</button>}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
