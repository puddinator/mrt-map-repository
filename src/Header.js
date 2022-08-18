import "./Header.css";
import githubLogo from "./resources/github.png";

function Header() {
  return (
    <header>
      <a
        className="my-website"
        href="https://jamesnotgao.com"
        target="_blank"
        rel="noreferrer"
      >
        More Projects
      </a>
      <a
        className="my-github"
        href="https://github.com/puddinator/mrt-map-repository"
        target="_blank"
        rel="noreferrer"
      >
        Source Code
        <img
          className="my-github-image"
          src={githubLogo}
          alt="Github Mark"
        ></img>
      </a>
    </header>
  );
}

export default Header;
