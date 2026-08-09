import React, { useState, useEffect } from "react";

export default function Navbar({ onOpenContactModal }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

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

  // Track scroll position for translucent fixed background and active section
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check if near bottom of page (Footer / FAQ area)
      const distanceToBottom =
        document.documentElement.scrollHeight - (window.scrollY + window.innerHeight);
      if (distanceToBottom < 250) {
        setActiveNav("Contact");
        return;
      }

      // Map section element IDs to their navbar target label
      const sectionMap = [
        { id: "services", nav: "Services" },
        { id: "why", nav: "Services" },
        { id: "tech-stack", nav: "Services" },
        { id: "process", nav: "Services" },
        { id: "projects", nav: "Projects" },
        { id: "team", nav: "Team" },
        { id: "contact", nav: "Contact" },
        { id: "faq", nav: "Contact" },
      ];

      const scrollPos = window.scrollY + 220;
      let currentNav = "Home";

      for (const item of sectionMap) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            currentNav = item.nav;
            break;
          }
        }
      }

      setActiveNav(currentNav);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="navbar">
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
      </div>
    </header>
  );
}
