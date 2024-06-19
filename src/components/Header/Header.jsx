import { useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { authState } from "../../store/authSlice";
import { Button } from "../index";
import { authService } from "../../services/auth_service";
import clsx from "clsx";

const Header = () => {
  const authStatus = useSelector(authState);
  const navigate = useNavigate();
  const navItems = [
    { name: "Home", active: true, url: "/" },
    { name: "All Blog", active: authStatus, url: "/all-blogs" },
    { name: "Add Blog", active: authStatus, url: "/add-blog" },
    { name: "Login", active: !authStatus, url: "/login" },
    { name: "Signup", active: !authStatus, url: "/signup" },
  ];
  return (
    <header className="font h-16 w-full px-3 flex items-center">
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
                      `text-[1.2rem] transition hover:font-semibold`,
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
              {/* <li className="list-none text-[1.3rem]">Guest</li> */}
              <Button
                type="button"
                className="py-2 px-7 font-medium text-[1.2rem]"
                onClick={() => {
                  // authService.logout();
                  // navigate("/login");
                }}
              >
                Logout
              </Button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
