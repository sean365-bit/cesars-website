import ReactDom from "react-dom";
import linkedin from "../Images/linkedin.svg";
import github from "../Images/github.svg";
import mail from "../Images/mail.svg";

export default function Contact({ open, onClose }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className="overlay" />
      <div className="modal">
        <h1>Contact</h1>
        <p>Have an interesting project? I would love to hear about it!</p>

        <div className="modalBox">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/cesar-ramirez-699572169/"
          >
            <img className="iconsImagesModal" src={linkedin} alt="linkedin" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/sean365-bit"
          >
            <img className="iconsImagesModal" src={github} alt="linkedin" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:cerh_Dev@outlook.com"
          >
            <img className="iconsImagesModal" src={mail} alt="linkedin" />
          </a>
        </div>

        <button className="btnModal" onClick={onClose}>
          Close Contact
        </button>
      </div>
    </>,
    document.getElementById("portal")
  );
}
