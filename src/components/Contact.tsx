import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Based in New York, working worldwide.</h4>
            <h4>Get in touch</h4>
            <p>
              <a
                href="mailto:itssolomontufail@gmail.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                itssolomontufail@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+13159470123" data-cursor="disable">
                315-947-0123
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Services</h4>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              UI/UX Design <MdArrowOutward />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Web Development <MdArrowOutward />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              App Development <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Contact
              <br />
              Phone: <span>315-947-0123</span>
              <br />
              Email: <span>itssolomontufail@gmail.com</span>
            </h2>
            <h4>Check Our Privacy Policy</h4>
            <h4>Check Our Terms and Conditions</h4>
            <h5>
              <MdCopyright /> 2026 solomontufail.com | Powered by
              solomontufail.com
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
