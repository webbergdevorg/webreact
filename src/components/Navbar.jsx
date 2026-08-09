import React, { useState, useEffect } from "react";

export default function Navbar({ onOpenContactModal }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleNavClick = (navName) => {
    setActiveNav(navName);
    setMenuOpen(false);
  };

  // Close menu on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuOpen &&
        !e.target.closest(".nav-pill") &&
        !e.target.closest(".menu-toggle")
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  return (
    <header className="navbar">
      <a className="brand" href="#">
        <div className="brand__logo" title="Webberg logo">
          <img src="/asset/logo.png" alt="Webberg logo" />
        </div>
      </a>

      <nav className={`nav-pill ${menuOpen ? "open is-active" : ""}`}>
        <ul>
          <li>
            <a
              href="#"
              className={activeNav === "Home" ? "active" : ""}
              onClick={() => handleNavClick("Home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={activeNav === "Services" ? "active" : ""}
              onClick={() => handleNavClick("Services")}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeNav === "Projects" ? "active" : ""}
              onClick={() => handleNavClick("Projects")}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#team"
              className={activeNav === "Team" ? "active" : ""}
              onClick={() => handleNavClick("Team")}
            >
              Team
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeNav === "Contact" ? "active" : ""}
              onClick={() => handleNavClick("Contact")}
            >
              Contact
            </a>
          </li>
          <li className="mobile-cta-item">
            <a
              href="#contact-modal"
              className="btn btn--pill btn--mobile-nav"
              data-open-modal="contact"
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
                onOpenContactModal();
              }}
            >
              Book a Call
            </a>
          </li>
        </ul>
      </nav>

      <a
        href="#contact-modal"
        className="btn btn--pill nav-desktop-cta"
        data-open-modal="contact"
        onClick={(e) => {
          e.preventDefault();
          onOpenContactModal();
        }}
      >
        Book a Call
      </a>

      <button
        type="button"
        className={`menu-toggle ${menuOpen ? "open is-open is-active" : ""}`}
        aria-label="Toggle menu"
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
