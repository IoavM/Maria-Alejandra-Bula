import React, { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import LiquidGlass from "./LiquidGlass/LiquidGlass";
import { Award, ArrowRight, Eye, X } from "lucide-react";

export default function Projects() {
 const { projects } = portfolioData;
 const [activeModal, setActiveModal] = useState(null);

 return (
  <section id="proyectos" className="section-spacing projects-section" aria-label="Portafolio de Proyectos">
   <div className="projects-aura" aria-hidden="true" />

   <div className="contenedor">
    <div className="" style={{ marginBottom: "48px" }}>
     <span className="etiqueta-seccion">Casos & Publicaciones</span>
     <h2 className="titulo-seccion">{projects.title}</h2>
     <p className="descripcion-seccion">
      Investigación periodística premiada, estrategias de cultura corporativa y análisis de medios de comunicación.
     </p>
    </div>

    {/* Editorial Grid */}
    <div className="projects-grid">
     {projects.items.map((proj, idx) => (
      <LiquidGlass
       as="article"
       key={proj.title}
       className={`project-card ${idx === 0 ? "project-card--featured" : ""}`}
       cornerRadius={22}
       displacementScale={35}
       blurAmount={20}
       style={{ transitionDelay: `${idx * 0.07}s` }}
      >
       <div className="project-media-wrap">
        <img
         src={proj.image}
         alt={proj.title}
         className="project-img"
         loading="lazy"
        />
        <div className="project-badge-pill">
         <Award size={13} />
         <span>{proj.badge}</span>
        </div>
       </div>

       <div className="project-content">
        <span className="project-cat-tag">{proj.category}</span>
        <h3 className="project-title">{proj.title}</h3>
        <p className="project-description">{proj.description}</p>

        <div className="project-tags-wrap">
         {proj.technologies.map((t) => (
          <span key={t} className="tag-chip tag-chip--subtle">{t}</span>
         ))}
        </div>

        <div className="project-footer">
         <button
          type="button"
          className="project-view-btn"
          onClick={() => setActiveModal(proj)}
         >
          <span>Explorar caso editorial</span>
          <ArrowRight size={15} />
         </button>
        </div>
       </div>
      </LiquidGlass>
     ))}
    </div>
   </div>

   {/* Project Modal */}
   {activeModal && (
    <div className="project-modal-backdrop" onClick={() => setActiveModal(null)}>
     <div className="project-modal-box" onClick={(e) => e.stopPropagation()}>
      <LiquidGlass cornerRadius={26} padding="36px">
       <div className="project-modal-header">
        <span className="project-cat-tag">{activeModal.category}</span>
        <button
         className="project-modal-close"
         onClick={() => setActiveModal(null)}
         aria-label="Cerrar ventana"
        >
         <X size={20} />
        </button>
       </div>

       <h3 className="project-modal-title">{activeModal.title}</h3>
       <p className="project-modal-badge">
        <Award size={15} />
        {activeModal.badge}
       </p>

       <p className="project-modal-text">{activeModal.description}</p>

       <div className="project-modal-tags">
        {activeModal.technologies.map((t) => (
         <span key={t} className="tag-chip tag-chip--pink">{t}</span>
        ))}
       </div>

       <div className="project-modal-img-wrap">
        <img src={activeModal.image} alt={activeModal.title} />
       </div>
      </LiquidGlass>
     </div>
    </div>
   )}
  </section>
 );
}
