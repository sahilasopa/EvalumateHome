import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Detect scroll for shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <a href="#" className="logo">
          <a href="#" className="logo">
            <img
              className="nav-logo"
              src="logo.png"
              alt="Evalumate Logo"
              loading="lazy"
              width="180"
            />
          </a>
        </a>

        {/* Hamburger Icon */}
        <div
          className={`hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Links */}
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <a href="#features" onClick={closeMenu}>
              Features
            </a>
          </li>
          <li>
            <a href="#how-it-works" onClick={closeMenu}>
              How It Works
            </a>
          </li>
          <li>
            <a href="#pricing" onClick={closeMenu}>
              Pricing
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
          <li className="mobile-cta">
            <a href="#" className="btn-primary" onClick={closeMenu}>
              Try Free
            </a>
          </li>
        </ul>

        {/* Desktop CTA */}
        <a href="#" className="btn-primary desktop-cta">
          Try Free
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
