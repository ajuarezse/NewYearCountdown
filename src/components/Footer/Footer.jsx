import "./Footer.css";
import { GithubIcon, LinkedinIcon, WebsiteIcon } from "../../assets/icons";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__credit">
        @ 2025 Angel Juarez 2025
        <a
          href="https://github.com/ajuarezse"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon className="footer__icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/angel-juarez-tech/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon className="footer__icon" />
        </a>
        <a
          href="https://angeljuarez.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WebsiteIcon className="footer__icon" />
        </a>
      </p>
    </footer>
  );
}

export default Footer;
