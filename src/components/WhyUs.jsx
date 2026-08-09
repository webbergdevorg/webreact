import React, { useEffect, useRef, useState } from "react";

export default function WhyUs() {
  const sectionRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`why ${isRevealed ? "reveal" : ""}`}
      id="why"
    >
      <span className="why__glow" aria-hidden="true"></span>

      <div className="why__inner">
        <div className="why__text">
          <h2 className="why__title">
            why <span>WEBBERG</span>
          </h2>
          <p className="why__desc">
            Webberg helps small businesses stand out online with modern,
            mobile-friendly websites that load fast and look great on any device.
            We keep things simple—no tech jargon, no hidden costs—just clean design
            that attracts customers and helps your business grow.
          </p>
        </div>

        <div className="skills-card">
          <h3 className="skills-card__title">Our Skills</h3>
          <ul className="skills">
            <li className="skill">
              <div className="skill__top">
                <span className="skill__name">Figma</span>
                <span className="skill__pct">80%</span>
              </div>
              <div className="skill__bar">
                <span
                  className="skill__fill"
                  style={{ "--pct": "80%", width: isRevealed ? "80%" : "0%" }}
                ></span>
              </div>
            </li>
            <li className="skill">
              <div className="skill__top">
                <span className="skill__name">JavaScript</span>
                <span className="skill__pct">85%</span>
              </div>
              <div className="skill__bar">
                <span
                  className="skill__fill"
                  style={{ "--pct": "85%", width: isRevealed ? "85%" : "0%" }}
                ></span>
              </div>
            </li>
            <li className="skill">
              <div className="skill__top">
                <span className="skill__name">HTML</span>
                <span className="skill__pct">90%</span>
              </div>
              <div className="skill__bar">
                <span
                  className="skill__fill"
                  style={{ "--pct": "90%", width: isRevealed ? "90%" : "0%" }}
                ></span>
              </div>
            </li>
            <li className="skill">
              <div className="skill__top">
                <span className="skill__name">CSS</span>
                <span className="skill__pct">75%</span>
              </div>
              <div className="skill__bar">
                <span
                  className="skill__fill"
                  style={{ "--pct": "75%", width: isRevealed ? "75%" : "0%" }}
                ></span>
              </div>
            </li>
            <li className="skill">
              <div className="skill__top">
                <span className="skill__name">Project Management</span>
                <span className="skill__pct">85%</span>
              </div>
              <div className="skill__bar">
                <span
                  className="skill__fill"
                  style={{ "--pct": "85%", width: isRevealed ? "85%" : "0%" }}
                ></span>
              </div>
            </li>
            <li className="skill">
              <div className="skill__top">
                <span className="skill__name">Backend</span>
                <span className="skill__pct">73%</span>
              </div>
              <div className="skill__bar">
                <span
                  className="skill__fill"
                  style={{ "--pct": "73%", width: isRevealed ? "73%" : "0%" }}
                ></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
