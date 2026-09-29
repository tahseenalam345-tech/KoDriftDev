"use client";

import React from "react";
import Image from "next/image";

export interface ProjectPreviewMediaProps {
  title: string;
  slug: string;
  category: string;
  imagePaths: string[];
  themeColor?: string;
  aspectClassName?: string;
}

export function ProjectPreviewMedia({
  title,
  slug,
  category,
  imagePaths,
  themeColor = "#006EF5",
  aspectClassName = "aspect-[16/8.8]",
}: ProjectPreviewMediaProps) {
  const isVertical =
    category.toLowerCase().includes("mobile") ||
    slug === "soundmind-ai" ||
    slug === "aether-diary";

  const hasMultipleImages = imagePaths && imagePaths.length >= 2;

  if (isVertical && hasMultipleImages) {
    const leftImg = imagePaths[1] || imagePaths[0];
    const centerImg = imagePaths[0];
    const rightImg = imagePaths[2] || imagePaths[1] || imagePaths[0];

    return (
      <div
        className={`relative ${aspectClassName} w-full overflow-hidden border-b border-black/[0.05] select-none`}
        style={{
          background: `radial-gradient(circle at 50% 60%, ${themeColor}28 0%, #060913 85%)`,
        }}
      >
        {/* Ambient Radial Accent Glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{
            background: `radial-gradient(ellipse at center, ${themeColor}35 0%, transparent 70%)`,
          }}
        />

        {/* 3-Phone Showcase Stage: Full vertical screenshots in one frame */}
        <div className="relative w-full h-full flex items-center justify-center gap-1.5 sm:gap-3 px-2 sm:px-4 py-2 overflow-hidden">
          {/* Left Phone Frame (Preview Screen 2) */}
          <div className="relative h-[85%] sm:h-[88%] aspect-[9/19.5] rounded-[9px] sm:rounded-[13px] overflow-hidden border-[1.5px] sm:border-[2px] border-white/15 bg-black shadow-[0_8px_20px_rgba(0,0,0,0.6)] transform -rotate-3 sm:-rotate-2 group-hover:-rotate-4 group-hover:scale-[1.02] transition-all duration-500 ease-out flex-shrink-0">
            {/* Dynamic Island Notch */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-4 sm:w-5 h-0.5 sm:h-1 bg-black rounded-full z-20 pointer-events-none" />
            <Image
              src={leftImg}
              alt={`${title} Screen 2`}
              fill
              sizes="(max-width: 768px) 30vw, 15vw"
              className="object-cover object-top"
            />
            {/* Home Indicator Bar */}
            <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 sm:w-6 h-0.5 bg-white/40 rounded-full z-20 pointer-events-none" />
          </div>

          {/* Center Phone Frame (Hero Screen 1) */}
          <div className="relative h-[93%] sm:h-[96%] aspect-[9/19.5] rounded-[11px] sm:rounded-[15px] overflow-hidden border-[2px] sm:border-[2.5px] border-white/30 bg-black shadow-[0_15px_35px_rgba(0,0,0,0.85)] z-10 transform group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-500 ease-out flex-shrink-0">
            {/* Dynamic Island Notch with Pulse */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-5 sm:w-6 h-1 sm:h-1.5 bg-black rounded-full z-20 flex items-center justify-end px-1 pointer-events-none">
              <div className="w-1 h-1 rounded-full bg-blue-500/80 animate-pulse" />
            </div>
            <Image
              src={centerImg}
              alt={`${title} Main Screen`}
              fill
              sizes="(max-width: 768px) 35vw, 18vw"
              className="object-cover object-top"
            />
            {/* Home Indicator Bar */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-6 sm:w-8 h-0.5 bg-white/60 rounded-full z-20 pointer-events-none" />
          </div>

          {/* Right Phone Frame (Preview Screen 3) */}
          <div className="relative h-[85%] sm:h-[88%] aspect-[9/19.5] rounded-[9px] sm:rounded-[13px] overflow-hidden border-[1.5px] sm:border-[2px] border-white/15 bg-black shadow-[0_8px_20px_rgba(0,0,0,0.6)] transform rotate-3 sm:rotate-2 group-hover:rotate-4 group-hover:scale-[1.02] transition-all duration-500 ease-out flex-shrink-0">
            {/* Dynamic Island Notch */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-4 sm:w-5 h-0.5 sm:h-1 bg-black rounded-full z-20 pointer-events-none" />
            <Image
              src={rightImg}
              alt={`${title} Screen 3`}
              fill
              sizes="(max-width: 768px) 30vw, 15vw"
              className="object-cover object-top"
            />
            {/* Home Indicator Bar */}
            <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 sm:w-6 h-0.5 bg-white/40 rounded-full z-20 pointer-events-none" />
          </div>
        </div>
      </div>
    );
  }

  // Horizontal / Standard Web Platform Showcase (Single Full Bleed Cover)
  return (
    <div className={`relative ${aspectClassName} w-full overflow-hidden bg-white/40 border-b border-black/[0.05]`}>
      <Image
        src={imagePaths[0]}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      />
      {/* Subtle fade overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(255,255,255,0.6) 0%, transparent 40%)",
        }}
      />
    </div>
  );
}

export default ProjectPreviewMedia;
