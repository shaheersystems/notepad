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
function App() {
  const { loggedIn } = useAuth();
  return (
    <>
      <div>
        {!loggedIn && <Header />}
        <Routes>
          <Route path="/" element={<PublicRoutes />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/workspace" element={<Workspace />} />
          </Route>
        </Routes>
        {!loggedIn && <Footer />}
      </div>
    </>
  );
}

export default App;
