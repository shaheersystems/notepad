import "./App.css";
import { Routes, Route } from "react-router-dom";
import { PublicRoutes } from "./routes/PublicRoutes";
import { ProtectedRoutes } from "./routes/ProtectedRoutes";
import LandingPage from "./pages/public/LandingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignUpPage from "./pages/public/SignUp";
import LoginPage from "./pages/public/Login";
import Workspace from "./pages/private/Workspace";
import { useAuth } from "./context/AuthContext";
import Sidebar from "./components/Sidebar";
import { useTheme } from "./context/ThemeContext";
import { useEffect } from "react";
import NotePage from "./pages/private/NotePage";
function App() {
  const { loggedIn } = useAuth();
  const { theme } = useTheme();
  useEffect(() => {
    document.body.classList.add("transition-all");
    if (theme === "dark") {
      document.body.classList.add("bg-dark");
    } else if (theme === "light") {
      document.body.classList.remove("bg-dark");
    }
  }, [theme]);
  return (
    <>
      <div
        className={`transition-all ${
          theme === "dark" ? "bg-dark" : "bg-white"
        }`}
      >
        {!loggedIn && <Header />}
        {loggedIn && <Sidebar />}
        <Routes>
          <Route path="/" element={<PublicRoutes />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/workspace" element={<Workspace />} />
            <Route path="/pages/:id" element={<NotePage />} />
          </Route>
        </Routes>
        {!loggedIn && <Footer />}
      </div>
    </>
  );
}

export default App;
