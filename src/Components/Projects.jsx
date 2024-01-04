export default function Projects({
  Title,
  src,
  description,
  siteLink,
  siteCode,
  content,
}) {
  const openNewTab = () => {
    window.open(siteLink);
  };

  const openNewTabCode = () => {
    window.open(siteCode);
  };

  return (
    <>
      <div className="projectHolder" id="idSection">
        <div className="projectImage">
          <img src={src} alt={description} />
        </div>
        <div className="projectContent">
          <h3>{Title}</h3>

          <p>{content}</p>

          <div className="buttons">
            <button onClick={openNewTab} className="siteButton">
              Preview site
            </button>

            <button onClick={openNewTabCode} className="siteButton codeButton">
              View Code
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export function Nav() {
  return (
    <header className="header">
      <div>
        <h1>Cesar Ramirez</h1>{" "}
      </div>

      <nav>
        <ul className="navLinks">
          <li>
            <a href="#AboutSection">About</a>
          </li>
          <li>
            <a href="#idSection">Projects</a>
          </li>
          <li>
            <a href="#skillsSection">Stack</a>
          </li>
        </ul>
      </nav>
      <a href="#skillsSection" className="btn">
        <button>Contact</button>
      </a>
    </header>
  );
}