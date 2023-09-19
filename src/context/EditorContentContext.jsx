import { useState, useContext, createContext } from "react";

const EditorContentContext = createContext();

export const useEditorContent = () => {
  const context = useContext(EditorContentContext);
  if (!context) {
    throw new Error(
      "useEditorContent must be used within a EditorContentProvider"
    );
  }
  return context;
};

export const EditorContentProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const localData = localStorage.getItem("data");
    if (localData) {
      return JSON.parse(localData);
    }
    return null;
  });
  const value = {
    data,
    setData,
  };
  return (
    <EditorContentContext.Provider value={value}>
      {children}
    </EditorContentContext.Provider>
  );
};
