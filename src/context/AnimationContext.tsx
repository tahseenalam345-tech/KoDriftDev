"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

export type ShapeType =
  | "sphere"
  | "cube"
  | "device"
  | "torus"
  | "aperture"
  | "matrix"
  | "preloader";

export type SectionType =
  | "preloader"
  | "hero"
  | "service-web"
  | "service-app"
  | "service-ai"
  | "service-photo"
  | "service-software";

interface AnimationContextType {
  isPreloaderActive: boolean;
  hasLoaded: boolean;
  completePreloader: () => void;
  activeShape: ShapeType;
  setActiveShape: (shape: ShapeType) => void;
  activeSection: SectionType;
  setActiveSection: (section: SectionType) => void;
  mouse: { x: number; y: number; active: boolean };
  updateMouse: (x: number, y: number, active: boolean) => void;
  canvasOpacity: number;
  setCanvasOpacity: (opacity: number) => void;
}

const AnimationContext = createContext<AnimationContextType>({
  isPreloaderActive: true,
  hasLoaded: false,
  completePreloader: () => {},
  activeShape: "preloader",
  setActiveShape: () => {},
  activeSection: "preloader",
  setActiveSection: () => {},
  mouse: { x: 0, y: 0, active: false },
  updateMouse: () => {},
  canvasOpacity: 1,
  setCanvasOpacity: () => {},
});

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [isPreloaderActive, setIsPreloaderActive] = useState<boolean>(true);
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);
  const [activeShape, setActiveShape] = useState<ShapeType>("preloader");
  const [activeSection, setActiveSection] = useState<SectionType>("preloader");
  const [canvasOpacity, setCanvasOpacity] = useState<number>(1);
  const [mouse, setMouse] = useState<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });

  const completePreloader = useCallback(() => {
    setIsPreloaderActive(false);
    setHasLoaded(true);
    setActiveShape("sphere");
    setActiveSection("hero");
    if (typeof window !== "undefined") {
      sessionStorage.setItem("kd_loaded", "true");
    }
  }, []);

  const updateMouse = useCallback((x: number, y: number, active: boolean) => {
    setMouse({ x, y, active });
  }, []);

  return (
    <AnimationContext.Provider
      value={{
        isPreloaderActive,
        hasLoaded,
        completePreloader,
        activeShape,
        setActiveShape,
        activeSection,
        setActiveSection,
        mouse,
        updateMouse,
        canvasOpacity,
        setCanvasOpacity,
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimation() {
  return useContext(AnimationContext);
}
