import "./Navigation.css";

function Navigation({ onSignInClick }) {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li>
          <a href="/" className="navigation__link navigation__link_active">
            Home
          </a>
        </li>
        <li>
          <button className="navigation__button" onClick={onSignInClick}>
            Sign in
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
