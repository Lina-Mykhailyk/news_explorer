import { useState, useEffect } from "react";
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
import Footer from "./Footer/Footer";
import SavedNews from "./SavedNews/SavedNews";
import RegisterModal from "./RegisterModal/RegisterModal";
import LoginModal from "./LoginModal/LoginModal";

import { getNews } from "../utils/newsApi";
import { authorize, register as registerUser, checkToken } from "../utils/auth";
import { getSavedArticles, saveArticle, deleteArticle } from "../utils/api";

import CurrentUserContext from "../contexts/CurrentUserContext";

const INITIAL_VISIBLE = 3; // how many cards to show initially
const VISIBLE_STEP = 3; // how many to add on each "Show more"

function App() {
  // Auth state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);

  // Modals
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [serverError, setServerError] = useState("");

  // News search
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchError, setSearchError] = useState("");

  // Saved articles
  const [savedArticles, setSavedArticles] = useState([]);

  // Current search keyword
  const [currentKeyword, setCurrentKeyword] = useState("");

  // Show-more state
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const navigate = useNavigate();
  const location = useLocation();

  // --- Auth stub check ---
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      setAuthChecked(true);
      return;
    }

    checkToken(token)
      .then((res) => {
        setIsLoggedIn(true);
        setCurrentUser(res.data);
        return getSavedArticles();
      })
      .then((articles) => setSavedArticles(articles))
      .catch(() => {
        setIsLoggedIn(false);
        setCurrentUser(null);
        localStorage.removeItem("jwt");
      })
      .finally(() => setAuthChecked(true));
  }, []);

  // --- Auth handlers ---
  const handleRegister = (name, email, password) => {
    setServerError("");
    return registerUser(name, email, password).catch((err) =>
      setServerError(err.message || "Registration failed")
    );
  };

  const handleLogin = (email, password) => {
    setServerError("");
    return authorize(email, password)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setIsLoggedIn(true);
        setCurrentUser({ name: "Anhelina", email }); // placeholder
        return getSavedArticles();
      })
      .then((articles) => setSavedArticles(articles))
      .then(() => setIsLoginOpen(false))
      .catch((err) => setServerError(err.message || "Login failed"));
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setSavedArticles([]);
    localStorage.removeItem("jwt");
    navigate("/");
  };

  // --- News search ---
  const handleSearch = (query) => {
    const trimmed = query.trim();
    const isNewQuery = trimmed !== currentKeyword;

    setCurrentKeyword(trimmed);
    setIsLoading(true);
    setSearchError("");
    setArticles([]);

    // Reset visible only on a NEW query
    if (isNewQuery) setVisibleCount(INITIAL_VISIBLE);

    getNews(trimmed)
      .then((data) => {
        if (!data || data.length === 0) {
          setSearchError("Nothing Found");
        } else {
          setArticles(data);
        }
      })
      .catch(() =>
        setSearchError(
          "Sorry, something went wrong during the request. Please try again later."
        )
      )
      .finally(() => setIsLoading(false));
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + VISIBLE_STEP, articles.length));
  };

  const handleSaveArticle = (article) => {
    const alreadySaved = savedArticles.some(
      (saved) =>
        saved.title === article.title &&
        (saved.publishedAt || saved.date) ===
          (article.publishedAt || article.date)
    );
    if (alreadySaved) return;

    const articleWithKeyword = { ...article, keyword: currentKeyword };

    saveArticle(articleWithKeyword).then((saved) =>
      setSavedArticles((prev) => [...prev, saved])
    );
  };

  const handleDeleteArticle = (id) => {
    deleteArticle(id).then(() =>
      setSavedArticles((prev) => prev.filter((a) => a._id !== id))
    );
  };

  const handleSwitchToLogin = () => {
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  };

  const handleSwitchToRegister = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  };

  const isSavedNewsPage = location.pathname === "/saved-news";

  const hasMore = visibleCount < articles.length;

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Header
          isLoggedIn={isLoggedIn}
          isSavedNewsPage={isSavedNewsPage}
          onLoginClick={() => setIsLoginOpen(true)}
          onLogoutClick={handleLogout}
          onSearch={handleSearch}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Main
                isLoggedIn={isLoggedIn}
                articles={articles}
                isLoading={isLoading}
                searchError={searchError}
                onSaveArticle={handleSaveArticle}
                onDeleteArticle={handleDeleteArticle}
                savedArticles={savedArticles}
                // Show more props:
                visibleCount={visibleCount}
                hasMore={hasMore}
                onShowMore={handleShowMore}
              />
            }
          />
          <Route
            path="/saved-news"
            element={
              !authChecked ? null : isLoggedIn ? (
                <SavedNews
                  isLoggedIn={isLoggedIn}
                  savedArticles={savedArticles}
                  onDeleteArticle={handleDeleteArticle}
                />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
        </Routes>

        <Footer />

        {/* Modals only mount when open (inputs reset on close) */}
        {isRegisterOpen && (
          <RegisterModal
            isOpen={isRegisterOpen}
            onClose={() => setIsRegisterOpen(false)}
            onRegister={handleRegister}
            onSwitchToLogin={handleSwitchToLogin}
            serverError={serverError}
          />
        )}

        {isLoginOpen && (
          <LoginModal
            isOpen={isLoginOpen}
            onClose={() => setIsLoginOpen(false)}
            onLogin={handleLogin}
            onSwitchToRegister={handleSwitchToRegister}
            serverError={serverError}
          />
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
