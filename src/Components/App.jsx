import About from "./About";
import Projects, { Nav } from "./Projects";
import Skills from "./Skills";
import calc from "../Images/calc-app.png";
import landing from "../Images/landing-page.png";
import newsletter from "../Images/Newsletter-app.png";

export default function App() {
  return (
    <>
      <Nav />
      <About />
      <h1 className="headingTitle">Projects</h1>

      <div className="ProjectContainer">
        <Projects
          Title={"Age Calculator App"}
          src={calc}
          description={"Age Calculator App"}
          siteLink={"https://cesars-age-calculator.netlify.app/"}
          siteCode={"https://github.com/sean365-bit/Age-calculator"}
          content={
            "I Enjoyed building this Application with React JS and CSS, It basically calculates how old a person is by providing our date of birth, I implemented as well some input validation using the React Hook form."
          }
        />

        <Projects
          Title={"Newsletter sign-up form"}
          src={newsletter}
          description={"Newsletter sign-up form"}
          siteLink={"https://cesars-newsletter.netlify.app/"}
          siteCode={"https://github.com/sean365-bit/cesars-newsletter"}
          content={
            "This Newsletter App was developed using React JS and CSS, It allows us to suscribe to this newsletter by entering our email address, I implemented an email validation function as well so incorrect email addresses cannot be used. A successful message is displayed once a valid email addres is entered."
          }
        />

        <Projects
          Title={"Landing Page"}
          src={landing}
          description={"Landing Page"}
          siteLink={"https://sean365-bit.github.io/Fylo.github.io/"}
          siteCode={"https://github.com/sean365-bit/Fylo.github.io"}
          content={
            "Using HTML, CSS and JavaScript, I developed this Landing page for the Fylo company, in this page you can see the Front-end part of this application, as well as the description of the services the company provides."
          }
        />
      </div>

      <Skills />
      <span className="footer" >Made with &#129505; in El Salvador</span>
    </>
  );
}
