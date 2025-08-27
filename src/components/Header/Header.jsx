import { Link, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

function Header({
  isLoggedIn,
  isSavedNewsPage,
  onLoginClick,
  onLogoutClick,
  onSearch,
}) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header
      className={`header ${isSavedNewsPage ? "header_dark" : "header_home"}`}
    >
      {/* Top row: logo + navigation */}
      <div className="header__top">
        <Link to="/" className="header__logo">
          NewsExplorer
        </Link>
        <Navigation
          isLoggedIn={isLoggedIn}
          isSavedNewsPage={isSavedNewsPage}
          onLoginClick={onLoginClick}
          onLogoutClick={onLogoutClick}
        />
      </div>

      {/* Hero + SearchForm (only on home page, not on saved-news) */}
      {isHome && !isSavedNewsPage && (
        <div className="header__hero">
          <SearchForm onSearch={onSearch} />
        </div>
      )}
    </header>
  );
}

export default Header;
