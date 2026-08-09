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

    // Default to true after a short delay to ensure cards are visible even if threshold hasn't fired
    const timer = setTimeout(() => setIsRevealed(true), 300);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

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

        <div className="team__grid">
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
      </div>
    </section>
  );
}
