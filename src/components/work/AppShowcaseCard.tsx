"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Play, Pause, Smartphone, Film, Image as ImageIcon, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

export interface AppShowcaseProps {
  title: string;
  category: string;
  description: string;
  tags: string[];
  videoSrc?: string;
  posterSrc: string;
  screenshots: string[];
  liveAppUrl?: string | null;
  caseStudyUrl?: string;
}

export default function AppShowcaseCard({
  title,
  category,
  description,
  tags,
  videoSrc,
  posterSrc,
  screenshots,
  liveAppUrl,
  caseStudyUrl,
}: AppShowcaseProps) {
  const [activeTab, setActiveTab] = useState<"video" | "screenshots" | "live">(
    videoSrc ? "video" : "screenshots"
  );
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Lazy loading observer: Only stream video when card is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (!entry.isIntersecting && videoRef.current) {
          videoRef.current.pause();
          setIsPlaying(false);
        } else if (entry.isIntersecting && activeTab === "video" && videoRef.current) {
          videoRef.current
            .play()
            .then(() => setIsPlaying(true))
            .catch(() => {});
        }
      },
      { threshold: 0.25 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [activeTab]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const nextImage = () => {
    setActiveImgIdx((prev) => (prev + 1) % screenshots.length);
  };

  const prevImage = () => {
    setActiveImgIdx((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <div
      ref={cardRef}
      className="group relative rounded-[32px] border border-white/10 bg-slate-900/60 p-6 md:p-10 backdrop-blur-2xl transition-all duration-500 hover:border-[#2C81FA]/40 hover:shadow-[0_20px_60px_-15px_rgba(0,110,245,0.25)] flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
      style={{
        boxShadow:
          "0 20px 50px -15px rgba(0, 110, 245, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.1)",
      }}
    >
      {/* 3D Phone Mockup Showcase */}
      <div className="relative w-[280px] h-[560px] md:w-[320px] md:h-[640px] rounded-[44px] border-[8px] border-slate-900 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden flex-shrink-0 select-none">
        {/* Dynamic Island Notch */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-30 flex items-center justify-end px-2 border border-white/5">
          <div className="w-2 h-2 rounded-full bg-blue-500/80 animate-pulse" />
        </div>

        {/* Home Indicator Bar */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/40 rounded-full z-30 pointer-events-none" />

        {/* Tab 1: Lazy Video Reel */}
        {activeTab === "video" && (
          <div className="relative w-full h-full bg-slate-950">
            {videoSrc && isIntersecting ? (
              <video
                ref={videoRef}
                src={videoSrc}
                poster={posterSrc}
                muted
                loop
                playsInline
                preload="none"
                className="w-full h-full object-cover cursor-pointer"
                onClick={togglePlay}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />
            ) : (
              <Image
                src={posterSrc}
                alt={title}
                fill
                priority={false}
                className="object-cover"
                sizes="(max-width: 768px) 280px, 320px"
              />
            )}
            <button
              onClick={togglePlay}
              type="button"
              aria-label="Toggle Play"
              className="absolute bottom-4 right-4 h-10 w-10 rounded-full bg-black/60 border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#006EF5] transition-colors z-20 cursor-pointer shadow-lg active:scale-95"
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5 fill-current" />}
            </button>
          </div>
        )}

        {/* Tab 2: Screenshot Gallery */}
        {activeTab === "screenshots" && (
          <div className="relative w-full h-full bg-slate-950">
            <Image
              src={screenshots[activeImgIdx] || posterSrc}
              alt={`${title} Screenshot ${activeImgIdx + 1}`}
              fill
              className="object-cover transition-opacity duration-300"
              sizes="(max-width: 768px) 280px, 320px"
            />

            {/* Gallery Navigation Arrows */}
            {screenshots.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  type="button"
                  aria-label="Previous screenshot"
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-black/50 border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/80 transition-colors z-20 cursor-pointer"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={nextImage}
                  type="button"
                  aria-label="Next screenshot"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-black/50 border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/80 transition-colors z-20 cursor-pointer"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </>
            )}

            {/* Gallery Dot Indicators */}
            {screenshots.length > 1 && (
              <div className="absolute bottom-4 inset-x-0 flex justify-center gap-1.5 z-20">
                {screenshots.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImgIdx(i)}
                    type="button"
                    aria-label={`Go to screenshot ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      activeImgIdx === i ? "w-6 bg-[#2C81FA]" : "w-1.5 bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Live Flutter Web App Sandbox */}
        {activeTab === "live" && (
          <div className="relative w-full h-full bg-slate-950">
            {liveAppUrl ? (
              <iframe
                src={liveAppUrl}
                title={`${title} Live Web Demo`}
                className="w-full h-full border-0 select-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; microphone; audio"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-slate-400">
                <Smartphone className="h-10 w-10 text-[#2C81FA] mb-2" />
                <p className="text-xs">Live web sandbox build initializing...</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* App Details & Mode Selector */}
      <div className="flex-1 flex flex-col items-start text-left">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-sans font-bold tracking-wider text-[#2C81FA] backdrop-blur-md">
            {category}
          </span>
          <span className="text-xs font-sans font-bold text-slate-400">
            2026 Release
          </span>
        </div>

        <h3 className="mt-4 text-3xl md:text-4xl font-extrabold font-heading text-white tracking-tight">
          {title}
        </h3>

        <p className="mt-3 text-sm md:text-base leading-relaxed text-slate-300 max-w-xl">
          {description}
        </p>

        {/* Interactive Mode Selector Switcher */}
        <div className="mt-6 flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
          {videoSrc && (
            <button
              onClick={() => setActiveTab("video")}
              type="button"
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "video" ? "bg-[#006EF5] text-white shadow-lg" : "text-slate-400 hover:text-white"
              }`}
            >
              <Film className="h-3.5 w-3.5" /> App Video Reel
            </button>
          )}

          {screenshots.length > 0 && (
            <button
              onClick={() => setActiveTab("screenshots")}
              type="button"
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "screenshots"
                  ? "bg-[#006EF5] text-white shadow-lg"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <ImageIcon className="h-3.5 w-3.5" /> Screenshot Gallery ({screenshots.length})
            </button>
          )}

          {liveAppUrl && (
            <button
              onClick={() => setActiveTab("live")}
              type="button"
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "live" ? "bg-[#006EF5] text-white shadow-lg" : "text-slate-400 hover:text-white"
              }`}
            >
              <Smartphone className="h-3.5 w-3.5" /> Live Web Sandbox
            </button>
          )}
        </div>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="rounded-full bg-white/[0.04] border border-white/5 px-3.5 py-1 text-xs text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {caseStudyUrl && (
            <a
              href={caseStudyUrl}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#003FC5] to-[#006EF5] shadow-[0_4px_16px_rgba(0,110,245,0.30)] hover:shadow-[0_6px_22px_rgba(0,110,245,0.45)] hover:scale-105 transition-all"
            >
              <span>Explore Full Case Study</span>
            </a>
          )}

          {liveAppUrl && (
            <a
              href={liveAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <span>Direct Web App</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export { AppShowcaseCard };
