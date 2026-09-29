"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { ProjectPreviewMedia } from "@/components/work/ProjectPreviewMedia";
import { Project } from "@/types";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const isComingSoon =
    project.status?.toLowerCase().includes("coming soon") ||
    project.status?.toLowerCase().includes("in progress");

  const hasRealImage = project.imagePaths && project.imagePaths.length > 0;

  return (
    <article
      className={cn(
        "group relative flex flex-col justify-between rounded-[18px] sm:rounded-[28px] p-3.5 sm:p-5 border-[1.5px] border-[rgba(0,110,245,0.18)] hover:border-[#006EF5] backdrop-blur-xl shadow-[0_8px_24px_-6px_rgba(0,110,245,0.06),inset_0_1.5px_2px_rgba(255,255,255,1)] hover:shadow-[0_22px_45px_-8px_rgba(0,110,245,0.20),inset_0_1.5px_2px_rgba(255,255,255,1)] hover:-translate-y-1.5 transition-all duration-300 ease-out overflow-hidden select-none",
        className
      )}
      style={{
        background:
          "linear-gradient(150deg, rgba(255, 255, 255, 0.96) 0%, rgba(242, 248, 255, 0.90) 55%, rgba(234, 244, 255, 0.85) 100%)",
      }}
    >
      {/* Top ambient color reflection */}
      <div
        className="pointer-events-none absolute -top-16 -right-16 w-36 h-36 rounded-full bg-[#006EF5]/10 blur-xl group-hover:bg-[#006EF5]/20 transition-all duration-300"
        aria-hidden="true"
      />

      <div className="flex flex-col gap-2.5 sm:gap-3.5 relative z-10">
        {/* Media Preview Container */}
        <Link
          href={`/work/${project.slug}`}
          className="relative block w-full overflow-hidden rounded-[14px] sm:rounded-[20px] aspect-[16/9] sm:aspect-[16/10] bg-[#0A1628] border border-black/[0.08] shadow-xs group/media"
        >
          {hasRealImage ? (
            <ProjectPreviewMedia
              title={project.title}
              slug={project.slug}
              category={project.category}
              imagePaths={project.imagePaths}
              themeColor={project.slug === "soundmind-ai" ? "#006EF5" : project.slug === "aether-diary" ? "#8B5CF6" : "#006EF5"}
              aspectClassName="h-full w-full"
            />
          ) : (
            <PlaceholderMedia
              label={project.title}
              category={project.category}
              contentType={isComingSoon ? "Prototype Preview" : "Production Platform Preview"}
              sublabel={isComingSoon ? "Case study in progress" : "Verified implementation"}
              aspectRatio="16/9"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}

          {/* Hover Overlay Light Glow */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/media:opacity-100 transition-opacity duration-300" />
        </Link>

        {/* Category & Status Pill Bar */}
        <div className="flex flex-wrap items-center justify-between gap-1.5 sm:gap-2 pt-0.5">
          <span className="inline-flex items-center px-2 py-0.5 sm:px-2.5 sm:py-0.5 rounded-full text-[9px] sm:text-[10px] font-extrabold tracking-wider uppercase bg-[rgba(0,110,245,0.08)] text-[#006EF5] border border-[rgba(0,110,245,0.20)]">
            {project.category}
          </span>

          {isComingSoon ? (
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded-full text-[8px] sm:text-[9px] font-sans font-bold tracking-wider uppercase bg-amber-500/10 text-amber-700 border border-amber-500/30">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
              In Progress
            </span>
          ) : (
            project.featured && (
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded-full text-[8px] sm:text-[9px] font-sans font-bold tracking-wider uppercase bg-emerald-500/10 text-emerald-700 border border-emerald-500/30">
                <CheckCircle2 className="h-2.5 w-2.5 text-emerald-600" />
                Featured
              </span>
            )
          )}
        </div>

        {/* Title & Description */}
        <div>
          <h3 className="font-heading font-extrabold text-base sm:text-xl text-[#0B132B] group-hover:text-[#006EF5] transition-colors leading-tight sm:leading-snug tracking-tight">
            <Link href={`/work/${project.slug}`}>
              {project.title}
            </Link>
          </h3>
          <p className="mt-1 sm:mt-1.5 text-[11px] sm:text-sm text-[#3A4B6E] leading-snug sm:leading-relaxed line-clamp-2 font-medium">
            {project.summary}
          </p>
        </div>

        {/* Tech Stack Pills */}
        {project.techStack && (
          <div className="pt-2 sm:pt-2.5 border-t border-[rgba(0,110,245,0.12)] flex flex-wrap gap-1 sm:gap-1.5">
            {project.techStack.split(",").slice(0, 3).map((tech) => (
              <span
                key={tech.trim()}
                className="px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded-md bg-white/80 border border-black/[0.06] text-[9px] sm:text-[10px] font-sans font-medium text-[#475569] shadow-2xs"
              >
                {tech.trim()}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="relative z-10 mt-3 sm:mt-4 pt-2.5 sm:pt-3.5 border-t border-[rgba(0,110,245,0.14)] flex items-center justify-between gap-2 sm:gap-3">
        <Link
          href={`/work/${project.slug}`}
          className="group/link inline-flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-bold text-[#006EF5] hover:text-[#003FC5] transition-colors"
        >
          <span>{isComingSoon ? "View Preview" : "Case Study"}</span>
          <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform group-hover/link:translate-x-1" aria-hidden="true" />
        </Link>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-sans font-bold text-[#3A4B6E] hover:text-[#006EF5] bg-white/90 hover:bg-white px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border border-[rgba(0,110,245,0.20)] shadow-2xs transition-colors"
          >
            <span>Live Site</span>
            <ExternalLink className="h-2.5 w-2.5 sm:h-3 sm:w-3" aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}
