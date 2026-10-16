import React from "react";
import { portfolioData } from "../data/portfolioData";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="editorial-footer">
      <div className="contenedor editorial-footer__inner">
        <div className="editorial-footer__meta">
          <span className="editorial-footer__name">{portfolioData.personal.name}</span>
          <span className="editorial-footer__copy">
            © {new Date().getFullYear()} · {portfolioData.personal.title}. Estética Liquid Glass & Editorial.
          </span>
        </div>

        <button
          type="button"
          onClick={scrollTop}
          className="editorial-footer__scroll-btn"
          aria-label="Volver al inicio"
        >
          <span>Inicio</span>
          <ArrowUp size={15} />
        </button>
      </div>
    </footer>
  );
}
