import { useState, useEffect, useCallback } from "react";

const getCurrentTheme = () => {
  const theme = localStorage.getItem("theme");
  if (theme) {
    return theme;
  } else {
    return "light";
  }
};
const useTheme = () => {
  const [theme, setTheme] = useState(getCurrentTheme());
  const [isDarkTheme, setIsDarkTheme] = useState(() =>
    getCurrentTheme() === "dark" ? true : false
  );

  const toggleTheme = useCallback(() => {
    setTheme((preTheme) => (preTheme === "dark" ? "ligth" : "dark"));
    setIsDarkTheme((preIsDarkTheme) => !preIsDarkTheme);
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
  }, [theme]);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.remove("light");
      document.body.classList.add(theme);
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add(theme);
    }
  }, [theme]);

  return { isDarkTheme, toggleTheme };
};

export default useTheme;
