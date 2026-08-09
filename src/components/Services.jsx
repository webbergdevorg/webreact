import React, { useState, useRef, useEffect } from "react";

const servicesList = [
  {
    index: 0,
    heading: "UI/UX Design",
    text: "We craft user interfaces that are intuitive and experiences that are delightful. Good design is not just how it looks, but how it works — we focus on both.",
    image: "/asset/service/uid.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    index: 1,
    heading: "SEO Services",
    text: "Get found on Google. We optimize your site with keywords, structure, and strategies that improve visibility, ranking, and drive organic traffic to your business.",
    image: "/asset/service/seo.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="M15.5 15.5L20 20" />
        <path d="M8.8 8.5C8.8 7.6 9.5 7 10.5 7C11.5 7 12.2 7.6 12.2 8.4C12.2 9.5 10.5 9.8 10.5 11" />
        <circle cx="10.5" cy="13.2" r="0.6" fill="currentColor" />
      </svg>
    ),
  },
  {
    index: 2,
    heading: "Web Design & Development",
    text: "We create responsive, modern websites that not only look great but also perform across all devices. From landing pages to full business sites, we build with purpose and precision.",
    image: "/asset/service/dev.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2.5" y="4" width="19" height="13" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="m9.5 9-1.8 1.8L9.5 12.6M14.5 9l1.8 1.8-1.8 1.8" />
      </svg>
    ),
  },
  {
    index: 3,
    heading: "Social Media Management",
    text: "Build a strong presence on Instagram, Facebook, and more. We plan, design, and manage content that keeps your audience engaged and your brand growing.",
    image: "/asset/service/social.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="3" width="9" height="18" rx="2" />
        <path d="M9 18h3" />
        <path d="M16 6h4M18 4v4" />
        <path d="M18 12.5c.7-.8 2-.4 2 .6 0 .9-1.2 1.6-2 2.3-.8-.7-2-1.4-2-2.3 0-1 1.3-1.4 2-.6z" />
      </svg>
    ),
  },
  {
    index: 4,
    heading: "Branding & Logo Design",
    text: "From your logo to your entire brand identity, we shape a unique brand story. We help your business stand out with bold, memorable visuals and consistent messaging.",
    image: "/asset/service/lop.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 8.5h18" />
        <path d="M8.5 14l2.5 2.5 5-5" />
      </svg>
    ),
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(2); // Default to index 2 ("Web Design & Development")
  const [isRevealed, setIsRevealed] = useState(false);
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  const total = servicesList.length;

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

    return () => observer.disconnect();
  }, []);

  const scrollToCard = (index, smooth = true) => {
    if (!viewportRef.current || !trackRef.current) return;
    const cards = Array.from(trackRef.current.children);
    if (!cards[index]) return;

    const card = cards[index];
    const target =
      card.offsetLeft - (viewportRef.current.clientWidth - card.offsetWidth) / 2;
    viewportRef.current.scrollTo({
      left: target,
      behavior: smooth ? "smooth" : "auto",
    });
    setActiveIndex(index);
  };

  useEffect(() => {
    // Initial scroll position on load/reveal
    const timer = setTimeout(() => {
      scrollToCard(2, false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = () => {
    if (!viewportRef.current || !trackRef.current) return;
    const viewport = viewportRef.current;
    const cards = Array.from(trackRef.current.children);
    const mid = viewport.scrollLeft + viewport.clientWidth / 2;

    let best = 0;
    let bestDist = Infinity;
    cards.forEach((card, i) => {
      const center = card.offsetLeft + card.offsetWidth / 2;
      const dist = Math.abs(center - mid);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });

    if (best !== activeIndex) {
      setActiveIndex(best);
    }
  };

  const fillPercentage = ((activeIndex + 1) / total) * 100;
  const currentNumStr = (activeIndex + 1).toString().padStart(2, "0");
  const totalNumStr = total.toString().padStart(2, "0");

  return (
    <section
      ref={sectionRef}
      className={`services ${isRevealed ? "reveal" : "reveal"}`}
      id="services"
    >
      <h2 className="services__title">
        <span className="services__hl">SERVICES</span> that supercharge your
        business<span className="services__dot">.</span>
      </h2>

      <div
        className="services__viewport"
        ref={viewportRef}
        onScroll={handleScroll}
      >
        <div className="services__track" ref={trackRef}>
          {servicesList.map((svc) => (
            <article
              key={svc.index}
              className={`service-card ${
                svc.index === activeIndex ? "is-active" : ""
              }`}
              data-index={svc.index}
              onClick={() => scrollToCard(svc.index)}
            >
              <div className="service-card__icon">
                {svc.image ? (
                  <img
                    src={svc.image}
                    alt={svc.heading}
                    className="service-card__icon-img"
                    onError={(e) => {
                      e.target.style.display = "none";
                      if (e.target.nextSibling) {
                        e.target.nextSibling.style.display = "block";
                      }
                    }}
                  />
                ) : null}
                <span
                  className="service-card__icon-svg"
                  style={{ display: svc.image ? "none" : "block", width: "100%", height: "100%" }}
                >
                  {svc.icon}
                </span>
              </div>
              <h3 className="service-card__heading">{svc.heading}</h3>
              <p className="service-card__text">{svc.text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="services__footer">
        <div className="bubbles" role="tablist" aria-label="Services navigation">
          {servicesList.map((svc) => (
            <button
              key={svc.index}
              className={`bubble ${
                svc.index === activeIndex ? "is-active" : ""
              }`}
              data-index={svc.index}
              aria-label={`Service ${svc.index + 1}`}
              onClick={() => scrollToCard(svc.index)}
            ></button>
          ))}
        </div>

        <div
          className="counter"
          style={{ cursor: "pointer" }}
          onClick={() => scrollToCard((activeIndex + 1) % total)}
        >
          <span className="counter__cur">{currentNumStr}</span>
          <span className="counter__track">
            <span
              className="counter__fill"
              style={{ width: `${fillPercentage}%` }}
            ></span>
          </span>
          <span className="counter__total">{totalNumStr}</span>
        </div>
      </div>
    </section>
  );
}
