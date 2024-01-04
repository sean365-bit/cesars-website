import html from "../Images/html5.svg";
import css from "../Images/css3.svg";
import js from "../Images/javascript.svg";
import scss from "../Images/sass.svg";
import react from "../Images/react.svg";
import git from "../Images/git.svg";
import github from "../Images/github.svg";

export default function Skills() {
  const skillList = stackIcon.map((lang) => (
    <li key={lang.id}>
      <img className="iconsImages" src={lang.src} alt={lang.language} />
      <p> {lang.language} </p>
    </li>
  ));

  return (
    <>
      <div id="skillsSection">
        <h2 className="headingTitle">Skills</h2>
        <h3 className="textContent">This is my Stack</h3>
        <div>
          <ul className="skillContainer"> {skillList} </ul>
        </div>
      </div>
    </>
  );
}

const stackIcon = [
  { id: 0, language: "HTML", src: html },
  { id: 1, language: "CSS", src: css },
  { id: 2, language: "JavaScript", src: js },
  { id: 3, language: "SASS", src: scss },
  { id: 4, language: "React", src: react },
  { id: 5, language: "Git", src: git },
  { id: 6, language: "GitHub", src: github },
];
