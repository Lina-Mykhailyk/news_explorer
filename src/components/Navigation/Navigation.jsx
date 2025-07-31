import React from "react";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li>
          <a href="/" className="navigation__link navigation__link_active">
            Home
          </a>
        </li>
        <li>
          <button className="navigation__button">Sign in</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
