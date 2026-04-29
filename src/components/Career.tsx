import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My <span>Experience</span>
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
              Spearheaded the development and maintenance of scalable web and
              mobile applications using React, React Native, and Node.js.
              Designed comprehensive RESTful APIs with third-party integrations,
              auth systems, and payment gateways. Collaborated with designers,
              product managers, and stakeholders while driving code quality and
              performance improvements.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior React Developer</h4>
                <h5>Avalore</h5>
              </div>
              <h3>Dec 18 - Nov 22</h3>
            </div>
            <p>
              Led scalable React application development and continuous
              improvement of responsive UI components. Collaborated in Agile
              teams across UI/UX, backend, and product functions. Delivered
              performance tuning through code splitting, lazy loading, and
              memoization, reducing load times and improving rendering
              efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
