import { useState } from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "./App.css";

import Header from "./Header/Header";
import Main from "./Main/Main";
import About from "./About/About";
import Footer from "./Footer/Footer";
import SavedNews from "./SavedNews/SavedNews";
import RegisterModal from "./RegisterModal/RegisterModal";
import LoginModal from "./LoginModal/LoginModal";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [serverError, setServerError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  // Simulated register handler
  const handleRegister = (formData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formData.email === "example@test.com") {
          setServerError("This email is not available");
          reject();
        } else {
          setServerError("");
          resolve();
        }
      }, 500);
    });
  };

  const handleLogin = (data) => {
    console.log("Logging in", data);
    setIsLoggedIn(true);
    setIsLoginOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleSwitchToLogin = () => {
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  };

  const handleSwitchToRegister = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  };

  // detect saved-news page for Header style
  const isSavedNewsPage = location.pathname === "/saved-news";

  return (
    <div className="app">
      <Header
        isLoggedIn={isLoggedIn}
        isSavedNewsPage={isSavedNewsPage}
        onLoginClick={() => setIsLoginOpen(true)}
        onLogoutClick={handleLogout}
      />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main isLoggedIn={isLoggedIn} />
              <About />
            </>
          }
        />
        <Route
          path="/saved-news"
          element={
            isLoggedIn ? (
              <SavedNews isLoggedIn={isLoggedIn} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      </Routes>

      <Footer />

      {/* Modals */}
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onRegister={handleRegister}
        onSwitchToLogin={handleSwitchToLogin}
        serverError={serverError}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLogin={handleLogin}
        onSwitchToRegister={handleSwitchToRegister}
        serverError={serverError}
      />
    </div>
  );
}

export default App;
