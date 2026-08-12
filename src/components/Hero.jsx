import React, { useEffect, useState, useRef } from "react";

export default function Hero({ onOpenContactModal, onTriggerSocialDropdown }) {
  const [revealedCards, setRevealedCards] = useState([false, false, false]);
  const heroRightRef = useRef(null);

  useEffect(() => {
    const reveal = () => {
      [0, 1, 2].forEach((i) => {
        setTimeout(() => {
          setRevealedCards((prev) => {
            const next = [...prev];
            next[i] = true;
            return next;
          });
        }, 350 + i * 320);
      });
    };

    if ("IntersectionObserver" in window && heroRightRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            reveal();
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(heroRightRef.current);
      return () => observer.disconnect();
    } else {
      reveal();
    }
  }, []);

  return (
    <main className="hero">
      <section className="hero__left">
        <h1 className="hero__title">
          Build Digital<br />
          Experiences<br />
          That Matter<span className="hero__title-dot">.</span>
        </h1>
        <p className="hero__desc">
          At Webberg, we turn ideas into powerful digital experiences. We design,
          build, and optimize websites that perform across all devices.
        </p>

        <a
          href="#contact-modal"
          className="btn btn--cta"
          onClick={(e) => {
            e.preventDefault();
            onOpenContactModal();
          }}
        >
          Book a Meeting
        </a>

        <div className="socials">
          <a
            href="https://www.instagram.com/webbergdevelopment/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="social"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .4 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.4 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.4-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.4-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2m0 5.3A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5m0 7.4A2.9 2.9 0 1 1 14.9 12 2.9 2.9 0 0 1 12 14.9m4.7-7.6a1.05 1.05 0 1 0 1.05 1.05A1.05 1.05 0 0 0 16.7 7.3" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/webberg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="social"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.94 5a2 2 0 1 1-4-.02 2 2 0 0 1 4 .02M7 8.48H3V21h4zM13.32 8.48H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="social"
            onClick={(e) => onTriggerSocialDropdown(e, "Facebook")}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="X"
            className="social"
            onClick={(e) => onTriggerSocialDropdown(e, "X")}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.9 2H22l-7.1 8.12L23.2 22h-6.5l-5.1-6.67L5.8 22H2.7l7.6-8.68L2 2h6.66l4.6 6.09zM17.8 20.1h1.7L7.3 3.8H5.5z" />
            </svg>
          </a>
        </div>
      </section>

      {/* Right side: three connected step cards */}
      <section className="hero__right" ref={heroRightRef}>
        <svg className="connector" viewBox="0 0 360 600" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="snake" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5454d4" stopOpacity="1" />
              <stop offset="100%" stopColor="#5454d4" stopOpacity="0.42" />
            </linearGradient>
          </defs>
          <path className="connector__path" d="M255 100 C 340 150, 340 250, 250 300 C 160 350, 160 450, 250 500" />
        </svg>

        <article className={`step-card step-card--1 ${revealedCards[0] ? "reveal" : ""}`} data-step="1">
          <div className="step-card__media">
            <img src="/asset/design.png" alt="Webberg UI UX Design Stage" />
          </div>
          <div className="step-card__overlay">
            <span className="step-card__label">01 DESIGN</span>
            <p className="step-card__text">Crafting stunning, user-friendly designs</p>
          </div>
        </article>

        <article className={`step-card step-card--2 ${revealedCards[1] ? "reveal" : ""}`} data-step="2">
          <div className="step-card__media">
            <img src="/asset/develop.png" alt="Webberg Web Development Stage" />
          </div>
          <div className="step-card__overlay">
            <span className="step-card__label">02 DEVELOP</span>
            <p className="step-card__text">Building robust, scalable applications</p>
          </div>
        </article>

        <article className={`step-card step-card--3 ${revealedCards[3] || revealedCards[2] ? "reveal" : ""}`} data-step="3">
          <div className="step-card__media">
            <img src="/asset/deliver.png" alt="Webberg Project Delivery Stage" />
          </div>
          <div className="step-card__overlay">
            <span className="step-card__label">03 DELIVER</span>
            <p className="step-card__text">Delivering high-quality, on-time projects</p>
          </div>
        </article>
      </section>
    </main>
  );
}
