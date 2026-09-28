"use client";

import React, { useState, useEffect } from "react";
import { ParticleBackground } from "./ParticleBackground";

export function ParticleStage() {
  // Keeping only Hero page particles and Service page particles.
  // All other background particles (products, work, photos, etc.) are commented out.
  return null;

  /*
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
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
  */
}

export { ParticleBackground };
