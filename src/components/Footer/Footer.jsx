import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        © 2025 News Explorer, Powered by News API
      </p>
      <nav className="footer__nav">
        {/* Internal link stays the same tab */}
        <a href="/" className="footer__link">
          Home
        </a>

        {/* External links open in a new tab */}
        <a
          href="https://tripleten.com"
          className="footer__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          TripleTen
        </a>
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
      </nav>
    </footer>
  );
}

export default Footer;
