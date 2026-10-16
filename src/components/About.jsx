import React from "react";
import { portfolioData } from "../data/portfolioData";
import LiquidGlass from "./LiquidGlass/LiquidGlass";
import { MessageSquare, Feather, Share2, Compass } from "lucide-react";

export default function About() {
 const { about } = portfolioData;

 const pillarIcons = [
  <MessageSquare size={22} className="about-pillar-icon" />,
  <Feather size={22} className="about-pillar-icon" />,
  <Share2 size={22} className="about-pillar-icon" />,
  <Compass size={22} className="about-pillar-icon" />
 ];

 return (
  <section id="sobre-mi" className="section-spacing about-section" aria-label="Sobre mí">
   {/* Background Soft Glow */}
   <div className="about-aura" aria-hidden="true" />

   <div className="contenedor">
    {/* Magazine Editorial Header */}
    <div className="about-editorial-intro ">
     <span className="etiqueta-seccion">Perfil Profesional</span>
     <h2 className="titulo-seccion">Estrategia, investigación y la fuerza transformadora de las palabras.</h2>
     <p className="about-lead-text">
      {about.lead}
     </p>
    </div>

    {/* 4 Pillars of Communication with Liquid Glass */}
    <div className="about-pillars-grid">
     {about.highlights.map((h, i) => (
      <LiquidGlass
       key={h.icon}
       className="about-pillar-card "
       cornerRadius={20}
       padding="32px 26px"
       displacementScale={28}
       blurAmount={18}
       style={{ transitionDelay: `${i * 0.08}s` }}
      >
       <div className="about-pillar-top">
        <span className="about-pillar-num">{h.icon}</span>
        {pillarIcons[i]}
       </div>
       <h3 className="about-pillar-title">{h.title}</h3>
       <p className="about-pillar-desc">{h.description}</p>
      </LiquidGlass>
     ))}
    </div>
   </div>
  </section>
 );
}
