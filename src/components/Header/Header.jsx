import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({ onSignInClick }) {
  return (
    <header className="header">
      <div className="header__logo">NewsExplorer</div>
      <Navigation onSignInClick={onSignInClick} />
    </header>
  );
}

export default Header;
