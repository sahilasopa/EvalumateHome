import React from "react";

const Footer = () => {
  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Evalumate</h3>
            <p>
              AI-powered grading for the modern classroom. Making education more
              efficient and effective.
            </p>
            <div className="tagline">
              Smarter Learning Starts with Smarter Grading.
            </div>
          </div>
          {/* Add other footer sections here */}
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Evalumate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
