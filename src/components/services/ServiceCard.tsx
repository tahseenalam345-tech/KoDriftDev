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
  CheckCircle2,
  Sparkles,
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
  "web-development": "code",
  "software-development": "gear",
  "app-development": "phone",
  "ai-automation": "chip",
  "ai-product-photography": "camera",
  "website-redesign": "code",
  "seo": "gear",
  "graphic-design": "camera",
  "digital-marketing": "cube",
  "data-entry": "gear",
};

interface ServiceTheme {
  primary: string;
  bgGradient: string;
  borderColor: string;
  hoverBorder: string;
  iconBg: string;
  iconColor: string;
  tagBg: string;
  tagText: string;
  tagBorder: string;
  glowColor: string;
  accentGradient: string;
}

const serviceThemes: Record<string, ServiceTheme> = {
  "web-development": {
    primary: "#006EF5",
    bgGradient: "linear-gradient(145deg, rgba(255, 255, 255, 0.98) 0%, rgba(240, 247, 255, 0.92) 55%, rgba(228, 242, 255, 0.86) 100%)",
    borderColor: "rgba(0, 110, 245, 0.20)",
    hoverBorder: "rgba(0, 110, 245, 0.55)",
    iconBg: "rgba(0, 110, 245, 0.08)",
    iconColor: "#006EF5",
    tagBg: "rgba(0, 110, 245, 0.08)",
    tagText: "#0047BA",
    tagBorder: "rgba(0, 110, 245, 0.18)",
    glowColor: "rgba(0, 110, 245, 0.14)",
    accentGradient: "from-[#003FC5] to-[#006EF5]",
  },
  "app-development": {
    primary: "#10B981",
    bgGradient: "linear-gradient(145deg, rgba(255, 255, 255, 0.98) 0%, rgba(236, 253, 245, 0.92) 55%, rgba(209, 250, 229, 0.86) 100%)",
    borderColor: "rgba(16, 185, 129, 0.20)",
    hoverBorder: "rgba(16, 185, 129, 0.55)",
    iconBg: "rgba(16, 185, 129, 0.08)",
    iconColor: "#059669",
    tagBg: "rgba(16, 185, 129, 0.08)",
    tagText: "#047857",
    tagBorder: "rgba(16, 185, 129, 0.18)",
    glowColor: "rgba(16, 185, 129, 0.14)",
    accentGradient: "from-[#047857] to-[#10B981]",
  },
  "software-development": {
    primary: "#6366F1",
    bgGradient: "linear-gradient(145deg, rgba(255, 255, 255, 0.98) 0%, rgba(245, 243, 255, 0.92) 55%, rgba(238, 235, 254, 0.86) 100%)",
    borderColor: "rgba(99, 102, 241, 0.20)",
    hoverBorder: "rgba(99, 102, 241, 0.55)",
    iconBg: "rgba(99, 102, 241, 0.08)",
    iconColor: "#4F46E5",
    tagBg: "rgba(99, 102, 241, 0.08)",
    tagText: "#4338CA",
    tagBorder: "rgba(99, 102, 241, 0.18)",
    glowColor: "rgba(99, 102, 241, 0.14)",
    accentGradient: "from-[#4338CA] to-[#6366F1]",
  },
  "ai-product-photography": {
    primary: "#A855F7",
    bgGradient: "linear-gradient(145deg, rgba(255, 255, 255, 0.98) 0%, rgba(253, 244, 255, 0.92) 55%, rgba(245, 208, 254, 0.86) 100%)",
    borderColor: "rgba(168, 85, 247, 0.20)",
    hoverBorder: "rgba(168, 85, 247, 0.55)",
    iconBg: "rgba(168, 85, 247, 0.08)",
    iconColor: "#7E22CE",
    tagBg: "rgba(168, 85, 247, 0.08)",
    tagText: "#6B21A8",
    tagBorder: "rgba(168, 85, 247, 0.18)",
    glowColor: "rgba(168, 85, 247, 0.14)",
    accentGradient: "from-[#7E22CE] to-[#A855F7]",
  },
  "ai-automation": {
    primary: "#0284C7",
    bgGradient: "linear-gradient(145deg, rgba(255, 255, 255, 0.98) 0%, rgba(240, 249, 255, 0.92) 55%, rgba(224, 242, 254, 0.86) 100%)",
    borderColor: "rgba(2, 132, 199, 0.20)",
    hoverBorder: "rgba(2, 132, 199, 0.55)",
    iconBg: "rgba(2, 132, 199, 0.08)",
    iconColor: "#0284C7",
    tagBg: "rgba(2, 132, 199, 0.08)",
    tagText: "#0369A1",
    tagBorder: "rgba(2, 132, 199, 0.18)",
    glowColor: "rgba(2, 132, 199, 0.14)",
    accentGradient: "from-[#0369A1] to-[#0284C7]",
  },
  "website-redesign": {
    primary: "#F59E0B",
    bgGradient: "linear-gradient(145deg, rgba(255, 255, 255, 0.98) 0%, rgba(254, 243, 199, 0.65) 55%, rgba(253, 230, 138, 0.55) 100%)",
    borderColor: "rgba(245, 158, 11, 0.22)",
    hoverBorder: "rgba(245, 158, 11, 0.55)",
    iconBg: "rgba(245, 158, 11, 0.08)",
    iconColor: "#D97706",
    tagBg: "rgba(245, 158, 11, 0.08)",
    tagText: "#B45309",
    tagBorder: "rgba(245, 158, 11, 0.20)",
    glowColor: "rgba(245, 158, 11, 0.12)",
    accentGradient: "from-[#B45309] to-[#F59E0B]",
  },
  "seo": {
    primary: "#0D9488",
    bgGradient: "linear-gradient(145deg, rgba(255, 255, 255, 0.98) 0%, rgba(204, 251, 241, 0.65) 55%, rgba(153, 246, 228, 0.55) 100%)",
    borderColor: "rgba(13, 148, 136, 0.22)",
    hoverBorder: "rgba(13, 148, 136, 0.55)",
    iconBg: "rgba(13, 148, 136, 0.08)",
    iconColor: "#0D9488",
    tagBg: "rgba(13, 148, 136, 0.08)",
    tagText: "#0F766E",
    tagBorder: "rgba(13, 148, 136, 0.20)",
    glowColor: "rgba(13, 148, 136, 0.12)",
    accentGradient: "from-[#0F766E] to-[#0D9488]",
  },
  "graphic-design": {
    primary: "#F43F5E",
    bgGradient: "linear-gradient(145deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 228, 230, 0.65) 55%, rgba(254, 205, 211, 0.55) 100%)",
    borderColor: "rgba(244, 63, 94, 0.22)",
    hoverBorder: "rgba(244, 63, 94, 0.55)",
    iconBg: "rgba(244, 63, 94, 0.08)",
    iconColor: "#E11D48",
    tagBg: "rgba(244, 63, 94, 0.08)",
    tagText: "#BE123C",
    tagBorder: "rgba(244, 63, 94, 0.20)",
    glowColor: "rgba(244, 63, 94, 0.12)",
    accentGradient: "from-[#BE123C] to-[#F43F5E]",
  },
  "digital-marketing": {
    primary: "#2563EB",
    bgGradient: "linear-gradient(145deg, rgba(255, 255, 255, 0.98) 0%, rgba(219, 234, 254, 0.65) 55%, rgba(191, 219, 254, 0.55) 100%)",
    borderColor: "rgba(37, 99, 235, 0.22)",
    hoverBorder: "rgba(37, 99, 235, 0.55)",
    iconBg: "rgba(37, 99, 235, 0.08)",
    iconColor: "#1D4ED8",
    tagBg: "rgba(37, 99, 235, 0.08)",
    tagText: "#1E40AF",
    tagBorder: "rgba(37, 99, 235, 0.20)",
    glowColor: "rgba(37, 99, 235, 0.12)",
    accentGradient: "from-[#1E40AF] to-[#2563EB]",
  },
  "data-entry": {
    primary: "#475569",
    bgGradient: "linear-gradient(145deg, rgba(255, 255, 255, 0.98) 0%, rgba(241, 245, 249, 0.85) 55%, rgba(226, 232, 240, 0.75) 100%)",
    borderColor: "rgba(100, 116, 139, 0.22)",
    hoverBorder: "rgba(100, 116, 139, 0.55)",
    iconBg: "rgba(100, 116, 139, 0.08)",
    iconColor: "#334155",
    tagBg: "rgba(100, 116, 139, 0.08)",
    tagText: "#1E293B",
    tagBorder: "rgba(100, 116, 139, 0.20)",
    glowColor: "rgba(100, 116, 139, 0.12)",
    accentGradient: "from-[#1E293B] to-[#475569]",
  },
};

const defaultTheme: ServiceTheme = {
  primary: "#006EF5",
  bgGradient: "linear-gradient(145deg, rgba(255, 255, 255, 0.98) 0%, rgba(240, 247, 255, 0.92) 55%, rgba(228, 242, 255, 0.86) 100%)",
  borderColor: "rgba(0, 110, 245, 0.20)",
  hoverBorder: "rgba(0, 110, 245, 0.55)",
  iconBg: "rgba(0, 110, 245, 0.08)",
  iconColor: "#006EF5",
  tagBg: "rgba(0, 110, 245, 0.08)",
  tagText: "#0047BA",
  tagBorder: "rgba(0, 110, 245, 0.18)",
  glowColor: "rgba(0, 110, 245, 0.14)",
  accentGradient: "from-[#003FC5] to-[#006EF5]",
};

interface ServiceCardProps {
  name: string;
  slug: string;
  category?: string;
  shortDescription: string;
  outcomes?: string[];
  deliverables?: string[];
  iconName?: string;
  featured?: boolean;
  shape?: string;
  index?: number;
  className?: string;
  onHoverShape?: (shape: string, name: string) => void;
}

export function ServiceCard({
  name,
  slug,
  category = "Build",
  shortDescription,
  outcomes = [],
  deliverables = [],
  iconName = "Globe",
  shape,
  index = 1,
  className,
  onHoverShape,
}: ServiceCardProps) {
  const Icon = iconMap[iconName] || Globe;
  const cardShape = shape || shapeMap[slug] || "code";
  const theme = serviceThemes[slug] || defaultTheme;

  const handleMouseEnter = () => {
    if (onHoverShape) {
      onHoverShape(cardShape, name);
    }
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("kd-morph-shape", {
          detail: { shape: cardShape, cardId: `service-${slug}` },
        })
      );
    }
  };

  const displayPoints = outcomes.length > 0 ? outcomes.slice(0, 2) : deliverables.slice(0, 2);

  return (
    <Link
      id={`service-${slug}`}
      href={`/services/${slug}`}
      onMouseEnter={handleMouseEnter}
      onTouchStart={handleMouseEnter}
      className={cn(
        "group relative block rounded-[18px] sm:rounded-[28px] border-[1.5px] p-4 sm:p-7 md:p-8 backdrop-blur-xl transition-all duration-300 ease-out select-none overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_26px_60px_-12px_rgba(0,110,245,0.22),inset_0_1.5px_2px_rgba(255,255,255,1)]",
        className
      )}
      style={{
        background: theme.bgGradient,
        borderColor: theme.borderColor,
        boxShadow:
          "0 10px 30px -10px rgba(0, 110, 245, 0.08), inset 0 1.5px 2px rgba(255, 255, 255, 1)",
      }}
    >
      {/* Top Specular Ambient Glow */}
      <div
        className="pointer-events-none absolute -top-16 -right-16 w-44 h-44 rounded-full transition-all duration-300 opacity-60 group-hover:opacity-100 group-hover:scale-125"
        style={{
          background: `radial-gradient(circle, ${theme.glowColor} 0%, transparent 70%)`,
          filter: "blur(24px)",
        }}
        aria-hidden="true"
      />

      {/* Top Edge Specular White Highlight */}
      <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none" />

      {/* Header Row: 3D Squircle Icon + Category Pill + Number */}
      <div className="relative z-10 flex items-center justify-between gap-2.5 sm:gap-3">
        <div className="flex items-center gap-2 sm:gap-3">
          {/* 3D Glass Squircle Icon */}
          <div
            className="flex h-10 w-10 sm:h-13 sm:w-13 items-center justify-center rounded-xl sm:rounded-2xl bg-white/95 border shadow-[0_4px_16px_rgba(0,110,245,0.12),inset_0_1px_1px_rgba(255,255,255,1)] transition-transform duration-300 group-hover:scale-110"
            style={{
              borderColor: theme.tagBorder,
              color: theme.iconColor,
            }}
          >
            <Icon className="h-5 w-5 sm:h-6 sm:w-6 stroke-[2.2]" />
          </div>

          {/* Category Tag */}
          <span
            className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider border shadow-xs transition-colors"
            style={{
              backgroundColor: theme.tagBg,
              color: theme.tagText,
              borderColor: theme.tagBorder,
            }}
          >
            {category}
          </span>
        </div>

        {/* Index Badge */}
        <span className="font-heading font-extrabold text-xl sm:text-3xl tracking-tight bg-gradient-to-br from-slate-400/80 to-slate-600/90 bg-clip-text text-transparent group-hover:bg-gradient-to-br group-hover:from-[#003FC5] group-hover:to-[#006EF5] transition-all duration-300">
          {String(index).padStart(2, "0")}
        </span>
      </div>

      {/* Title & Description */}
      <div className="relative z-10 mt-3 sm:mt-5">
        <h3 className="text-lg sm:text-2xl font-heading font-extrabold text-[#0B132B] group-hover:text-[#006EF5] transition-colors tracking-tight leading-snug">
          {name}
        </h3>
        <p className="mt-1.5 sm:mt-2.5 text-xs sm:text-[14px] leading-snug sm:leading-relaxed text-[#2C3E5A] font-medium line-clamp-2">
          {shortDescription}
        </p>
      </div>

      {/* Outcomes / Key Deliverable Pills */}
      {displayPoints.length > 0 && (
        <div className="relative z-10 mt-3 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2">
          {displayPoints.map((point, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1.5 rounded-full bg-white/90 border border-slate-200/90 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-semibold text-[#1E3A8A] shadow-[0_1px_4px_rgba(0,0,0,0.03)] backdrop-blur-md"
            >
              <CheckCircle2 className="h-3 w-3 text-[#006EF5] shrink-0" />
              <span className="truncate max-w-[240px] sm:max-w-[280px]">{point}</span>
            </span>
          ))}
        </div>
      )}

      {/* Bottom Action Footer */}
      <div className="relative z-10 mt-3.5 sm:mt-6 pt-2.5 sm:pt-4 border-t border-[rgba(0,110,245,0.12)] flex items-center justify-between">
        <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-500 group-hover:text-[#006EF5] transition-colors flex items-center gap-1.5">
          <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#006EF5]" />
          <span>Explore Architecture</span>
        </span>
        <div className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-extrabold text-[#006EF5] group-hover:text-[#004AC7] transition-all">
          <span>View specs</span>
          <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform duration-200 group-hover:translate-x-1.5" />
        </div>
      </div>
    </Link>
  );
}
