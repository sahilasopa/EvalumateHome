// features.js
import React from "react";

const Features = () => {
  const features = [
    {
      badge: "AI-Powered",
      title: "AI Grading Engine",
      description:
        "Instantly grades answers using curriculum-trained models with high accuracy and consistency.",
      checks: [
        "Curriculum-aligned grading",
        "Handles multiple correct approaches",
        "Consistent & bias-free evaluation",
      ],
      media: "/ai-grading.mp4",
    },
    {
      badge: "OCR + HTR",
      title: "Handwriting Recognition",
      description:
        "Advanced OCR converts student handwriting to digital text for processing.",
      checks: [
        "Supports typed & handwritten input",
        "High accuracy text extraction",
        "Works across multiple devices",
      ],
      media: "/handwriting.mp4",
    },
    {
      badge: "Coming Soon",
      title: "Worksheet Generator",
      description:
        "Create curriculum-aligned questions and assignments in minutes.",
      comingSoon: true,
    },
    {
      badge: "Coming Soon",
      title: "Student Analytics",
      description:
        "Deep insights into strengths, weaknesses, and improvement trends.",
      comingSoon: true,
    },
    {
      badge: "Coming Soon",
      title: "Doubt Solver",
      description:
        "AI-powered help for resolving student doubts quickly and accurately.",
      comingSoon: true,
    },
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="features-header">
          <h2>All-in-One Platform for Educators</h2>
          <p>
            Every feature is crafted to save you time while providing deeper
            insights into student learning.
          </p>
        </div>

        <div className="features-sections">
          {features.map((f, i) => (
            <div
              className={`feature-section ${i % 2 === 1 ? "reverse" : ""} ${
                f.comingSoon ? "soon" : ""
              }`}
              key={i}
            >
              {/* Left: text */}
              <div className="feature-text">
                <span className={`feature-badge ${f.comingSoon ? "soon" : ""}`}>
                  {f.badge}
                </span>
                <h3>{f.title}</h3>
                <p>{f.description}</p>
                {!f.comingSoon && (
                  <ul>
                    {f.checks.map((c, idx) => (
                      <li key={idx}>✓ {c}</li>
                    ))}
                  </ul>
                )}
                {f.comingSoon && (
                  <div className="coming-actions">
                    <button className="pill">Beta waitlist</button>
                  </div>
                )}
              </div>

              {/* Right: media or placeholder */}
              <div className="feature-media">
                {f.comingSoon ? (
                  <div className="coming-placeholder">
                    <span>{f.title}</span>
                  </div>
                ) : (
                  <video
                    src={f.media}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="feature-video"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
