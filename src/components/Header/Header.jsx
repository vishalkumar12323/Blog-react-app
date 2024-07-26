import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { session } from "../../store/authSlice";
import { UserProfile } from "../index";
import { useTheme } from "../../hooks";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import clsx from "clsx";

const Header = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const { status: authStatus, user } = useSelector(session);
  const navItems = [
    { name: "home", active: true, url: "/" },
    { name: "create blog", active: authStatus, url: "/new-blog" },
    { name: "login", active: !authStatus, url: "/login" },
    { name: "signup", active: !authStatus, url: "/signup" },
  ];
  return (
    <header className="font h-[3.5rem] flex items-center sticky top-0 z-40 w-full backdrop-blur border-b border-pink-500/10">
      <nav className="flex flex-wrap justify-between w-full">
        <div>
          <Link
            to="/"
            className="logo text-3xl bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl text-transparent bg-clip-text font-semibold select-none"
          >
            W.Lab
          </Link>
        </div>
        <ul className="flex items-center justify-center gap-5 flex-wrap ">
          {navItems.map((item) =>
            item.active ? (
              <li key={item.name}>
                <NavLink
                  to={item.url}
                  className={({ isActive }) => {
                    return clsx(
                      `text-[1.1rem] capitalize transition hover:text-orange-600`,
                      {
                        "font-normal text-orange-500": isActive,
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
              moonColor={isDarkTheme && "white"}
              sunColor={!isDarkTheme && "black"}
              onChange={(checked) => isDarkTheme && checked}
            />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
