import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { session } from "../../store/authSlice";

const Footer = () => {
  const { status: authStatus } = useSelector(session);
  const navItems = [
    { name: "home", active: true, url: "/" },
    { name: "create blog", active: authStatus, url: "/new-blog" },
    { name: "login", active: !authStatus, url: "/login" },
    { name: "signup", active: !authStatus, url: "/signup" },
  ];
  return (
    <footer className="h-auto w-full pt-10 pb-12 mt-4 font border-t flex items-center border-pink-500/10 backdrop-blur-sm">
      <div className="w-full grid grid-cols-4 place-items-center items-start gap-3">
        <div>
          <Link
            to={"/"}
            className="logo text-2xl bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl text-transparent bg-clip-text font-semibold select-none"
          >
            W.Lab
          </Link>
        </div>
        <div>
          <span className="text-2xl cursor-default capitalize">links</span>
          <ul className="flex flex-col gap-3 mt-3">
            {navItems.map((item) =>
              item.active ? (
                <li
                  key={item.name}
                  className="text-[1.1rem] capitalize transition hover:text-orange-600"
                >
                  <Link to={item.url}>{item.name}</Link>
                </li>
              ) : null
            )}
          </ul>
        </div>

        <div>
          <span className="text-2xl cursor-default capitalize">accounts</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
