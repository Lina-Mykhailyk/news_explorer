import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2024 Supersite, Powered by News API</p>
      <nav className="footer__nav">
        <a href="/" className="footer__link">
          Home
        </a>
        <a href="https://tripleten.com" className="footer__link">
          TripleTen
        </a>
        <a
          href="#"
          className="footer__icon footer__icon_github"
          aria-label="GitHub"
        />
        <a
          href="#"
          className="footer__icon footer__icon_facebook"
          aria-label="Facebook"
        />
      </nav>
    </footer>
  );
}

export default Footer;
