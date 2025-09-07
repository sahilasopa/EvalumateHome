import React from "react";

/**
 * Drop your logo files into /public/logos or /src/assets/logos
 * and update the `src` paths below.
 */
const LOGOS = [
  { src: "nus-computing-logo-1.png", alt: "SOC@NUS" },
  { src: "block71.png", alt: "Block 71" },
];

const IncubatedAt = () => {
  return (
    <section className="incubation" aria-labelledby="incubation-title">
      <div className="incubation__container">
        <div className="incubation__header">
          <span className="incubation__badge">Incubated at</span>
          <p className="incubation__subtitle">
            Backed by leading institutions and used by teams worldwide.
          </p>
        </div>

        <div className="incubation__logos" role="list">
          {LOGOS.map((logo) => (
            <div
              className="incubation__logoItem"
              role="listitem"
              key={logo.alt}
            >
              <img
                className="incubation__logo"
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IncubatedAt;
