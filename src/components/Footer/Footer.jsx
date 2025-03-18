import "./Footer.css";
import { GithubIcon, LinkedinIcon } from "../../assets/icons";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__credit">
        @ 2025 Angel Juarez 2025
        <a href="https://github.com/ajuarezse" target="_blank">
          &nbsp;Github
          <GithubIcon />
        </a>
        |
        <a
          href="https://www.linkedin.com/in/angel-juarez-tech/"
          target="_blank"
        >
          Linkedin
          <LinkedinIcon />
        </a>
      </p>
    </footer>
  );
}

export default Footer;
