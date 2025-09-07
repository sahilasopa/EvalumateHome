import React from "react";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          {/* Left text */}
          <div className="hero-text">
            <h1>
              Grade smarterrrrrrrrrrrrr in <span>seconds</span>, not hours
            </h1>
            <p>
              Save <strong>80% of grading time</strong> with AI that reads
              handwriting, understands student thinking, and delivers instant,
              accurate feedback.
            </p>
            <div className="hero-cta">
              <a href="#" className="btn-primary">
                Try Free
              </a>
              <a
                href="https://calendly.com/aaravagupta/30min"
                className="btn-secondary"
              >
                Schedule Demo
              </a>
            </div>

            {/* Trust row */}
            <div className="hero-trust">
              <span>✅ Start in under 60s</span>
              <span>✅ No setup required</span>
              <span>✅ No credit card needed</span>
            </div>
          </div>

          {/* Right visual (video) */}
          <div className="hero-visual">
            <video src="/demo-video.mp4" autoPlay loop muted playsInline />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
