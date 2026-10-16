import React from "react";
import { portfolioData } from "../data/portfolioData";
import LiquidGlass from "./LiquidGlass/LiquidGlass";
import { Globe } from "lucide-react";

export default function Languages() {
 const { languages } = portfolioData;

 return (
  <section className="idiomas" aria-label="Idiomas">
   <div className="contenedor">
    <div className="idiomas__row">
     <div className="idiomas__label ">
      <span className="etiqueta-seccion">{languages.tag}</span>
     </div>

     <div className="idiomas__items">
      {languages.items.map((lang, index) => (
       <LiquidGlass
        key={index}
        className="idiomas__item "
        cornerRadius={999}
        padding="12px 28px"
        displacementScale={20}
        blurAmount={10}
       >
        <Globe size={16} className="idiomas__icon" />
        <span className="idiomas__name">{lang.language}</span>
        <span className="idiomas__sep" aria-hidden="true" />
        <span className="idiomas__level">{lang.level}</span>
       </LiquidGlass>
      ))}
     </div>
    </div>
   </div>
  </section>
 );
}
