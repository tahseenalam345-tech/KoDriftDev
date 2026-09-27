"use client";

import React, { useState, useEffect } from "react";
import { ParticleBackground } from "./ParticleBackground";

export function ParticleStage() {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Only render background WebGL particles when scrolled down to Services / other sections
    // Keep hero completely clean without any stray particle circle
    const checkScroll = () => {
      if (window.scrollY > 220) {
        setShouldRender(true);
      } else {
        setShouldRender(false);
      }
    };

    checkScroll();
    window.addEventListener("scroll", checkScroll, { passive: true });
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  if (!shouldRender) {
    return null;
  }

  return <ParticleBackground />;
}

export { ParticleBackground };
