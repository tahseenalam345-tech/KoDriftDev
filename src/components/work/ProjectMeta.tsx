import React from "react";
import { Project } from "@/types";
import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/Card";

interface ProjectMetaProps {
  project: Project;
}

export function ProjectMeta({ project }: ProjectMetaProps) {
  return (
    <Card variant="surface" size="md" className="space-y-6">
      <h3 className="text-base font-bold uppercase tracking-wider text-text pb-2 border-b border-border">
        Project Details
      </h3>

      <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 text-sm">
        {project.clientName && (
          <div>
            <dt className="text-xs font-semibold text-muted uppercase">Client</dt>
            <dd className="mt-1 font-medium text-text">{project.clientName}</dd>
          </div>
        )}

        {project.year && (
          <div>
            <dt className="text-xs font-semibold text-muted uppercase">Year</dt>
            <dd className="mt-1 font-medium text-text">{project.year}</dd>
          </div>
        )}

        <div>
          <dt className="text-xs font-semibold text-muted uppercase">Category</dt>
          <dd className="mt-1 font-medium text-text">{project.category}</dd>
        </div>

        <div>
          <dt className="text-xs font-semibold text-muted uppercase">Role</dt>
          <dd className="mt-1 font-medium text-text">{project.role}</dd>
        </div>

        <div>
          <dt className="text-xs font-semibold text-muted uppercase">Tech Stack</dt>
          <dd className="mt-1 font-medium text-text">{project.techStack}</dd>
        </div>

        {project.servicesProvided && project.servicesProvided.length > 0 && (
          <div>
            <dt className="text-xs font-semibold text-muted uppercase">
              Services Delivered
            </dt>
            <dd className="mt-1 flex flex-wrap gap-1.5">
              {project.servicesProvided.map((service) => (
                <span
                  key={service}
                  className="rounded-[6px] bg-background px-2.5 py-0.5 text-xs text-text border border-border"
                >
                  {service}
                </span>
              ))}
            </dd>
          </div>
        )}

        {project.liveUrl && (
          <div className="pt-2">
            <dt className="sr-only">Live Site</dt>
            <dd>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-accent hover:text-accent-hover text-sm underline-offset-4 hover:underline"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </dd>
          </div>
        )}
      </dl>
    </Card>
  );
}
