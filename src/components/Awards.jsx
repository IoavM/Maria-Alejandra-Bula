import React from "react";
import { portfolioData } from "../data/portfolioData";
import LiquidGlass from "./LiquidGlass/LiquidGlass";
import { Trophy, Star } from "lucide-react";

export default function Awards() {
  const { awards } = portfolioData;

  return (
    <section id="reconocimientos" className="section-spacing awards-section" aria-label="Reconocimientos y Premios">
      <div className="awards-aura" aria-hidden="true" />

      <div className="contenedor">
        <div style={{ marginBottom: "48px" }}>
          <span className="etiqueta-seccion">Distinciones</span>
          <h2 className="titulo-seccion">{awards.title}</h2>
          <p className="descripcion-seccion">
            Reconocimiento al rigor investigativo, la calidad narrativa y el compromiso ético en la Universidad EAFIT.
          </p>
        </div>

        <div className="awards-grid">
          {awards.items.map((aw, idx) => (
            <LiquidGlass
              key={idx}
              className="award-card"
              cornerRadius={22}
              padding="28px 24px"
              displacementScale={32}
              blurAmount={18}
            >
              <div className="award-card-header">
                <span className="award-year-tag">{aw.year}</span>
              </div>

              <div className="award-card-body">
                <div className="award-title-row">
                  <div className="award-trophy-box">
                    <Trophy size={18} />
                  </div>
                  <h3 className="award-title">{aw.title}</h3>
                </div>

                <span className="award-institution">{aw.institution}</span>
                <p className="award-desc">{aw.description}</p>
              </div>

              <div className="award-card-footer">
                <span className="award-highlight-pill">
                  <Star size={12} className="award-star-icon" />
                  <span>{aw.highlight}</span>
                </span>
              </div>
            </LiquidGlass>
          ))}
        </div>
      </div>
    </section>
  );
}
