import React from "react";
import { portfolioData } from "../data/portfolioData";
import LiquidGlass from "./LiquidGlass/LiquidGlass";
import { PenTool, Megaphone, Laptop, Sparkles } from "lucide-react";

export default function Skills() {
  const { skills } = portfolioData;

  const categoryIcons = [
    <PenTool size={20} className="skills-icon" />,
    <Megaphone size={20} className="skills-icon" />,
    <Laptop size={20} className="skills-icon" />
  ];

  return (
    <section id="habilidades" className="section-spacing skills-section" aria-label="Habilidades y Competencias">
      <div className="contenedor">
        <div style={{ marginBottom: "48px" }}>
          <span className="etiqueta-seccion">Competencias</span>
          <h2 className="titulo-seccion">{skills.title}</h2>
          <p className="descripcion-seccion">
            Competencias especializadas y metodologías de comunicación aplicadas con rigor en proyectos reales.
          </p>
        </div>

        {/* 3 Visual Clusters */}
        <div className="skills-clusters-grid">
          {skills.categories.map((cat, idx) => (
            <LiquidGlass
              key={cat.category}
              className="skills-cluster-card"
              cornerRadius={22}
              padding="32px 28px"
              displacementScale={26}
              blurAmount={18}
            >
              <div className="skills-cluster-header">
                <div className="skills-icon-wrap">{categoryIcons[idx]}</div>
                <h3 className="skills-cluster-title">{cat.category}</h3>
              </div>

              <div className="skills-chips-cluster">
                {cat.skills.map((s) => (
                  <div key={s.name} className="skill-item-chip">
                    <div className="skill-item-header">
                      <span className="skill-name">{s.name}</span>
                      <span className="skill-level-pill">
                        <span className="skill-level-dot" />
                        <span className="skill-level-text">{s.levelText}</span>
                      </span>
                    </div>
                    <div className="skill-progress-track">
                      <div
                        className="skill-progress-fill"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </LiquidGlass>
          ))}
        </div>

        {/* Soft Skills Editorial Strip */}
        <LiquidGlass
          className="skills-soft-strip"
          cornerRadius={24}
          padding="36px 36px"
          displacementScale={24}
          blurAmount={16}
        >
          <div className="skills-soft-label-box">
            <Sparkles size={18} className="skills-soft-sparkle" />
            <h4 className="skills-soft-title">{skills.softSkillsTitle}</h4>
          </div>
          <div className="skills-soft-chips-wrap">
            {skills.softSkills.map((sk) => (
              <span key={sk} className="tag-chip tag-chip--pink-outline">{sk}</span>
            ))}
          </div>
        </LiquidGlass>
      </div>
    </section>
  );
}
