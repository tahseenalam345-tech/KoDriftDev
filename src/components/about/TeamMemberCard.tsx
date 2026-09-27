import React from "react";
import { TeamMember } from "@/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import Image from "next/image";

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

  const memberAlt =
    member.name === "Tahseen"
      ? "Tahseen, Team Lead and Developer at KoDriftDev"
      : member.name === "Bisma"
      ? "Bisma, Lead Generation and Outreach at KoDriftDev"
      : member.name === "Areeba"
      ? "Areeba, Client Communication and Content at KoDriftDev"
      : `${member.name}, ${member.role} at KoDriftDev`;

  // Role-specific visual accent
  const isDev = member.role.toLowerCase().includes("developer") || member.role.toLowerCase().includes("lead");
  const isOutreach = member.role.toLowerCase().includes("outreach") || member.role.toLowerCase().includes("lead generation");

  const accentColor = isDev
    ? "border-primary/40 text-primary"
    : isOutreach
    ? "border-accent/40 text-accent"
    : "border-highlight/60 text-[#9E8138]";

  return (
    <Card
      as="article"
      variant="surface"
      size="md"
      className="group flex flex-col justify-between hover:border-primary/50 transition-all duration-200 border-border/90 bg-[#FFFEFC]"
    >
      <div className="flex flex-col gap-5">
        {/* Team Photo or Intentional Branded Monogram Fallback */}
        <div className="relative aspect-[4/5] sm:aspect-square w-full rounded-[6px] border border-border/80 bg-[#FAF8F5] overflow-hidden select-none shadow-2xs">
          {member.image ? (
            <div className="relative h-full w-full">
              <Image
                src={member.image}
                alt={memberAlt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.015]"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-between p-5 h-full w-full">
              {/* Subtle architectural dot grid */}
              <div className="pointer-events-none absolute inset-0 pattern-dot-grid opacity-5" />

              {/* Top Frame Label */}
              <div className="relative z-10 w-full flex items-center justify-between text-left">
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted font-bold">
                  Team Member
                </span>
                <span className="font-mono text-[10px] text-muted tracking-wider uppercase bg-surface/90 border border-border px-2 py-0.5 rounded">
                  Photo pending
                </span>
              </div>

              {/* Center Monogram Initials */}
              <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                <div className={`flex h-20 w-20 items-center justify-center rounded-full bg-surface border-2 ${accentColor} shadow-xs`}>
                  <span className="font-heading text-3xl font-extrabold tracking-tight">
                    {initial}
                  </span>
                </div>
              </div>

              {/* Bottom Frame Role Tag */}
              <div className="relative z-10 w-full pt-2 border-t border-border/60 text-center">
                <span className="text-xs font-mono font-semibold text-muted">
                  {member.name}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Member Info */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-primary font-heading">
              {member.name}
            </h3>
            <Badge variant="outline" className="text-[11px]">
              {isDev ? "Development" : isOutreach ? "Discovery" : "Client Success"}
            </Badge>
          </div>
          <p className="text-sm font-semibold text-accent font-body">
            {member.role}
          </p>
          <p className="text-sm text-muted leading-relaxed pt-2">
            {member.shortBio}
          </p>
        </div>
      </div>

      {/* Social / profile links if present */}
      {(member.github || member.linkedin) && (
        <div className="mt-6 pt-4 border-t border-border/80 flex items-center gap-3">
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-muted hover:text-primary transition-colors bg-background px-3 py-1.5 rounded-[6px] border border-border"
              aria-label={`${member.name}'s GitHub Profile`}
            >
              <GithubIcon className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          )}
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-muted hover:text-primary transition-colors bg-background px-3 py-1.5 rounded-[6px] border border-border"
              aria-label={`${member.name}'s LinkedIn Profile`}
            >
              <LinkedinIcon className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
          )}
        </div>
      )}
    </Card>
  );
}
