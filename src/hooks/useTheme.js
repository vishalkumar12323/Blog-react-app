import { useState, useEffect } from "react";

const getCurrentTheme = () => {
  const theme = localStorage.getItem("theme");
  if (theme) {
    return theme;
  } else {
    return "light";
  }
};
export const useTheme = () => {
  const [theme, setTheme] = useState(getCurrentTheme());
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setTheme((preTheme) => (preTheme === "dark" ? "ligth" : "dark"));
    setIsDarkTheme((preIsDarkTheme) => !preIsDarkTheme);
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
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
