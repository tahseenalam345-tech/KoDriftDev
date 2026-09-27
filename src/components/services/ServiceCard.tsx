"use client";

import React from "react";
import Link from "next/link";
import {
  Globe,
  Smartphone,
  Cpu,
  Camera,
  Bot,
  RefreshCw,
  Search,
  Palette,
  Megaphone,
  FileSpreadsheet,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  Cpu,
  Camera,
  Bot,
  RefreshCw,
  Search,
  Palette,
  Megaphone,
  FileSpreadsheet,
};

const shapeMap: Record<string, string> = {
  "web-development": "cube",
  "app-development": "phone",
  "ai-automation": "torus",
  "ai-product-photography": "aperture",
  "software-development": "cube",
};

interface ServiceCardProps {
  name: string;
  slug: string;
  category?: string;
  shortDescription: string;
  outcomes?: string[];
  iconName?: string;
  featured?: boolean;
  shape?: string;
  className?: string;
}

export function ServiceCard({
  name,
  slug,
  category = "Build",
  shortDescription,
  outcomes = [],
  iconName = "Globe",
  shape,
  className,
}: ServiceCardProps) {
  const Icon = iconMap[iconName] || Globe;
  const cardShape = shape || shapeMap[slug] || "cube";

  const handleMouseEnter = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("kd-morph-shape", { detail: cardShape })
      );
    }
  };

  return (
    <Link
      href={`/services/${slug}`}
      onMouseEnter={handleMouseEnter}
      className={cn(
        "group relative block rounded-2xl md:rounded-3xl border border-white/10 dark:border-white/10 bg-white/[0.04] dark:bg-slate-950/30 p-6 sm:p-7 backdrop-blur-xl shadow-[0_20px_50px_-10px_rgba(0,110,245,0.12)] hover:shadow-[0_30px_70px_-10px_rgba(0,110,245,0.25)] hover:border-[#2C81FA]/50 hover:-translate-y-1.5 transition-all duration-300 select-none overflow-hidden",
        className
      )}
      style={{
        boxShadow:
          "0 20px 50px -10px rgba(0, 110, 245, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
      }}
    >
      {/* Specular Edge Glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      {/* Card Header & Pill Tags */}
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#006EF5]/15 border border-[#2C81FA]/35 text-[#2C81FA] shadow-[0_0_16px_rgba(44,129,250,0.20)]">
          <Icon className="h-5 w-5" />
        </div>
        <span className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-mono font-medium tracking-wider text-slate-300 backdrop-blur-md">
          {category}
        </span>
      </div>

      {/* Title & Description */}
      <div className="mt-5">
        <h3 className="text-xl sm:text-2xl font-bold font-['Manrope'] text-white group-hover:text-[#2C81FA] transition-colors">
          {name}
        </h3>
        <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-300 line-clamp-2">
          {shortDescription}
        </p>
      </div>

      {/* Deliverable Tags */}
      {outcomes.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {outcomes.slice(0, 2).map((item, idx) => (
            <span
              key={idx}
              className="rounded-full bg-white/[0.05] border border-white/10 px-2.5 py-0.5 text-[11px] text-slate-300"
            >
              • {item}
            </span>
          ))}
        </div>
      )}

      {/* Bottom Action */}
      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-3.5">
        <span className="text-xs font-mono tracking-widest text-slate-400 uppercase">
          Explore System
        </span>
        <div className="flex items-center gap-1 text-xs font-semibold text-[#006EF5] group-hover:text-[#2C81FA] transition-colors">
          <span>View</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
