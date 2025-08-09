import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./Navigation.css";

function Navigation({
  isLoggedIn,
  isSavedNewsPage,
  onLoginClick,
  onLogoutClick,
}) {
  const location = useLocation();
  const currentUser = useContext(CurrentUserContext);

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li>
          <Link
            to="/"
            className={`navigation__link ${
              location.pathname === "/" ? "navigation__link_active" : ""
            } ${isSavedNewsPage ? "navigation__link_dark" : ""}`}
          >
            Home
          </Link>
        </li>

        {isLoggedIn && (
          <li>
            <Link
              to="/saved-news"
              className={`navigation__link ${
                location.pathname === "/saved-news"
                  ? "navigation__link_active"
                  : ""
              } ${isSavedNewsPage ? "navigation__link_dark" : ""}`}
            >
              Saved articles
            </Link>
          </li>
        )}

        <li>
          {isLoggedIn ? (
            <button
              className={`navigation__button ${
                isSavedNewsPage ? "navigation__button_dark" : ""
              }`}
              onClick={onLogoutClick}
            >
              {currentUser?.name || "User"}
              <span
                className={`navigation__logout-icon ${
                  isSavedNewsPage
                    ? "navigation__logout-icon_dark"
                    : "navigation__logout-icon_light"
                }`}
              />
            </button>
          ) : (
            <button
              className={`navigation__button ${
                isSavedNewsPage ? "navigation__button_dark" : ""
              }`}
              onClick={onLoginClick}
            >
              Sign in
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
