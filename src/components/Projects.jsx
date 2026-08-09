import React, { useEffect, useRef, useState } from "react";

export default function Projects({ onOpenWebPreview }) {
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
    const card = container.querySelector(".project-card");
    const cardWidth = card ? card.getBoundingClientRect().width : 300;
    const gap = 16;
    const scrollAmount = cardWidth + gap;

    container.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  const handleLinkClick = (e, projectData) => {
    e.preventDefault();
    if (onOpenWebPreview) {
      onOpenWebPreview(projectData);
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`projects ${isRevealed ? "reveal" : "reveal"}`}
      id="projects"
    >
      <div className="projects__inner">
        <h2 className="projects__title">
          our recent <span>PROJECTS</span>
        </h2>
        <p className="projects__subtitle">
          Explore how we help businesses transform their digital presence with custom high-performance solutions.
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

          <div className="projects__grid" ref={gridRef}>
            {/* Project Card 1 */}
            <article className="project-card">
              <div className="project-card__media">
                <img src="/asset/projects/motof.png" alt="MOTOFOCUZ" />
              </div>
              <div className="project-card__content">
                <h3
                  className="project-card__title"
                  style={{
                    fontFamily: "'Changa One', sans-serif", fontStyle: "italic"
                  }}
                >
                  MOTOFOCUZ
                </h3>
                <span className="project-card__tag">Detail Garage</span>
                <p className="project-card__desc">
                  A modern customer dashboard with appointment booking and seamless transaction management.
                </p>
                <div className="project-card__pills">
                  <span className="pill">HTML</span>
                  <span className="pill">CSS</span>
                  <span className="pill">Javascript</span>
                  <span className="pill">Supabase</span>
                </div>
                <div className="project-card__footer">
                  <a
                    href="https://mfzdetail.in"
                    className="project-card__link"
                    data-project-id="motofocuz"
                    data-project-title="MOTO FOCUZ — Detail Garage"
                    data-project-url="https://mfzdetail.in"
                    onClick={(e) =>
                      handleLinkClick(e, {
                        id: "motofocuz",
                        title: "MOTO FOCUZ — Detail Garage",
                        url: "https://mfzdetail.in",
                      })
                    }
                  >
                    View Website &rarr;
                  </a>
                  <span className="project-card__stage">
                    Stage <span>#5</span>
                  </span>
                </div>
              </div>
            </article>

            {/* Project Card 2 */}
            <article className="project-card">
              <div className="project-card__media">
                <img src="/asset/projects/kynod.png" alt="KYNODEN" />
              </div>
              <div className="project-card__content">
                <h3 className="project-card__title" style={{ fontFamily: "sans-serif", fontWeight: 600 }}>KYNODEN</h3>
                <span className="project-card__tag">Pet Care</span>
                <p className="project-card__desc">Upcoming Pet service</p>
                <div className="project-card__pills">
                  <span className="pill">React.js</span>
                  <span className="pill">Supabase</span>
                  <span className="pill">Javascript</span>
                </div>
                <div className="project-card__footer">
                  <a
                    href="#"
                    className="project-card__link"
                    data-project-id="kynoden"
                    data-project-title="KYNO DEN — Pet Care"
                    data-project-url="#"
                    onClick={(e) =>
                      handleLinkClick(e, {
                        id: "kynoden",
                        title: "KYNO DEN — Pet Care",
                        url: "#",
                      })
                    }
                  >
                    View Website &rarr;
                  </a>
                  <span className="project-card__stage">
                    Stage <span>#1</span>
                  </span>
                </div>
              </div>
            </article>
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
