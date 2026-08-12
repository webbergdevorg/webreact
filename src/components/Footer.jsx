import React from "react";

export default function Footer({ onTriggerSocialDropdown, onOpenPolicyModal }) {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <a className="brand" href="#">
              <div className="brand__logo footer__brand-logo" title="Webberg logo">
                <img src="/asset/logo.png" alt="Webberg logo" />
              </div>
            </a>
            <p className="footer__about">
              At Webberg, we design, build, and grow digital brands. From websites and apps
              to branding and social media, we create solutions that drive real results.
            </p>
          </div>

          {/* Links */}
          <nav className="footer__col">
            <h4>Links</h4>
            <a href="#">Home</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#team">Team</a>
            <a href="#contact">Contact</a>
          </nav>

          {/* Contact */}
          <div className="footer__col footer__contact-col">
            <h4>Contact us</h4>
            <div className="footer__contact-row">
              <p>Tambaram, Chennai - 600058</p>
              <div className="footer__socials">
                <a
                  href="https://www.instagram.com/webbergdevelopment/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .4 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.4 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.4-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.4-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2m0 5.3A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5m0 7.4A2.9 2.9 0 1 1 14.9 12 2.9 2.9 0 0 1 12 14.9m4.7-7.6a1.05 1.05 0 1 0 1.05 1.05A1.05 1.05 0 0 0 16.7 7.3" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  onClick={(e) => onTriggerSocialDropdown(e, "LinkedIn")}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.94 5a2 2 0 1 1-4-.02 2 2 0 0 1 4 .02M7 8.48H3V21h4zM13.32 8.48H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  onClick={(e) => onTriggerSocialDropdown(e, "Facebook")}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="X"
                  onClick={(e) => onTriggerSocialDropdown(e, "X")}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.9 2H22l-7.1 8.12L23.2 22h-6.5l-5.1-6.67L5.8 22H2.7l7.6-8.68L2 2h6.66l4.6 6.09zM17.8 20.1h1.7L7.3 3.8H5.5z" />
                  </svg>
                </a>
              </div>
            </div>
            <p>+91 78100 59511</p>
            <p>support@webberg.in</p>
          </div>
        </div>

        {/* Watermark */}
        <div className="footer__watermark" aria-hidden="true">
          WEBBERG
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__divider"></div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", width: "100%" }}>
          <p>
            © 2026 Copyright by Webberg.{" "}
            <span className="footer__copy-accent">All rights reserved.</span>
          </p>
          <div style={{ display: "flex", gap: "16px", fontSize: "0.85rem" }}>
            <button
              type="button"
              style={{ background: "none", border: "none", color: "#94a3b8", cursor: "pointer", textDecoration: "underline", padding: 0 }}
              onClick={() => onOpenPolicyModal && onOpenPolicyModal("privacy")}
            >
              Privacy Policy
            </button>
            <button
              type="button"
              style={{ background: "none", border: "none", color: "#94a3b8", cursor: "pointer", textDecoration: "underline", padding: 0 }}
              onClick={() => onOpenPolicyModal && onOpenPolicyModal("terms")}
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
