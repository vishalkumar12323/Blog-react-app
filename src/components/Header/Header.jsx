import { useSelector } from "react-redux";
// import { useNavigation, Link } from "react-router-dom";
import { authState } from "../../store/authSlice";
import { Button } from "../index";

const Header = () => {
  const authStatus = useSelector(authState);
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
          <a href="/" className="logo text-3xl font-semibold">
            BLOGIFY
          </a>
        </div>
        <ul className="flex items-center justify-center gap-5 flex-wrap ">
          {navItems.map((item) =>
            item.active ? (
              <li key={item.name}>
                <a
                  href={item.url}
                  className="text-[1.2rem] font-medium transition hover:font-semibold"
                >
                  {item.name}
                </a>
              </li>
            ) : null
          )}
        </ul>

        <div className="flex gap-2 items-center justify-center">
          <li className="list-none text-[1.3rem]">Guest</li>
          {authStatus && (
            <>
              <Button
                type="button"
                className="py-2 px-7 font-medium text-[1.2rem]"
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
