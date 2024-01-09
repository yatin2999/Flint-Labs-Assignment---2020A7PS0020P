import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext({
  currentTheme: "dark",
});

export default function ThemeProvider({ children }) {
  const persistedTheme = localStorage.getItem("theme");
  const [theme] = useState(persistedTheme);

  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.documentElement.style.colorScheme = "dark";
    return () => {};
  }, []);

  return (
    <ThemeContext.Provider value={{ currentTheme: theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeProvider = () => useContext(ThemeContext);
