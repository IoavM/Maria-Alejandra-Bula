import React, { useState, useEffect } from "react";
import LiquidGlass from "./LiquidGlass/LiquidGlass";
import { portfolioData } from "../data/portfolioData";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`nav-header-wrapper ${scrolled ? "nav-header-wrapper--scrolled" : ""}`}>
      <div className="contenedor nav-header-container">
        <LiquidGlass
          as="nav"
          variant="nav"
          cornerRadius={999}
          displacementScale={25}
          blurAmount={24}
          saturation={175}
          className="nav-liquid-capsule"
          aria-label="Navegación principal"
        >
          <div className="nav-capsule__inner">
            <a href="#inicio" className="nav-brand" onClick={(e) => scrollTo(e, "inicio")}>
              <span className="nav-brand__initials">MAB</span>
              <div className="nav-brand__meta">
                <span className="nav-brand__name">{portfolioData.personal.name}</span>
                <span className="nav-brand__title">{portfolioData.personal.title}</span>
              </div>
            </a>

            <div className="nav-menu">
              <ul className="nav-menu__list">
                <li><a href="#sobre-mi" onClick={(e) => scrollTo(e, "sobre-mi")}>Sobre mí</a></li>
                <li><a href="#experiencia" onClick={(e) => scrollTo(e, "experiencia")}>Experiencia</a></li>
                <li><a href="#proyectos" onClick={(e) => scrollTo(e, "proyectos")}>Proyectos</a></li>
                <li><a href="#habilidades" onClick={(e) => scrollTo(e, "habilidades")}>Habilidades</a></li>
                <li><a href="#formacion" onClick={(e) => scrollTo(e, "formacion")}>Formación</a></li>
                <li><a href="#reconocimientos" onClick={(e) => scrollTo(e, "reconocimientos")}>Logros</a></li>
              </ul>
            </div>

            <div className="nav-cta-wrap">
              <LiquidGlass
                as="a"
                href="#contacto"
                className="nav-cta-btn"
                variant="button"
                onClick={(e) => scrollTo(e, "contacto")}
                cornerRadius={999}
                padding="8px 22px"
                displacementScale={20}
                blurAmount={16}
              >
                <span>Contacto</span>
                <ArrowUpRight size={14} />
              </LiquidGlass>
            </div>

            <button
              className="nav-mobile-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              type="button"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </LiquidGlass>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`nav-drawer ${mobileOpen ? "is-open" : ""}`}>
        <LiquidGlass
          variant="card"
          cornerRadius={24}
          padding="24px"
          blurAmount={28}
          displacementScale={30}
          className="nav-drawer-glass"
        >
          <ul className="nav-drawer__list">
            <li><a href="#inicio" onClick={(e) => scrollTo(e, "inicio")}>Inicio</a></li>
            <li><a href="#sobre-mi" onClick={(e) => scrollTo(e, "sobre-mi")}>Sobre mí</a></li>
            <li><a href="#experiencia" onClick={(e) => scrollTo(e, "experiencia")}>Experiencia</a></li>
            <li><a href="#proyectos" onClick={(e) => scrollTo(e, "proyectos")}>Proyectos</a></li>
            <li><a href="#habilidades" onClick={(e) => scrollTo(e, "habilidades")}>Habilidades</a></li>
            <li><a href="#formacion" onClick={(e) => scrollTo(e, "formacion")}>Formación</a></li>
            <li><a href="#reconocimientos" onClick={(e) => scrollTo(e, "reconocimientos")}>Logros</a></li>
            <li><a href="#contacto" onClick={(e) => scrollTo(e, "contacto")}>Contacto</a></li>
          </ul>
        </LiquidGlass>
      </div>
    </header>
  );
}
