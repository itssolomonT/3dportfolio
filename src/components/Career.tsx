import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Engineer</h4>
                <h5>Savas Labs</h5>
              </div>
              <h3>Dec 22 - Feb 26</h3>
            </div>
            <p>
              • Spearheaded the development and maintenance of scalable web and mobile applications leveraging React, React Native, and Node.js, resulting in enhanced user engagement and robust application performance across multiple platforms.
• Designed and implemented comprehensive RESTful APIs and backend services that seamlessly integrated with third-party services, authentication systems, and payment gateways, ensuring efficient data flow and extended application capabilities.
• Led collaboration with UI/UX designers, product managers, and stakeholders to align technical implementation with strategic business goals, conducted thorough code reviews, and applied performance optimizations and best practices that increased application reliability and maintainability
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Adobe</h4>
                <h5>6+ years · Noida</h5>
              </div>
              <h3>2017–24</h3>
            </div>
            <p>
              Senior Lead Software Engineer (Feb 2024 – May 2024). Lead Software
              Engineer (Feb 2021 – Feb 2024). Software Engineer II (Dec 2017 –
              Feb 2021): internationalization, globalization, and localization for
              Adobe Technical Communication Suite; functional and linguistic testing
              strategy; in-house tooling; collaboration with product and engineering
              for high-quality localized releases.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Consultant</h4>
                <h5>Genpact Headstrong </h5>
              </div>
              <h3>2016–17</h3>
            </div>
            <p>
              Sep 2016 – Nov 2017. Developed and maintained WCF services consumed
              by the UI; deployment support across environments; NUnit tests and
              coverage; bug fixes from QA and users; database work.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sf Engineer</h4>
                <h5>Infogain</h5>
              </div>
              <h3>2013-16</h3>
            </div>
            <p>
              Software engineering across enterprise projects, contributing to
              design, development, and delivery of business applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
