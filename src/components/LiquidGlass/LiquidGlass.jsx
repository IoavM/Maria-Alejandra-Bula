import React, { useRef, useId, useState, useEffect } from "react";
import { displacementMap, polarDisplacementMap } from "./displacementMaps";
import "./LiquidGlass.css";

/**
 * LiquidGlass Component — Apple Liquid Glass Effect
 * Based on https://github.com/rdev/liquid-glass-react
 *
 * Implements:
 * 1. Physical SVG feDisplacementMap refraction (curved edge distortion).
 * 2. Prismatic chromatic aberration & specular dual-layer borders.
 * 3. High-transparency frosted backdrop blur & saturation boost.
 * 4. Dynamic cursor angle lighting & sheen physics.
 */
export default function LiquidGlass({
  children,
  as: Component = "div",
  className = "",
  style = {},
  cornerRadius = 28,
  displacementScale = 45,
  blurAmount = 22,
  saturation = 160,
  aberrationIntensity = 2,
  padding,
  onClick,
  interactive = true,
  glowOnHover = true,
  overLight = false,
  mode = "standard", // "standard" | "polar"
  variant = "card", // "card" | "nav" | "button" | "pill" | "badge" | "profile-card"
  ...props
}) {
  const glassRef = useRef(null);
  const filterId = useId().replace(/:/g, "_");
  const [isFirefox, setIsFirefox] = useState(false);

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      setIsFirefox(navigator.userAgent.toLowerCase().includes("firefox"));
    }
  }, []);

  const handleMouseMove = (e) => {
    if (!glassRef.current || !interactive) return;
    const rect = glassRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
    const angle = Math.round(135 + ((x - 50) / 50) * 45);

    glassRef.current.style.setProperty("--mouse-x", `${x}%`);
    glassRef.current.style.setProperty("--mouse-y", `${y}%`);
    glassRef.current.style.setProperty("--light-angle", `${angle}deg`);
  };

  const handleMouseLeave = () => {
    if (!glassRef.current) return;
    glassRef.current.style.setProperty("--mouse-x", "50%");
    glassRef.current.style.setProperty("--mouse-y", "50%");
    glassRef.current.style.setProperty("--light-angle", "135deg");
  };

  const mapSrc = mode === "polar" ? polarDisplacementMap : displacementMap;

  return (
    <Component
      ref={glassRef}
      className={`liquid-glass-wrapper liquid-glass-wrapper--${variant} ${className}`}
      style={{
        borderRadius: `${cornerRadius}px`,
        padding: padding || undefined,
        ...style,
      }}
      onMouseMove={interactive ? handleMouseMove : undefined}
      onMouseLeave={interactive ? handleMouseLeave : undefined}
      onClick={onClick}
      {...props}
    >
      {/* SVG Optical Refraction Filter (feDisplacementMap) */}
      <svg
        className="liquid-glass-svg-filter"
        style={{ position: "absolute", width: 0, height: 0, pointerEvents: "none" }}
        aria-hidden="true"
      >
        <defs>
          <radialGradient id={`${filterId}-edge-mask`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="black" stopOpacity="0" />
            <stop
              offset={`${Math.max(30, 80 - aberrationIntensity * 2)}%`}
              stopColor="black"
              stopOpacity="0"
            />
            <stop offset="100%" stopColor="white" stopOpacity="1" />
          </radialGradient>

          <filter
            id={filterId}
            x="-35%"
            y="-35%"
            width="170%"
            height="170%"
            colorInterpolationFilters="sRGB"
          >
            <feImage
              id="feimage"
              x="0"
              y="0"
              width="100%"
              height="100%"
              result="DISPLACEMENT_MAP"
              href={mapSrc}
              preserveAspectRatio="xMidYMid slice"
            />
            <feColorMatrix
              in="DISPLACEMENT_MAP"
              type="matrix"
              values="0.3 0.3 0.3 0 0
                      0.3 0.3 0.3 0 0
                      0.3 0.3 0.3 0 0
                      0 0 0 1 0"
              result="EDGE_INTENSITY"
            />
            <feComponentTransfer in="EDGE_INTENSITY" result="EDGE_MASK">
              <feFuncA type="discrete" tableValues={`0 ${aberrationIntensity * 0.05} 1`} />
            </feComponentTransfer>
            <feOffset in="SourceGraphic" dx="0" dy="0" result="CENTER_ORIGINAL" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="DISPLACEMENT_MAP"
              scale={displacementScale * -1}
              xChannelSelector="R"
              yChannelSelector="B"
              result="RED_DISPLACED"
            />
            <feColorMatrix
              in="RED_DISPLACED"
              type="matrix"
              values="1 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
              result="RED_CHANNEL"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="DISPLACEMENT_MAP"
              scale={displacementScale * (-1 - aberrationIntensity * 0.05)}
              xChannelSelector="R"
              yChannelSelector="B"
              result="GREEN_DISPLACED"
            />
            <feColorMatrix
              in="GREEN_DISPLACED"
              type="matrix"
              values="0 0 0 0 0
                      0 1 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
              result="GREEN_CHANNEL"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="DISPLACEMENT_MAP"
              scale={displacementScale * (-1 - aberrationIntensity * 0.1)}
              xChannelSelector="R"
              yChannelSelector="B"
              result="BLUE_DISPLACED"
            />
            <feColorMatrix
              in="BLUE_DISPLACED"
              type="matrix"
              values="0 0 0 0 0
                      0 0 0 0 0
                      0 0 1 0 0
                      0 0 0 1 0"
              result="BLUE_CHANNEL"
            />
            <feBlend in="GREEN_CHANNEL" in2="BLUE_CHANNEL" mode="screen" result="GB_COMBINED" />
            <feBlend in="RED_CHANNEL" in2="GB_COMBINED" mode="screen" result="RGB_COMBINED" />
            <feGaussianBlur
              in="RGB_COMBINED"
              stdDeviation={Math.max(0.1, 0.5 - aberrationIntensity * 0.1)}
              result="ABERRATED_BLURRED"
            />
            <feComposite
              in="ABERRATED_BLURRED"
              in2="EDGE_MASK"
              operator="in"
              result="EDGE_ABERRATION"
            />
            <feComponentTransfer in="EDGE_MASK" result="INVERTED_MASK">
              <feFuncA type="table" tableValues="1 0" />
            </feComponentTransfer>
            <feComposite
              in="CENTER_ORIGINAL"
              in2="INVERTED_MASK"
              operator="in"
              result="CENTER_CLEAN"
            />
            <feComposite in="EDGE_ABERRATION" in2="CENTER_CLEAN" operator="over" />
          </filter>
        </defs>
      </svg>

      {/* 1. Translucent Liquid Refractive Backdrop */}
      <span
        className="liquid-glass-backdrop"
        style={{
          borderRadius: `${cornerRadius}px`,
          filter: isFirefox ? undefined : `url(#${filterId})`,
          backdropFilter: `blur(${blurAmount}px) saturate(${saturation}%)`,
          WebkitBackdropFilter: `blur(${blurAmount}px) saturate(${saturation}%)`,
        }}
        aria-hidden="true"
      />

      {/* 2. Prismatic Beveled Edge (Apple Refractive Highlight) */}
      <span
        className="liquid-glass-specular-edge"
        style={{ borderRadius: `${cornerRadius}px` }}
        aria-hidden="true"
      />

      {/* 3. Dynamic Cursor Light Sheen */}
      {glowOnHover && (
        <span
          className="liquid-glass-sheen"
          style={{ borderRadius: `${cornerRadius}px` }}
          aria-hidden="true"
        />
      )}

      {/* 4. Content Container */}
      <div className="liquid-glass-content">{children}</div>
    </Component>
  );
}
