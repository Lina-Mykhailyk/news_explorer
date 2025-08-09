import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ isLoggedIn, isSavedNewsPage, onLoginClick, onLogoutClick }) {
  return (
    <header
      className={`header ${isSavedNewsPage ? "header_dark" : "header_light"}`}
    >
      <Link to="/" className="header__logo">
        NewsExplorer
      </Link>
      <Navigation
        isLoggedIn={isLoggedIn}
        isSavedNewsPage={isSavedNewsPage}
        onLoginClick={onLoginClick}
        onLogoutClick={onLogoutClick}
      />
    </header>
  );
}

export default Header;
