"use client";

import { useEffect, useRef } from "react";

export default function VantaBackground() {
  const vantaRef = useRef(null);

  useEffect(() => {
    const loadVanta = async () => {
      if (typeof window !== "undefined") {
        const THREE = await import("three");
        window.THREE = THREE;

        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.dots.min.js";
        script.onload = () => {
          console.log("Vanta carregado!");
          if (window.VANTA && vantaRef.current) {
            window.VANTA.DOTS({
              el: vantaRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: true,
              minHeight: 50.0,
              minWidth: 50.0,
              scale: 1.0,
              scaleMobile: 1.0,
              color: 0x099c00,
              color2: 0x099c00,
              size: 0.5,
              spacing: 87.0,
              // backgroundColor REMOVIDO
            });
          }
        };

        document.body.appendChild(script);
      }
    };

    loadVanta();
  }, []);

  return (
    <div
      ref={vantaRef}
      id="background"
      style={{
        width: "100%",
        height: "50vh",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: "none", // opcional: deixa clique passar para elementos abaixo
      }}
    />
  );
}
