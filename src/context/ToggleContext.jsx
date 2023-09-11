import { useContext, createContext, useState } from "react";

const ToggleContext = createContext();

export function useToggle() {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error("useToggle must be used within a ToggleProvider");
  }
  return context;
}

export const ToggleProvider = ({ children }) => {
  const [toggle, setToggle] = useState(true);

  const value = {
    toggle,
    setToggle,
  };

  return (
    <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
  );
};
