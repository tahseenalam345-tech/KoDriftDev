import React from "react";
import { Project } from "@/types";
import { ExternalLink, Calendar, User, Layers, Briefcase, Cpu, CheckCircle2 } from "lucide-react";

interface ProjectMetaProps {
  project: Project;
}

export function ProjectMeta({ project }: ProjectMetaProps) {
  return (
    <div className="rounded-[22px] bg-white/95 backdrop-blur-xl border border-[rgba(0,110,245,0.20)] shadow-[0_12px_36px_rgba(0,110,245,0.08),inset_0_1px_1px_rgba(255,255,255,1)] p-5 sm:p-7 space-y-5">
      <div className="flex items-center justify-between pb-3 border-b border-[rgba(0,110,245,0.14)]">
        <div>
          <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-[#006EF5]">
            Architecture & Specs
          </span>
          <h3 className="text-base sm:text-lg font-extrabold text-[#0B132B] font-heading">
            Project Overview
          </h3>
        </div>
        <div className="h-2 w-2 rounded-full bg-[#006EF5] animate-pulse" />
      </div>

      <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 text-xs sm:text-sm">
        {project.clientName && (
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[rgba(0,110,245,0.08)] text-[#006EF5]">
              <User className="h-4 w-4" />
            </div>
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">Client</dt>
              <dd className="mt-0.5 font-bold text-[#0B132B]">{project.clientName}</dd>
            </div>
          </div>
        )}

        {project.year && (
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[rgba(0,110,245,0.08)] text-[#006EF5]">
              <Calendar className="h-4 w-4" />
            </div>
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">Delivery Year</dt>
              <dd className="mt-0.5 font-bold text-[#0B132B]">{project.year}</dd>
            </div>
          </div>
        )}

        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[rgba(0,110,245,0.08)] text-[#006EF5]">
            <Layers className="h-4 w-4" />
          </div>
          <div>
            <dt className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">Category</dt>
            <dd className="mt-0.5 font-bold text-[#0B132B]">{project.category}</dd>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[rgba(0,110,245,0.08)] text-[#006EF5]">
            <Briefcase className="h-4 w-4" />
          </div>
          <div>
            <dt className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">Our Role</dt>
            <dd className="mt-0.5 font-medium text-[#2C3E5A]">{project.role}</dd>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[rgba(0,110,245,0.08)] text-[#006EF5]">
            <Cpu className="h-4 w-4" />
          </div>
          <div className="flex-1">
            <dt className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">Tech Stack</dt>
            <dd className="mt-1.5 flex flex-wrap gap-1.5">
              {project.techStack.split(",").map((tech) => (
                <span
                  key={tech.trim()}
                  className="rounded-md bg-white border border-[rgba(0,110,245,0.18)] px-2 py-0.5 text-[11px] font-mono font-medium text-[#1E293B] shadow-2xs"
                >
                  {tech.trim()}
                </span>
              ))}
            </dd>
          </div>
        </div>

        {project.servicesProvided && project.servicesProvided.length > 0 && (
          <div className="flex items-start gap-3 pt-1">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600">
              <CheckCircle2 className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <dt className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
                Services Delivered
              </dt>
              <dd className="mt-1.5 flex flex-wrap gap-1.5">
                {project.servicesProvided.map((service) => (
                  <span
                    key={service}
                    className="rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 px-2.5 py-0.5 text-[11px] font-semibold"
                  >
                    {service}
                  </span>
                ))}
              </dd>
            </div>
          </div>
        )}

        {project.liveUrl && (
          <div className="pt-3 border-t border-[rgba(0,110,245,0.14)]">
            <dt className="sr-only">Live Platform</dt>
            <dd>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#003FC5] to-[#006EF5] shadow-[0_4px_16px_rgba(0,110,245,0.30)] hover:shadow-[0_6px_22px_rgba(0,110,245,0.45)] hover:scale-[1.02] active:scale-95 transition-all duration-200"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </dd>
          </div>
        )}
      </dl>
    </div>
  );
}
