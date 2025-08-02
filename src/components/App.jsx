import { useState } from "react";
import "./App.css";

import Main from "./Main/Main";
import About from "./About/About";
import Footer from "./Footer/Footer";
import RegisterModal from "./RegisterModal/RegisterModal";
import LoginModal from "./LoginModal/LoginModal";

function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [serverError, setServerError] = useState("");

  // Simulated register handler (replace with API)
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

  const handleSwitchToLogin = () => {
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  };

  const handleSwitchToRegister = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  };

  return (
    <div className="app">
      <Main onSignInClick={() => setIsLoginOpen(true)} />
      <About />
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
        onLogin={(data) => console.log("Logging in", data)}
        onSwitchToRegister={handleSwitchToRegister}
        serverError={serverError}
      />
    </div>
  );
}

export default App;
