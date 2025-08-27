import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2025 News Explorer | News API</p>
      <nav className="footer__nav">
        <div className="footer__links">
          <a href="/" className="footer__link">
            Home
          </a>
          <a
            href="https://tripleten.com"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            TripleTen
          </a>
        </div>
        <div className="footer__icons">
          <a
            href="https://github.com/Lina-Mykhailyk"
            className="footer__icon footer__icon_github"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          />
          <a
            href="https://www.facebook.com/tripleten.tech"
            className="footer__icon footer__icon_facebook"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
