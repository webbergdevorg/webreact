import React, { useEffect, useRef, useState } from "react";

const processCards = [
  {
    num: "#1",
    title: "Discovery & Client Meeting",
    desc: "We start with a meeting or call to understand your business, goals, audience, and requirements. This helps us plan the right solution for your website, app, branding, or social media.",
    type: "top",
    gridColumn: "1 / 3",
  },
  {
    num: "#3",
    title: "Design & Structure",
    desc: "We create a clean, modern design tailored to your brand. The focus is on user experience, clear structure, and visuals that connect with your audience.",
    type: "top",
    gridColumn: "3 / 5",
  },
  {
    num: "#5",
    title: "Review & Revisions",
    desc: "You review the work and share feedback. We make revisions and refinements to ensure the final result meets your expectations.",
    type: "top",
    gridColumn: "5 / 7",
  },
  {
    num: "#2",
    title: "Proposal & Pricing",
    desc: "After the discussion, we share a clear proposal outlining the scope, timeline, and cost. Everything is transparent, with no hidden fees or confusing terms.",
    type: "bottom",
    gridColumn: "2 / 4",
  },
  {
    num: "#4",
    title: "Development",
    desc: "Once the design is approved, we build your project using modern tools. Everything is optimized for speed, responsiveness, and performance across all devices.",
    type: "bottom",
    gridColumn: "4 / 6",
  },
  {
    num: "#6",
    title: "Launch & Support",
    desc: "After final approval, we launch your project smoothly. We also provide basic guidance and ongoing support if you need updates or improvements.",
    type: "bottom",
    gridColumn: "6 / 8",
  },
];

export default function Process() {
  const sectionRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const timer = setTimeout(() => setIsRevealed(true), 300);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`process ${isRevealed ? "reveal" : "reveal"}`}
      id="process"
    >
      <div className="process__inner">
        <h2 className="process__title">
          how development works at<br />
          <span>WEBBERG</span>
        </h2>

        <div className="timeline">
          <span className="timeline__axis" aria-hidden="true"></span>

          {processCards.map((card, idx) => (
            <article
              key={idx}
              className={`pcard pcard--${card.type}`}
              style={{ gridColumn: card.gridColumn }}
            >
              <h3 className="pcard__head">
                <span className="pcard__num">{card.num}</span> {card.title}
              </h3>
              <p className="pcard__text">{card.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
