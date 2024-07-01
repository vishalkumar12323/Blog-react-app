import { useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { getAuthState } from "../../store/authSlice";
import { Button, UserProfile } from "../index";
import { authService } from "../../services/auth_service";
import { useTheme } from "../../hooks/useTheme";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import clsx from "clsx";

const Header = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const { status: authStatus, user } = useSelector(getAuthState);
  const navigate = useNavigate();
  const navItems = [
    { name: "Home", active: true, url: "/" },
    { name: "All Blog", active: authStatus, url: "/all-blogs" },
    { name: "Add Blog", active: authStatus, url: "/add-blog" },
    { name: "Login", active: !authStatus, url: "/login" },
    { name: "Signup", active: !authStatus, url: "/signup" },
  ];
  return (
    <header className="font h-[3.5rem] px-8 flex items-center sticky top-0 z-40 w-full backdrop-blur border-b border-green-500/55 dark:bg-transparent">
      <nav className="flex flex-wrap justify-between w-full">
        <div>
          <NavLink
            to="/"
            className="logo text-3xl text-green-500 font-semibold select-none"
          >
            BLOGIFY
          </NavLink>
        </div>
        <ul className="flex items-center justify-center gap-5 flex-wrap ">
          {navItems.map((item) =>
            item.active ? (
              <li key={item.name}>
                <NavLink
                  to={item.url}
                  className={({ isActive }) => {
                    return clsx(
                      `text-[1.1rem] transition hover:text-green-500`,
                      {
                        "font-normal text-green-500": isActive,
                      }
                    );
                  }}
                >
                  {item.name}
                </NavLink>
              </li>
            ) : null
          )}
        </ul>

        <div className="flex gap-2 items-center justify-center relative">
          {authStatus && (
            <>
              <UserProfile user={user} />
            </>
          )}
          <button
            onClick={toggleTheme}
            className="bg-transparent hover:bg-transparent border-none active:shadow-none"
          >
            <DarkModeSwitch
              checked={isDarkTheme}
              moonColor="black"
              sunColor="white"
              onChange={(checked) => isDarkTheme && checked}
            />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
