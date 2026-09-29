"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  RotateCcw,
  Maximize2,
  Minimize2,
  ExternalLink,
  Sparkles,
  Smartphone,
  Layers,
  Volume2,
  ShieldCheck,
  Zap,
  Info,
  Play,
  CheckCircle2,
} from "lucide-react";

interface InteractiveAppSandboxProps {
  appName: string;
  appSlug: string;
  appUrl: string; // e.g. "/apps/soundmind/index.html" or "/apps/aether-diary/index.html"
  category?: string;
  tagline?: string;
  accentColor?: string; // hex or tailwind class
  accentGradient?: string;
  features?: string[];
  techStack?: string[];
  fallbackPreviewImage?: string;
}

export function InteractiveAppSandbox({
  appName,
  appSlug,
  appUrl,
  category = "Flutter Mobile App",
  tagline = "Interactive Live Sandbox running via Flutter Web & CanvasKit Engine",
  accentColor = "#006EF5",
  accentGradient = "from-[#003FC5] via-[#006EF5] to-[#2C81FA]",
  features = [],
  techStack = ["Flutter", "Dart", "CanvasKit", "WASM", "Web Audio"],
  fallbackPreviewImage,
}: InteractiveAppSandboxProps) {
  const [reloadKey, setReloadKey] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [is3dEnabled, setIs3dEnabled] = useState<boolean>(true);
  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);
  const [showTips, setShowTips] = useState<boolean>(false);
  const [useFallbackMode, setUseFallbackMode] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const deviceWrapperRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Reload iframe helper
  const handleReset = () => {
    setIsLoading(true);
    setHasError(false);
    setReloadKey((prev) => prev + 1);
  };

  // Fullscreen toggle
  const toggleFullscreen = useCallback(async () => {
    try {
      if (!document.fullscreenElement) {
        if (containerRef.current?.requestFullscreen) {
          await containerRef.current.requestFullscreen();
          setIsFullscreen(true);
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
          setIsFullscreen(false);
        }
      }
    } catch {
      // Fallback: open in new tab if fullscreen API is restricted
      window.open(appUrl, "_blank");
    }
  }, [appUrl]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  // Graceful loading transition
  const handleIframeLoad = () => {
    // CanvasKit & WASM might need an extra 1.2s to render initial frame
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  };

  // Error handling timeout
  useEffect(() => {
    const errorTimer = setTimeout(() => {
      if (isLoading) {
        // If loading takes > 14 seconds, allow fallback preview switch
        // but keep trying
      }
    }, 14000);
    return () => clearTimeout(errorTimer);
  }, [isLoading, reloadKey]);

  // 3D Perspective Mouse Move Effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!is3dEnabled || !deviceWrapperRef.current) return;
    const rect = deviceWrapperRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotateX(-y * 10);
    setRotateY(x * 10);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full flex flex-col items-center justify-center transition-colors duration-300 ${
        isFullscreen ? "fixed inset-0 z-50 bg-[#090D16] p-4 overflow-y-auto" : "my-6 sm:my-10"
      }`}
    >
      {/* ── 1. Device Controls Header (Floating Glass Pill Bar) ── */}
      <div className="z-40 mb-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
        <div className="flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-slate-900/90 backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_rgba(0,110,245,0.20),inset_0_1px_1px_rgba(255,255,255,0.2)] text-white text-xs sm:text-sm font-semibold">
          {/* Live Indicator */}
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
          </span>
          <span className="font-bold tracking-tight text-white/95">
            Live Interactive Sandbox
          </span>

          <span className="hidden sm:inline-block w-px h-3.5 bg-white/20 mx-1" />

          {/* Reset Button */}
          <button
            onClick={handleReset}
            type="button"
            className="group flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white/90 hover:text-white transition-all duration-150 active:scale-95 text-xs font-medium cursor-pointer"
            title="Reload Flutter Application"
          >
            <RotateCcw className="w-3.5 h-3.5 text-blue-400 group-hover:-rotate-90 transition-transform duration-300" />
            <span>Reset App</span>
          </button>

          {/* Open Fullscreen Button */}
          <button
            onClick={toggleFullscreen}
            type="button"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white/90 hover:text-white transition-all duration-150 active:scale-95 text-xs font-medium cursor-pointer"
            title={isFullscreen ? "Exit Fullscreen" : "Open Fullscreen Mockup"}
          >
            {isFullscreen ? (
              <>
                <Minimize2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Exit</span>
              </>
            ) : (
              <>
                <Maximize2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Open Fullscreen</span>
              </>
            )}
          </button>

          {/* Direct Launch in New Tab */}
          <a
            href={appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white/90 hover:text-white transition-all duration-150 active:scale-95 text-xs font-medium cursor-pointer"
            title="Open Direct Web App Tab"
          >
            <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
            <span>Direct Tab</span>
          </a>
        </div>

        {/* 3D Tilt Quick Toggle */}
        <button
          onClick={() => {
            setIs3dEnabled(!is3dEnabled);
            setRotateX(0);
            setRotateY(0);
          }}
          type="button"
          className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all cursor-pointer backdrop-blur-md ${
            is3dEnabled
              ? "bg-blue-600/20 border-blue-500/40 text-blue-300 shadow-[0_0_12px_rgba(0,110,245,0.25)]"
              : "bg-slate-900/60 border-white/10 text-slate-400 hover:text-white"
          }`}
          title="Toggle 3D interactive tilt"
        >
          {is3dEnabled ? "3D Tilt: ON" : "3D Tilt: OFF"}
        </button>

        {/* Mode switcher if user wants fallback view */}
        <button
          onClick={() => setUseFallbackMode(!useFallbackMode)}
          type="button"
          className="text-[11px] font-sans font-semibold text-slate-400 hover:text-slate-200 underline underline-offset-4 cursor-pointer"
        >
          {useFallbackMode ? "Switch to Live WASM Engine" : "Demo Preview Mode"}
        </button>
      </div>

      {/* ── 2. Interactive 3D Device Container ── */}
      <div
        style={{ perspective: "1400px" }}
        className="w-full flex justify-center items-center py-2"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={deviceWrapperRef}
          style={{
            transform: is3dEnabled
              ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1)`
              : "none",
            transition: is3dEnabled ? "transform 0.15s ease-out" : "transform 0.3s ease",
            transformStyle: "preserve-3d",
          }}
          className="relative transition-shadow duration-300"
        >
          {/* Subtle Outer Hardware Buttons (iPhone style) */}
          <div className="hidden sm:block absolute -left-[14px] top-28 w-[4px] h-10 bg-slate-800 rounded-l-md shadow-inner" />
          <div className="hidden sm:block absolute -left-[14px] top-42 w-[4px] h-12 bg-slate-800 rounded-l-md shadow-inner" />
          <div className="hidden sm:block absolute -left-[14px] top-58 w-[4px] h-12 bg-slate-800 rounded-l-md shadow-inner" />
          <div className="hidden sm:block absolute -right-[14px] top-36 w-[4px] h-16 bg-slate-800 rounded-r-md shadow-inner" />

          {/* ── REQUIRED 3D IPHONE DEVICE MOCKUP FRAME ── */}
          <div
            className="relative mx-auto w-[320px] h-[640px] md:w-[360px] md:h-[720px] rounded-[48px] border-[10px] border-slate-900 bg-black shadow-[0_25px_60px_rgba(0,110,245,0.25)] ring-1 ring-slate-700/80 ring-inset overflow-hidden select-none"
            style={{
              boxShadow: `0 25px 70px -15px ${accentColor}40, 0 10px 30px rgba(0,0,0,0.8), inset 0 0 4px rgba(255,255,255,0.2)`,
            }}
          >
            {/* Dynamic Island / Notch */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 md:w-28 md:h-6 bg-black rounded-full z-40 flex items-center justify-between px-2.5 border border-white/10 shadow-lg pointer-events-none">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-950 ring-1 ring-blue-500/30 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-blue-500/40" />
              </div>
              <div className="w-2 h-2 rounded-full bg-slate-900 ring-1 ring-emerald-500/20" />
            </div>

            {/* Apple Home Indicator Bar */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/40 rounded-full z-40 pointer-events-none" />

            {/* Subtle Screen Specular Glare Reflection */}
            <div
              className="absolute inset-0 z-30 pointer-events-none opacity-40 mix-blend-overlay"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.02) 40%, transparent 60%)",
              }}
            />

            {/* ── 3. Loading State (Frosted Glass Spinner) ── */}
            {isLoading && !useFallbackMode && (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center bg-slate-950/85 backdrop-blur-xl text-white transition-opacity duration-500">
                {/* Glowing Spinner */}
                <div className="relative mb-5">
                  <div className="w-14 h-14 rounded-full border-4 border-slate-700/50 border-t-blue-500 animate-spin" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-blue-400 animate-pulse" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-sm font-bold tracking-tight text-white flex items-center justify-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-blue-400" />
                    <span>Booting Flutter CanvasKit</span>
                  </h4>
                  <p className="text-[11px] text-slate-300 max-w-[220px] leading-relaxed">
                    Compiling WASM bytecode & initial graphic assets for high-FPS interaction...
                  </p>
                </div>

                {/* Progress bar shimmer */}
                <div className="mt-5 w-44 h-1.5 bg-slate-800 rounded-full overflow-hidden border border-white/10">
                  <div className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 animate-pulse rounded-full w-3/4" />
                </div>

                <div className="mt-4 flex items-center gap-1 text-[10px] font-sans font-semibold text-slate-400">
                  <Zap className="w-3 h-3 text-amber-400" />
                  <span>Interactive Audio & Canvas Ready</span>
                </div>
              </div>
            )}

            {/* ── 4. Main Display: Live Flutter Web App OR Fallback Demo ── */}
            {!useFallbackMode ? (
              <iframe
                key={reloadKey}
                ref={iframeRef}
                src={appUrl}
                onLoad={handleIframeLoad}
                onError={() => {
                  setHasError(true);
                  setIsLoading(false);
                }}
                className="w-full h-full border-0 select-none bg-black"
                title={`${appName} Live Demo`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; microphone; audio"
              />
            ) : (
              /* Fallback Interactive Video / Demo Preview */
              <div className="relative w-full h-full flex flex-col justify-between p-6 bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white">
                {/* Fallback Header Badge */}
                <div className="pt-8 text-center space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[11px] font-bold">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live Web Sandbox Ready</span>
                  </div>
                  <h3 className="text-xl font-extrabold tracking-tight text-white">
                    {appName}
                  </h3>
                  <p className="text-xs text-slate-300 leading-snug">
                    {tagline}
                  </p>
                </div>

                {/* Central Interactive Showcase Widget */}
                <div className="my-auto space-y-3">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-2.5">
                    <div className="flex items-center justify-between text-xs font-sans font-bold text-blue-400">
                      <span>APP STATUS</span>
                      <span className="text-emerald-400 font-bold">ONLINE</span>
                    </div>
                    <p className="text-xs text-slate-200">
                      Production Flutter Web target built with hardware-accelerated CanvasKit and Web Audio pipelines.
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/30 text-[10px] font-sans font-semibold text-blue-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setUseFallbackMode(false)}
                    type="button"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs shadow-lg hover:from-blue-500 hover:to-indigo-500 transition-all cursor-pointer active:scale-95"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Launch Live Interactive Engine</span>
                  </button>
                </div>

                {/* Footer notes */}
                <div className="pb-4 text-center">
                  <span className="text-[10px] text-slate-400">
                    Engineered by Kodrift · Direct Device Emulation
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── 3. Device Sandbox Features & Quick Notes Bar ── */}
      <div className="mt-6 max-w-2xl mx-auto w-full px-4">
        <div className="rounded-2xl p-4 sm:p-5 bg-white/90 backdrop-blur-xl border border-[rgba(0,110,245,0.20)] shadow-[0_8px_30px_rgba(0,110,245,0.08)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-sans uppercase tracking-wider font-extrabold text-[#006EF5]">
                {category}
              </span>
              <span className="text-xs text-slate-400">•</span>
              <span className="text-xs font-semibold text-slate-700">
                Direct Browser Execution
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Click and touch directly inside the device mockup to navigate, test interactive widgets, and trigger audio pipelines.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setShowTips(!showTips)}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
            >
              <Info className="w-3.5 h-3.5 text-blue-600" />
              <span>{showTips ? "Hide Tips" : "Testing Tips"}</span>
            </button>
            <a
              href={appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Pop Out</span>
            </a>
          </div>
        </div>

        {/* Expandable Tips Panel */}
        {showTips && (
          <div className="mt-3 p-4 rounded-xl bg-slate-900 text-white text-xs space-y-2 border border-slate-800 animate-in fade-in duration-200">
            <div className="font-bold text-blue-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>How to test this mobile application:</span>
            </div>
            <ul className="space-y-1.5 text-slate-300 pl-4 list-disc">
              <li>Use mouse drag or finger swipe to scroll through feeds and lists.</li>
              <li>Tap navigation bars, cards, and modal dialogs just like an actual iOS device.</li>
              <li>If you hear audio or ambient frequencies, ensure your sound is turned on.</li>
              <li>Use &quot;Reset App&quot; in the header bar above if you want to restart the state machine.</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
