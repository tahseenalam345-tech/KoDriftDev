import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "highlight" | "outline" | "muted";
  children: React.ReactNode;
}

const badgeVariants = {
  default: "bg-primary/10 text-primary border-primary/20",
  accent: "bg-accent/10 text-accent border-accent/20",
  highlight: "bg-highlight/15 text-primary border-highlight/30",
  outline: "border border-border text-muted bg-surface",
  muted: "bg-border/60 text-muted border-transparent",
};

export function Badge({
  variant = "default",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border transition-colors",
        badgeVariants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
