import React from "react";
import { portfolioData } from "../data/portfolioData";
import LiquidGlass from "./LiquidGlass/LiquidGlass";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

export default function Experience() {
 const { experience } = portfolioData;

 return (
  <section id="experiencia" className="section-spacing experience-section" aria-label="Experiencia Laboral">
   <div className="experience-aura" aria-hidden="true" />

   <div className="contenedor">
    <div className="" style={{ marginBottom: "48px" }}>
     <span className="etiqueta-seccion">Trayectoria Profesional</span>
     <h2 className="titulo-seccion">{experience.title}</h2>
     <p className="descripcion-seccion">
      Experiencia aplicada en organizaciones líderes del sector energético, centros de investigación académica y agencias de comunicación.
     </p>
    </div>

    <div className="experience-cards-stack">
     {experience.items.map((item, idx) => (
      <LiquidGlass
       as="article"
       key={`${item.company}-${idx}`}
       className="experience-card "
       cornerRadius={22}
       padding="36px"
       displacementScale={32}
       blurAmount={20}
      >
       <div className="experience-card-top">
        <div className="experience-org-meta">
         <div className="experience-org-badge">
          <Briefcase size={16} />
          <span>{item.company}</span>
         </div>
         <h3 className="experience-role-title">{item.role}</h3>
        </div>

        <div className="experience-period-pill">
         <Calendar size={14} />
         <span>{item.period}</span>
        </div>
       </div>

       <p className="experience-desc">{item.description}</p>

       <div className="experience-tasks-box">
        <span className="experience-tasks-title">Responsabilidades clave e impacto:</span>
        <ul className="experience-tasks-list">
         {item.responsibilities.map((resp, rIdx) => (
          <li key={rIdx} className="experience-task-item">
           <CheckCircle2 size={16} className="experience-task-check" />
           <span>{resp}</span>
          </li>
         ))}
        </ul>
       </div>

       <div className="experience-tags-row">
        {item.tags.map((tag) => (
         <span key={tag} className="tag-chip tag-chip--pink">{tag}</span>
        ))}
       </div>
      </LiquidGlass>
     ))}
    </div>
   </div>
  </section>
 );
}
