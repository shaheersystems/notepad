import { useContext, useState, createContext } from "react";

const ThemeContext = createContext();

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    try {
      const theme = localStorage.getItem("theme");
      return theme || "light";
    } catch (error) {
      console.error("Error accessing localStorage:", error);
      return "light";
    }
  });
  const value = {
    theme,
    setTheme,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
