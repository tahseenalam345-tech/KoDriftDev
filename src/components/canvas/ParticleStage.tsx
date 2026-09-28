"use client";

import React, { useState, useEffect } from "react";
import { ParticleBackground } from "./ParticleBackground";

export function ParticleStage() {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Only render background WebGL 3D particles on desktop (>= 1024px)
    // when scrolled down to Services / other sections.
    // On mobile, 3D particles are hidden for clean performance and readability,
    // while Hero greeting particle typography remains active.
    const checkState = () => {
      const isDesktop = window.innerWidth >= 1024;
      if (isDesktop && window.scrollY > 220) {
        setShouldRender(true);
      } else {
        setShouldRender(false);
      }
    };

    checkState();
    window.addEventListener("scroll", checkState, { passive: true });
    window.addEventListener("resize", checkState, { passive: true });
    return () => {
      window.removeEventListener("scroll", checkState);
      window.removeEventListener("resize", checkState);
    };
  }, []);

  if (!shouldRender) {
    return null;
  }

  return (
    <div className="hidden lg:block">
      <ParticleBackground />
    </div>
  );
}

export { ParticleBackground };
