import { useContext, useState, createContext } from "react";

const LockContext = createContext();

export const useLock = () => {
  const context = useContext(LockContext);
  if (!context) {
    throw new Error("useLock must be used within a LockProvider");
  }
  return context;
};

export const LockProvider = ({ children }) => {
  const [lock, setLock] = useState(false);
  const value = {
    lock,
    setLock,
  };
  return <LockContext.Provider value={value}>{children}</LockContext.Provider>;
};
