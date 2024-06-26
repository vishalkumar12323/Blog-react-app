import { useState, useEffect } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme"));
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setTheme((preTheme) => (preTheme === "light" ? "dark" : "light"));
    setIsDarkTheme((preIsDarkTheme) => !preIsDarkTheme);
    localStorage.setItem("theme", theme ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.remove("light");
      document.body.classList.add(theme);
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add(theme);
    }
  }, [theme, toggleTheme]);

  return { isDarkTheme, toggleTheme };
};
