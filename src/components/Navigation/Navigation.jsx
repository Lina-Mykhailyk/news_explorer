import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
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

  const isHomeActive = location.pathname === "/";
  const isSavedActive = location.pathname === "/saved-news";

  // Mobile menu
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (menuOpen) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  return (
    <>
      {/* Desktop/Tablet inline navigation */}
      <nav className="navigation">
        <ul className="navigation__list">
          <li>
            <Link
              to="/"
              className={`navigation__link ${
                isHomeActive ? "navigation__link_active" : ""
              } ${isSavedNewsPage ? "navigation__link_dark" : ""}`}
            >
              Home
            </Link>
          </li>

          {isLoggedIn && (
            <li>
              <Link
                to="/saved-news"
                className={`navigation__link navigation__link_saved ${
                  isSavedActive
                    ? "navigation__link_active"
                    : "navigation__link_inactive"
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
                type="button"
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
                type="button"
              >
                Sign in
              </button>
            )}
          </li>
        </ul>

        {/* Mobile burger button (hidden on desktop via CSS) */}
        <button
          className={`navigation__burger ${
            isSavedNewsPage
              ? "navigation__burger_dark"
              : "navigation__burger_light"
          }`}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-drawer"
          onClick={openMenu}
          type="button"
        />
      </nav>

      {/* Mobile Backdrop + Drawer */}
      {menuOpen && (
        <>
          <div className="navigation__backdrop" onClick={closeMenu} />

          <div
            id="mobile-drawer"
            className="navigation__drawer"
            role="dialog"
            aria-modal="true"
          >
            <div className="navigation__drawer-top">
              <Link
                to="/"
                className="navigation__drawer-logo"
                onClick={closeMenu}
              >
                NewsExplorer
              </Link>
              <button
                className="navigation__drawer-close"
                aria-label="Close menu"
                onClick={closeMenu}
                type="button"
              />
            </div>

            <ul className="navigation__drawer-list">
              <li>
                <Link
                  to="/"
                  className="navigation__drawer-link"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>

              {isLoggedIn && (
                <li>
                  <Link
                    to="/saved-news"
                    className="navigation__drawer-link"
                    onClick={closeMenu}
                  >
                    Saved articles
                  </Link>
                </li>
              )}
            </ul>

            <div className="navigation__drawer-cta">
              {isLoggedIn ? (
                <button
                  className="navigation__drawer-btn"
                  onClick={() => {
                    closeMenu();
                    onLogoutClick();
                  }}
                  type="button"
                >
                  {currentUser?.name || "User"}
                  <span className="navigation__logout-icon" />
                </button>
              ) : (
                <button
                  className="navigation__drawer-btn"
                  onClick={() => {
                    closeMenu();
                    onLoginClick();
                  }}
                  type="button"
                >
                  Sign in
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Navigation;
