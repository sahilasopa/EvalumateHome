// HowItWorks.js
import React from "react";

const HowItWorks = () => {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <h2>From Worksheet to Feedback in Minutes</h2>
        <div className="workflow-container">
          <div className="workflow">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Create Worksheet</h3>
              <p>
                Select curriculum, topic, and difficulty level using our
                intelligent worksheet builder
              </p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Assign to Students</h3>
              <p>
                Distribute worksheets by class, board, or individual student
                groups
              </p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Students Upload</h3>
              <p>
                Students snap and upload photos of their handwritten answers
              </p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>AI Auto-Corrects</h3>
              <p>
                Our AI engine, trained on detailed marking rubrics, grades
                submissions instantly
              </p>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <h3>Instant Feedback</h3>
              <p>
                Students receive detailed feedback and improvement suggestions
              </p>
            </div>
            <div className="step">
              <div className="step-number">6</div>
              <h3>Insights Dashboard</h3>
              <p>
                Teachers access class-level and student-level performance
                analytics
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
