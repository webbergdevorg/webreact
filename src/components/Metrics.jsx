import React, { useEffect, useRef, useState } from "react";

const metricsData = [
  {
    id: 1,
    value: "2",
    label: "Projects Ongoing",
    subtext: "Active clients in development & launch phase",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    ),
  },
  {
    id: 2,
    value: "100%",
    label: "Support & Delivery",
    subtext: "On-time project milestones & guaranteed quality",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    ),
  },
  {
    id: 3,
    value: "24/7",
    label: "Dedicated Support",
    subtext: "Continuous monitoring, maintenance & assistance",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
  },
];

export default function Metrics() {
  const sectionRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
        }
      },
      { threshold: 0.15 }
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
      className={`metrics ${isRevealed ? "reveal" : "reveal"}`}
      id="metrics"
    >
      <div className="metrics__inner">
        <div className="metrics__grid">
          {metricsData.map((item) => (
            <div key={item.id} className="metric-card">
              <div className="metric-card__head">
                <div className="metric-card__icon">{item.icon}</div>
                <span className="metric-card__value">{item.value}</span>
              </div>
              <h3 className="metric-card__label">{item.label}</h3>
              <p className="metric-card__subtext">{item.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
