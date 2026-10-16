import React from "react";
import { BookOpen, Globe2, Sparkles, HeartHandshake } from "lucide-react";

export default function Interests() {
  const interests = [
    {
      icon: <BookOpen size={20} />,
      title: "Narrativa Humana & Crónica",
      desc: "Historias reales contadas con sensibilidad y profundidad investigativa."
    },
    {
      icon: <Globe2 size={20} />,
      title: "Comunicación Pública & Política",
      desc: "Construcción de puentes transparentes entre la ciudadanía y las instituciones."
    },
    {
      icon: <HeartHandshake size={20} />,
      title: "Cultura & Clima Organizacional",
      desc: "Ambientes laborales cohesionados a través de una comunicación empática y clara."
    },
    {
      icon: <Sparkles size={20} />,
      title: "Semiótica & Análisis del Discurso",
      desc: "Decodificación de mensajes en los medios para fomentar el pensamiento crítico."
    }
  ];

  return (
    <section className="section-spacing interests-section" aria-label="Intereses como comunicadora">
      <div className="contenedor">
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span className="etiqueta-seccion">Identidad & Enfoque</span>
          <h2 className="titulo-seccion">Lo que me apasiona como comunicadora</h2>
          <p className="descripcion-seccion" style={{ margin: "0 auto" }}>
            Los pilares que orientan mi ejercicio profesional y mi compromiso ético con las audiencias.
          </p>
        </div>

        <div className="interests-grid">
          {interests.map((item) => (
            <div key={item.title} className="interest-card">
              <div className="interest-icon-box">{item.icon}</div>
              <h3 className="interest-title">{item.title}</h3>
              <p className="interest-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
