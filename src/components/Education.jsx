import React from "react";
import { portfolioData } from "../data/portfolioData";
import LiquidGlass from "./LiquidGlass/LiquidGlass";
import { GraduationCap, Award, CheckCircle } from "lucide-react";

export default function Education() {
 const { education } = portfolioData;

 return (
  <section id="formacion" className="section-spacing education-section" aria-label="Formación y Certificaciones">
   <div className="contenedor">
    <div className="" style={{ marginBottom: "48px" }}>
     <span className="etiqueta-seccion">Educación Continua</span>
     <h2 className="titulo-seccion">{education.title}</h2>
    </div>

    <div className="education-layout-grid">
     {/* Main University Academic Block */}
     <div className="education-academic-col">
      <h3 className="education-col-header">Pregrado Universitario</h3>
      {education.academic.map((ac, idx) => (
       <LiquidGlass
        key={idx}
        className="education-academic-card "
        cornerRadius={24}
        padding="36px"
        displacementScale={32}
        blurAmount={20}
       >
        <div className="education-icon-box">
         <GraduationCap size={28} />
        </div>

        <div className="education-degree-meta">
         <span className="education-period-badge">{ac.period}</span>
         <h4 className="education-degree-name">{ac.degree}</h4>
         <p className="education-emphasis">{ac.emphasis}</p>
         <p className="education-univ">{ac.institution} · {ac.location}</p>
        </div>

        <div className="education-highlights-box">
         <Award size={18} className="education-award-icon" />
         <p>{ac.highlights}</p>
        </div>
       </LiquidGlass>
      ))}
     </div>

     {/* Certifications Grid */}
     <div className="education-certs-col">
      <h3 className="education-col-header">Diplomados & Certificados</h3>
      <div className="education-certs-grid">
       {education.certifications.map((cert, idx) => (
        <LiquidGlass
         key={idx}
         className="education-cert-card "
         cornerRadius={16}
         padding="20px 22px"
         displacementScale={20}
         blurAmount={14}
        >
         <div className="education-cert-top">
          <span className="education-cert-year">{cert.year}</span>
          <span className="education-cert-status">
           <CheckCircle size={13} />
           {cert.status}
          </span>
         </div>
         <h5 className="education-cert-name">{cert.title}</h5>
         <span className="education-cert-inst">{cert.institution}</span>
        </LiquidGlass>
       ))}
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}
