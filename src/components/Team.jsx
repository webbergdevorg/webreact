import React, { useEffect, useRef, useState } from "react";

const teamData = [
  {
    name: "Aadhi Sivam",
    role: "Backend Developer",
    pills: ["Node.js", "Supabase", "Architecture", "Finance"],
  },
  {
    name: "Tharun",
    role: "UI/UX Designer & Developer",
    pills: ["Figma", "Management", "Animations", "React"],
  },
  {
    name: "Ameer Amsha",
    role: "Full Stack Developer",
    pills: ["Leadership", "Tailwind CSS", "Express.js", "React Native"],
  },
];

export default function Team() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = () => {
    if (!gridRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = gridRef.current;
    const canScroll = scrollWidth > clientWidth + 5;
    setCanScrollLeft(canScroll && scrollLeft > 10);
    setCanScrollRight(canScroll && scrollLeft < scrollWidth - clientWidth - 10);
  };

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

    // Default to true after a short delay to ensure cards are visible even if threshold hasn't fired
    const timer = setTimeout(() => setIsRevealed(true), 300);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    updateScrollButtons();
    const gridEl = gridRef.current;
    if (gridEl) {
      gridEl.addEventListener("scroll", updateScrollButtons, { passive: true });
    }
    window.addEventListener("resize", updateScrollButtons);
    return () => {
      if (gridEl) {
        gridEl.removeEventListener("scroll", updateScrollButtons);
      }
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  const handleScroll = (direction) => {
    if (!gridRef.current) return;
    const container = gridRef.current;
    const card = container.querySelector(".team-card");
    const cardWidth = card ? card.getBoundingClientRect().width : 280;
    const gap = 16;
    const scrollAmount = cardWidth + gap;

    container.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      className={`team ${isRevealed ? "reveal" : "reveal"}`}
      id="team"
    >
      <div className="team__inner">
        <h2 className="team__title">
          meet our <span>TEAM</span>
        </h2>
        <p className="team__subtitle">
          A passionate group of designers, developers, and strategists building digital experiences that help businesses grow.
        </p>

        <div className="carousel-container">
          <button
            type="button"
            className={`scroll-btn scroll-btn--left ${!canScrollLeft ? "is-disabled" : ""}`}
            aria-label="Scroll left"
            onClick={() => handleScroll("left")}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div className="team__grid" ref={gridRef}>
            {teamData.map((member, idx) => (
              <article key={idx} className="team-card">
                <div className="team-card__media">
                  {/* Blank space for member image */}
                </div>
                <div className="team-card__content">
                  <h3 className="team-card__name">{member.name}</h3>
                  <span className="team-card__role">{member.role}</span>
                  <div className="team-card__pills">
                    {member.pills.map((pill, pIdx) => (
                      <span key={pIdx} className="pill">
                        {pill}
                      </span>
                    ))}
                  </div>
                  <div className="team-card__divider"></div>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            className={`scroll-btn scroll-btn--right ${!canScrollRight ? "is-disabled" : ""}`}
            aria-label="Scroll right"
            onClick={() => handleScroll("right")}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
