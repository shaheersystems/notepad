import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ToggleProvider } from "./context/ToggleContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { LockProvider } from "./context/LockContext.jsx";
import { EditorContentProvider } from "./context/EditorContentContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ToggleProvider>
          <ThemeProvider>
            <LockProvider>
              <EditorContentProvider>
                <App />
              </EditorContentProvider>
            </LockProvider>
          </ThemeProvider>
        </ToggleProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
