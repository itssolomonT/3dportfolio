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
                <h4>Senior React Developer</h4>
                <h5>Avalore</h5>
              </div>
              <h3>Dec 18 - Nov 22</h3>
            </div>
            <p>
             • Led the development and continuous improvement of scalable React applications, significantly enhancing the user interface and overall user satisfaction by introducing dynamic, responsive components tailored to evolving business requirements.
• Partnered effectively with UI/UX designers, backend engineers, and product owners in an Agile environment to ensure seamless integration of front-end elements with RESTful APIs and alignment with project deadlines and quality standards.
• Spearheaded performance tuning initiatives including code splitting, lazy loading, and memoization, which decreased application load times by 25%, improved rendering efficiency, and established a library of reusable components that accelerated development cycles for future projects
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Career;
