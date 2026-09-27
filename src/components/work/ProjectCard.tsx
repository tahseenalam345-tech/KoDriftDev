import React from "react";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
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

  return (
    <Card
      as="article"
      variant="surface"
      size="md"
      className={cn(
        "group flex flex-col justify-between overflow-hidden hover:border-primary/50 transition-all duration-200 border-border/90",
        className
      )}
    >
      <div className="flex flex-col gap-4">
        {/* Media area with category motif or real image */}
        <div className="overflow-hidden rounded-[5px] border border-border/80 bg-background">
          <PlaceholderMedia
            src={project.imagePaths?.[0]}
            alt={`${project.title} interface preview`}
            label={project.title}
            category={project.category}
            contentType={isComingSoon ? "Prototype Preview" : "Production Platform Preview"}
            sublabel={isComingSoon ? "Case study in progress" : "Verified implementation"}
            aspectRatio="16/9"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Header tags */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
          <Badge variant="outline">{project.category}</Badge>
          {isComingSoon && (
            <Badge variant="muted">Case study in progress</Badge>
          )}
          {!isComingSoon && project.featured && (
            <Badge variant="highlight">Featured System</Badge>
          )}
        </div>

        {/* Content */}
        <div>
          <h3 className="text-xl font-bold text-text group-hover:text-accent transition-colors duration-[180ms] font-heading">
            <Link href={`/work/${project.slug}`}>{project.title}</Link>
          </h3>
          <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-3">
            {project.summary}
          </p>
        </div>

        {/* Tech stack tags */}
        {project.techStack && (
          <div className="text-xs text-muted pt-2 border-t border-border/60 font-body">
            <span className="font-semibold text-text">Tech: </span>
            {project.techStack}
          </div>
        )}
      </div>

      {/* Action Links */}
      <div className="mt-6 pt-4 border-t border-border/80 flex items-center justify-between gap-4">
        <Link
          href={`/work/${project.slug}`}
          className="group/link inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:text-accent transition-colors"
        >
          <span>{isComingSoon ? "View Preview" : "View Case Study"}</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" aria-hidden="true" />
        </Link>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-primary transition-colors bg-background px-2.5 py-1.5 rounded-[6px] border border-border"
          >
            <span>Live Site</span>
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        )}
      </div>
    </Card>
  );
}
