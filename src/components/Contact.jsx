import React, { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import LiquidGlass from "./LiquidGlass/LiquidGlass";
import { Mail, Phone, MapPin, Copy, Check, Send } from "lucide-react";

const LinkedinSvg = () => (
 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
  <rect x="2" y="9" width="4" height="12" />
  <circle cx="4" cy="4" r="2" />
 </svg>
);

export default function Contact() {
 const { contact, personal } = portfolioData;
 const [copied, setCopied] = useState(false);

 const copyEmail = () => {
  navigator.clipboard.writeText(personal.email);
  setCopied(true);
  setTimeout(() => setCopied(false), 2400);
 };

 return (
  <section id="contacto" className="section-spacing contact-section" aria-label="Contacto">
   {/* Soft Pink Aura behind Contact Card */}
   <div className="contact-aura" aria-hidden="true" />

   <div className="contenedor">
    <div className="contact-editorial-card-wrap">
     <LiquidGlass
      className="contact-main-card "
      cornerRadius={28}
      padding="48px"
      displacementScale={45}
      blurAmount={24}
     >
      <div className="contact-grid">
       {/* Left Column */}
       <div className="contact-col-left">
        <span className="etiqueta-seccion">Hablemos</span>
        <h2 className="contact-headline">{contact.headline}</h2>
        <p className="contact-sub">{contact.subtitle}</p>

        <div className="contact-items-list">
         <a href={`mailto:${personal.email}`} className="contact-item-row">
          <div className="contact-item-icon"><Mail size={18} /></div>
          <div>
           <span className="contact-item-label">Correo Electrónico</span>
           <span className="contact-item-val">{personal.email}</span>
          </div>
         </a>

         <a href={`tel:${personal.phone.replace(/\s/g, '')}`} className="contact-item-row">
          <div className="contact-item-icon"><Phone size={18} /></div>
          <div>
           <span className="contact-item-label">Teléfono / WhatsApp</span>
           <span className="contact-item-val">{personal.phone}</span>
          </div>
         </a>

         <div className="contact-item-row">
          <div className="contact-item-icon"><MapPin size={18} /></div>
          <div>
           <span className="contact-item-label">Ubicación</span>
           <span className="contact-item-val">{personal.location}</span>
          </div>
         </div>
        </div>
       </div>

       {/* Right Column: Actions */}
       <div className="contact-col-right">
        <div className="contact-cta-box">
         <h3 className="contact-cta-title">¿Tienes un proyecto en mente?</h3>
         <p className="contact-cta-p">
          Estoy abierta a oportunidades en comunicación corporativa, relaciones públicas y proyectos editoriales en Medellín o remoto.
         </p>

         <div className="contact-btns-stack">
          <a
           href={`mailto:${personal.email}`}
           className="btn-editorial-primary"
           style={{ width: "100%", justifyContent: "center" }}
          >
           <Send size={16} />
           <span>Enviar Mensaje Directo</span>
          </a>

          <button
           type="button"
           className="btn-editorial-glass"
           style={{ width: "100%", justifyContent: "center" }}
           onClick={copyEmail}
          >
           {copied ? <Check size={16} /> : <Copy size={16} />}
           <span>{copied ? "¡Correo Copiado!" : "Copiar Correo"}</span>
          </button>
         </div>

         <div className="contact-socials-row">
          <a
           href={personal.linkedin}
           target="_blank"
           rel="noopener noreferrer"
           className="contact-social-pill"
          >
           <LinkedinSvg />
           <span>Perfil de LinkedIn</span>
          </a>
         </div>
        </div>
       </div>
      </div>
     </LiquidGlass>
    </div>
   </div>
  </section>
 );
}
