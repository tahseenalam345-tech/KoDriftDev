"use client";

import React from "react";
import Image from "next/image";
import { TeamMember } from "@/types";
import { Sparkles, Code2, Globe2, MessageSquare, ArrowUpRight } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  const initial = member.name.charAt(0).toUpperCase();

  const isDev =
    member.role.toLowerCase().includes("developer") ||
    member.role.toLowerCase().includes("lead");
  const isOutreach =
    member.role.toLowerCase().includes("outreach") ||
    member.role.toLowerCase().includes("lead generation");

  // Dynamic theme based on role
  const theme = isDev
    ? {
        badgeBg: "rgba(0, 110, 245, 0.08)",
        badgeText: "#0047BA",
        badgeBorder: "rgba(0, 110, 245, 0.22)",
        roleText: "#006EF5",
        icon: Code2,
        dept: "Engineering Lead",
      }
    : isOutreach
    ? {
        badgeBg: "rgba(16, 185, 129, 0.08)",
        badgeText: "#047857",
        badgeBorder: "rgba(16, 185, 129, 0.22)",
        roleText: "#059669",
        icon: Globe2,
        dept: "Growth & Discovery",
      }
    : {
        badgeBg: "rgba(168, 85, 247, 0.08)",
        badgeText: "#7E22CE",
        badgeBorder: "rgba(168, 85, 247, 0.22)",
        roleText: "#9333EA",
        icon: MessageSquare,
        dept: "Client Communication",
      };

  const DeptIcon = theme.icon;

  return (
    <article
      className="group relative flex flex-col justify-between rounded-[20px] sm:rounded-[32px] border-[1.5px] border-[rgba(0,110,245,0.20)] p-4 sm:p-7 backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#006EF5] select-none overflow-hidden"
      style={{
        background:
          "linear-gradient(145deg, rgba(255, 255, 255, 0.98) 0%, rgba(240, 247, 255, 0.92) 55%, rgba(228, 242, 255, 0.86) 100%)",
        boxShadow:
          "0 10px 30px -10px rgba(0, 110, 245, 0.08), inset 0 1.5px 2px rgba(255, 255, 255, 1)",
      }}
    >
      {/* Specular White Top Edge Glow */}
      <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none" />

      {/* Ambient Radial Hover Light */}
      <div
        className="pointer-events-none absolute -top-16 -right-16 w-44 h-44 rounded-full bg-[#006EF5]/15 blur-2xl group-hover:bg-[#006EF5]/25 transition-all duration-300"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col gap-3.5 sm:gap-5">
        {/* Photo Container */}
        <div className="relative aspect-[4/3.8] sm:aspect-[4/4.2] w-full rounded-[16px] sm:rounded-[22px] border border-[rgba(0,110,245,0.18)] bg-white/90 overflow-hidden shadow-xs">
          {member.image ? (
            <div className="relative h-full w-full">
              <Image
                src={member.image}
                alt={`${member.name} - ${member.role} at KoDriftDev`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
              />
              {/* Subtle glass gradient overlay at bottom of photo */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/60 to-transparent pointer-events-none" />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-4 sm:p-6 h-full w-full bg-gradient-to-br from-white to-[#F0F6FF]">
              <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-white border border-[rgba(0,110,245,0.25)] shadow-[0_4px_16px_rgba(0,110,245,0.15)] group-hover:scale-110 transition-transform duration-300">
                <span className="font-heading text-2xl sm:text-3xl font-extrabold text-[#006EF5]">
                  {initial}
                </span>
              </div>
              <span className="mt-2 sm:mt-3 text-[11px] sm:text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                {member.name}
              </span>
            </div>
          )}

          {/* Department Capsule Floating over Image */}
          <div className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 z-10">
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md shadow-xs border"
              style={{
                backgroundColor: theme.badgeBg,
                color: theme.badgeText,
                borderColor: theme.badgeBorder,
              }}
            >
              <DeptIcon className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
              <span>{theme.dept}</span>
            </span>
          </div>
        </div>

        {/* Member Details */}
        <div className="space-y-1.5 sm:space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg sm:text-2xl font-extrabold font-['Manrope'] text-[#0B132B] tracking-tight group-hover:text-[#006EF5] transition-colors leading-tight">
              {member.name}
            </h3>
            <span className="text-[11px] sm:text-xs font-mono font-bold text-slate-400">
              Direct Contact
            </span>
          </div>

          <p
            className="text-[11px] sm:text-sm font-extrabold uppercase tracking-wider"
            style={{ color: theme.roleText }}
          >
            {member.role}
          </p>

          <p className="text-xs sm:text-[13px] text-[#2C3E5A] font-medium leading-relaxed pt-0.5 sm:pt-1 line-clamp-3 sm:line-clamp-none">
            {member.shortBio}
          </p>
        </div>
      </div>

      {/* Social / Direct Connect Footer */}
      {(member.github || member.linkedin) && (
        <div className="relative z-10 mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-[rgba(0,110,245,0.12)] flex items-center justify-between">
          <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold">
            Profiles
          </span>
          <div className="flex items-center gap-1.5 sm:gap-2">
            {member.github && (
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full bg-white/90 hover:bg-white text-[11px] sm:text-xs font-extrabold text-[#2C3E5A] hover:text-[#006EF5] border border-[rgba(0,110,245,0.18)] shadow-xs transition-all hover:scale-105"
                aria-label={`${member.name}'s GitHub Profile`}
              >
                <GithubIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                <span>GitHub</span>
                <ArrowUpRight className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-slate-400" />
              </a>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full bg-white/90 hover:bg-white text-[11px] sm:text-xs font-extrabold text-[#2C3E5A] hover:text-[#006EF5] border border-[rgba(0,110,245,0.18)] shadow-xs transition-all hover:scale-105"
                aria-label={`${member.name}'s LinkedIn Profile`}
              >
                <LinkedinIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#0A66C2]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-slate-400" />
              </a>
            )}
          </div>
        </div>
      )}
    </article>
  );
}
