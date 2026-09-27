import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  body?: string;
  align?: "left" | "center";
  className?: string;
  headingAs?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  eyebrow,
  heading,
  body,
  align = "left",
  className,
  headingAs: HeadingTag = "h2",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        isCenter ? "items-center text-center mx-auto max-w-3xl" : "items-start max-w-3xl",
        className
      )}
    >
      {eyebrow && (
        <span className="metadata-text text-accent">
          {eyebrow}
        </span>
      )}
      <HeadingTag className={cn(HeadingTag === "h1" ? "hero-headline" : "section-headline")}>
        {heading}
      </HeadingTag>
      {body && (
        <p className="text-base sm:text-lg text-muted leading-relaxed max-w-[620px]">
          {body}
        </p>
      )}
    </div>
  );
}
