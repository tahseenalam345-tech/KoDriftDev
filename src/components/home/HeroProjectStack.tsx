"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  image: string;
  slug: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: "aurax",
    title: "AURA-X Luxury Timepieces",
    category: "Custom E-Commerce & OMS",
    image: "/images/projects/aurax/cover.webp",
    slug: "aurax-custom-oms-ecommerce",
  },
  {
    id: "cluck",
    title: "Cluck & Moo Dining Platform",
    category: "Full-Stack Ordering App",
    image: "/images/projects/cluck-n-moo/cover.webp",
    slug: "cluck-n-moo-restaurant-platform",
  },
  {
    id: "pharmacy",
    title: "KoDrift Pharmacy Logistics",
    category: "Healthcare Workflow SaaS",
    image: "/images/projects/pharmacy-saas/cover.webp",
    slug: "kodrift-pharmacy-saas",
  },
];

export function HeroProjectStack() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PROJECTS.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const activeProject = PROJECTS[activeIndex];
  const nextProject = PROJECTS[(activeIndex + 1) % PROJECTS.length];

  return (
    <div
      className="relative flex flex-col items-center justify-center w-full max-w-[500px] select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 2-Card 3D Layered Glass Stack */}
      <div className="relative w-full h-[320px] sm:h-[350px] flex items-center justify-center">
        {/* BACK CARD (Elevated with 3D tilt, blurred, slightly offset) */}
        <div
          className="absolute w-[92%] h-[270px] sm:h-[290px] rounded-3xl overflow-hidden pointer-events-none transition-all duration-700 ease-out"
          style={{
            transform: "scale(0.94) translateY(-16px) translateX(16px) rotate(2.5deg)",
            opacity: 0.50,
            filter: "blur(1.5px)",
            zIndex: 10,
            border: "1px solid rgba(255, 255, 255, 0.25)",
            background: "rgba(15, 23, 42, 0.55)",
            boxShadow: "0 20px 45px rgba(0, 63, 197, 0.15)",
          }}
        >
          <Image
            src={nextProject.image}
            alt={nextProject.title}
            fill
            sizes="460px"
            className="object-cover object-top opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        </div>

        {/* FRONT CARD (Active Project enclosed in rounded frosted glass frame) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.96 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="absolute w-full h-[280px] sm:h-[300px] z-20"
          >
            <Link
              href={`/work/${activeProject.slug}`}
              className="group block relative w-full h-full rounded-3xl p-2.5 backdrop-blur-xl bg-slate-900/40 border border-white/25 shadow-2xl transition-all duration-300 hover:border-[#2C81FA]/60 hover:shadow-[0_25px_60px_-15px_rgba(0,110,245,0.30)] overflow-hidden"
              style={{
                boxShadow:
                  "0 24px 50px -12px rgba(0, 110, 245, 0.18), inset 0 1px 1px rgba(255, 255, 255, 0.40)",
              }}
            >
              {/* Inner Image Frame */}
              <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-slate-950">
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 480px"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Ambient vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                {/* Top Floating Category Tag */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/15">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2C81FA]" />
                  <span className="font-mono text-[10.5px] font-semibold text-slate-200">
                    {activeProject.category}
                  </span>
                </div>

                {/* Bottom Overlay Title & Action */}
                <div className="absolute bottom-3 inset-x-3 flex items-center justify-between">
                  <div className="pr-3">
                    <p className="font-heading font-bold text-base sm:text-lg text-white group-hover:text-[#2C81FA] transition-colors leading-tight">
                      {activeProject.title}
                    </p>
                  </div>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 group-hover:bg-[#006EF5] text-white transition-all shadow-md">
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Glass Indicator Dots at Bottom */}
      <div className="flex items-center gap-2 mt-4 pt-1 z-20">
        {PROJECTS.map((proj, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={proj.id}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Jump to project ${proj.title}`}
              className="relative py-1 px-1 focus:outline-none"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-7 bg-[#006EF5] shadow-[0_0_12px_rgba(0,110,245,0.7)]"
                    : "w-2 bg-white/30 hover:bg-white/50"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
