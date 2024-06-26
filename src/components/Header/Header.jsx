import { useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { getAuthState } from "../../store/authSlice";
import { Button } from "../index";
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
    <header className="font h-[3.5rem] px-8 flex items-center sticky top-0 z-40 w-full backdrop-blur border-b border-slate-900/10 dark:border-slate-50/10 dark:bg-transparent">
      <nav className="flex flex-wrap justify-between w-full">
        <div>
          <NavLink to="/" className="logo text-3xl font-semibold select-none">
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
                      `text-[1.1rem] transition hover:font-semibold`,
                      {
                        "font-semibold": isActive,
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

        <div className="flex gap-2 items-center justify-center">
          {authStatus && (
            <>
              <li className="list-none text-[1.2rem]">{user?.name}</li>
              <Button
                type="button"
                className="py-2 px-7 font-medium text-[1.1rem]"
                onClick={() => {
                  authService.logout();
                  navigate("/login");
                }}
              >
                Logout
              </Button>
            </>
          )}
          <Button
            onClick={toggleTheme}
            className="w-0 h-fit border-none shadow-none active:shadow-none py-0 px-0"
          >
            <DarkModeSwitch
              checked={isDarkTheme}
              moonColor="black"
              sunColor="white"
              onChange={(checked) => isDarkTheme && checked}
            />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
