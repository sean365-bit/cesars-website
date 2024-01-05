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
            "I enjoyed building this application with React JS and CSS. It basically calculates how old a person is by providing their date of birth. I also implemented some input validation using the React Hook Form."
          }
        />

        <Projects
          Title={"Newsletter sign-up form"}
          src={newsletter}
          description={"Newsletter sign-up form"}
          siteLink={"https://cesars-newsletter.netlify.app/"}
          siteCode={"https://github.com/sean365-bit/cesars-newsletter"}
          content={
            "This Newsletter App was developed using React JS and CSS. It allows us to subscribe to this newsletter by entering our email address. I implemented an email validation function as well, so incorrect email addresses cannot be used. A successful message is displayed once a valid email address is entered."
          }
        />

        <Projects
          Title={"Landing Page"}
          src={landing}
          description={"Landing Page"}
          siteLink={"https://sean365-bit.github.io/Fylo.github.io/"}
          siteCode={"https://github.com/sean365-bit/Fylo.github.io"}
          content={
            "Using HTML, CSS, and JavaScript, I developed this landing page for the Fylo company. On this page, you can see the front-end part of this application, as well as the description of the services the company provides."
          }
        />
      </div>

      <Skills />
      <span className="footer">Made with &#129505; in El Salvador</span>
    </>
  );
}
