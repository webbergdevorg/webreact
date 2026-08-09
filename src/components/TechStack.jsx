import React, { useState } from "react";

const techTilesData = [
  { id: "figma", name: "Figma", img: "/asset/tech/figma.png", imgClass: "figma_logo" },
  { id: "react", name: "React", img: "/asset/tech/react.png", imgClass: "react_logo" },
  { id: "nodejs", name: "Node.js", img: "/asset/tech/nodejs.png", imgClass: "figma_logo" },
  { id: "express", name: "Express", img: "/asset/tech/expressjs.png", imgClass: "exp-logo" },
  { id: "mysql", name: "MySQL", img: "/asset/tech/mysql.png", imgClass: "post-logo" },
  { id: "postgresql", name: "PostgreSQL", img: "/asset/tech/postgresql.png", imgClass: "post-logo", tileClass: "postgre-bg" },
  { id: "supabase", name: "Supabase", img: "/asset/tech/supabase.png", imgClass: "exp-logo" },
  { id: "github", name: "GitHub", img: "/asset/tech/github.png", imgClass: "github-logo", tileClass: "github-bg" },
  { id: "openai", name: "OpenAI", img: "/asset/tech/chatgpt.png", tileClass: "chatgpt-imag" },
  { id: "cursor", name: "Cursor", img: "/asset/tech/cursor.png", imgClass: "cursor-logo", tileClass: "cursor-imag" },
  { id: "framer", name: "Framer", img: "/asset/tech/framer.png", imgClass: "figma_logo" },
  { id: "php", name: "PHP", img: "/asset/tech/php.png", imgClass: "figma_logo" },
  { id: "mongodb", name: "MongoDB", img: "/asset/tech/mongodb.png", imgClass: "figma_logo" },
  { id: "git", name: "Git", img: "/asset/tech/git.png" },
];

export default function TechStack() {
  const [activeTouchId, setActiveTouchId] = useState(null);

  const handleTouchTile = (id) => {
    setActiveTouchId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="techstack" id="tech-stack">
      <div className="techstack__inner">
        <h2 className="techstack__title">
          our <span>TECH STACK</span>
        </h2>

        <div className="tech-grid">
          {techTilesData.map((tile) => (
            <div
              key={tile.id}
              className={`tech-tile ${tile.tileClass || ""} ${
                activeTouchId === tile.id ? "is-hovered" : ""
              }`}
              tabIndex={0}
              aria-label={tile.name}
              onTouchStart={() => handleTouchTile(tile.id)}
            >
              <img
                className={tile.imgClass || ""}
                src={tile.img}
                alt={tile.name}
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <div className="tech-tooltip">
                <span className="tech-tooltip__dot"></span>
                <span className="tech-tooltip__text">{tile.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
