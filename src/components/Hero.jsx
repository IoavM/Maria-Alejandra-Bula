import React from "react";
import LiquidGlass from "./LiquidGlass/LiquidGlass";
import { portfolioData } from "../data/portfolioData";
import { ArrowDown, Award, Send, Mail, MapPin, Sparkles, GraduationCap } from "lucide-react";

export default function Hero() {
  const { personal } = portfolioData;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="hero-section" aria-label="Introducción">
      {/* Radiant Atmospheric Auroras for Liquid Glass Refraction */}
      <div className="hero-aura hero-aura--top-right" aria-hidden="true" />
      <div className="hero-aura hero-aura--bottom-left" aria-hidden="true" />
      <div className="hero-aura hero-aura--center" aria-hidden="true" />

      <div className="contenedor hero-grid">
        {/* Editorial Column Left */}
        <div className="hero-editorial">
          <div className="hero-pill-badge">
            <span className="hero-pill-dot" />
            <span>{personal.title}</span>
          </div>

          <h1 className="hero-headline">
            Historias que <span className="hero-headline--accent">conectan</span>, estrategia que transforma.
          </h1>

          <p className="hero-author-title">
            <strong>{personal.name}</strong> · Universidad EAFIT, Medellín
          </p>

          <p className="hero-lead">
            {personal.subtitle}
          </p>

          <div className="hero-actions">
            <button
              type="button"
              className="btn-editorial-primary"
              onClick={() => scrollTo("proyectos")}
            >
              <span>Ver Portafolio</span>
              <ArrowDown size={17} />
            </button>

            <LiquidGlass
              as="button"
              className="btn-editorial-glass"
              onClick={() => scrollTo("contacto")}
              cornerRadius={999}
              padding="14px 28px"
              displacementScale={35}
              blurAmount={20}
              type="button"
            >
              <Send size={16} />
              <span>Contactar</span>
            </LiquidGlass>
          </div>

          {/* Quick Metrics */}
          <div className="hero-highlights-strip">
            <div className="hero-strip-item">
              <span className="hero-strip-number">3x</span>
              <span className="hero-strip-label">Premio Consecutivo Periodismo Escrito</span>
            </div>
            <div className="hero-strip-sep" />
            <div className="hero-strip-item">
              <span className="hero-strip-number">XM</span>
              <span className="hero-strip-label">Filial Grupo ISA · Comunicación Interna</span>
            </div>
            <div className="hero-strip-sep" />
            <div className="hero-strip-item">
              <span className="hero-strip-number">CELEE</span>
              <span className="hero-strip-label">Investigación en Análisis del Discurso</span>
            </div>
          </div>

          {/* Cita debajo de los premios — Texto libre sin tarjeta */}
          <p className="hero-editorial-quote-text">
            “{personal.heroQuote.quote}”
          </p>
        </div>

        {/* Visual Magazine Column Right with Authentic Liquid Glass Card */}
        <div className="hero-visual">
          <div className="hero-portrait-frame">
            <div className="hero-portrait-image-wrap">
              <img
                src={personal.image || "/images/foto-aleja.jpeg"}
                alt={personal.name}
                className="hero-portrait-img"
              />
              <div className="hero-portrait-gradient-overlay" />
            </div>

            {/* Liquid Glass Profile Info Card — Complete with all personal information */}
            <LiquidGlass
              variant="card"
              className="hero-profile-glass-card"
              cornerRadius={22}
              padding="18px 20px"
              displacementScale={35}
              blurAmount={22}
              saturation={170}
              overLight={false}
            >
              <div className="liquid-user-info-card liquid-user-info-card--compact">
                <div className="liquid-user-info-profile">
                  <div className="liquid-user-info-avatar liquid-user-info-avatar--compact">
                    {personal.image ? (
                      <img
                        src={personal.image}
                        alt={personal.name}
                        className="liquid-user-info-avatar-img"
                      />
                    ) : (
                      <span>MAB</span>
                    )}
                  </div>
                  <div className="liquid-user-info-names">
                    <h3 className="liquid-user-info-name">{personal.name}</h3>
                    <span className="liquid-user-info-title">{personal.title}</span>
                  </div>
                </div>

                <div className="liquid-user-info-table liquid-user-info-table--compact">
                  <div className="liquid-user-info-row">
                    <span className="liquid-user-info-label">Email:</span>
                    <span className="liquid-user-info-value">
                      <a href={`mailto:${personal.email}`}>{personal.email}</a>
                    </span>
                  </div>
                  <div className="liquid-user-info-row">
                    <span className="liquid-user-info-label">Teléfono:</span>
                    <span className="liquid-user-info-value">
                      <a href={`tel:${personal.rawPhone || personal.phone.replace(/\s+/g, "")}`}>{personal.phone}</a>
                    </span>
                  </div>
                  <div className="liquid-user-info-row">
                    <span className="liquid-user-info-label">WhatsApp:</span>
                    <span className="liquid-user-info-value">
                      <a href={personal.whatsappUrl} target="_blank" rel="noopener noreferrer">
                        +57 304 566 0152 ↗
                      </a>
                    </span>
                  </div>
                  <div className="liquid-user-info-row">
                    <span className="liquid-user-info-label">LinkedIn:</span>
                    <span className="liquid-user-info-value">
                      <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
                        {personal.linkedinDisplay || "María Alejandra Bula"} ↗
                      </a>
                    </span>
                  </div>
                  <div className="liquid-user-info-row">
                    <span className="liquid-user-info-label">Ubicación:</span>
                    <span className="liquid-user-info-value">{personal.location}</span>
                  </div>
                  <div className="liquid-user-info-row">
                    <span className="liquid-user-info-label">Educación:</span>
                    <span className="liquid-user-info-value">{personal.education}</span>
                  </div>
                  <div className="liquid-user-info-row">
                    <span className="liquid-user-info-label">Idiomas:</span>
                    <span className="liquid-user-info-value">{personal.languagesText}</span>
                  </div>
                </div>
              </div>
            </LiquidGlass>
          </div>
        </div>
      </div>
    </section>
  );
}
