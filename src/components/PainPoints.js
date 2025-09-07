// PainPoints.js
import React from "react";

const PainPoints = () => {
  return (
    <section className="pain-points">
      <div className="container">
        <h2>Why Evalumate?</h2>
        <div className="pain-comparison">
          <div className="problems">
            <h3>❌ Problems Today</h3>
            <div className="pain-item">
              <div>
                <strong>Time-consuming manual corrections</strong>
                <p>Hours spent grading each assignment manually</p>
              </div>
            </div>
            <div className="pain-item">
              <div>
                <strong>Delayed feedback for students</strong>
                <p>Students wait days or weeks for results</p>
              </div>
            </div>
            <div className="pain-item">
              <div>
                <strong>No performance analytics</strong>
                <p>Limited insights into student progress</p>
              </div>
            </div>
            <div className="pain-item">
              <div>
                <strong>Tedious worksheet creation</strong>
                <p>Starting from scratch every time</p>
              </div>
            </div>
          </div>
          <div className="solutions">
            <h3>✅ How Evalumate Solves It</h3>
            <div className="pain-item">
              <div>
                <strong>3x faster AI-driven correction</strong>
                <p>Automated grading saves hours every week</p>
              </div>
            </div>
            <div className="pain-item">
              <div>
                <strong>Instant feedback for students</strong>
                <p>Immediate results and suggestions</p>
              </div>
            </div>
            <div className="pain-item">
              <div>
                <strong>Auto-generated performance reports</strong>
                <p>Detailed analytics on student progress</p>
              </div>
            </div>
            <div className="pain-item">
              <div>
                <strong>One-click worksheet builder</strong>
                <p>Curriculum-aligned questions in minutes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
