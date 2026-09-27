import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  size?: "md" | "lg";
  variant?: "surface" | "muted" | "primary" | "outline";
  children: React.ReactNode;
}

export function Card({
  as: Component = "div",
  size = "md",
  variant = "surface",
  className,
  children,
  ...props
}: CardProps) {
  const variantStyles = {
    surface: "bg-surface border border-border text-text shadow-2xs",
    muted: "bg-background border border-border text-text",
    primary: "bg-primary text-surface border border-primary-dark",
    outline: "border border-border bg-transparent text-text",
  };

  const radiusStyles = {
    md: "rounded-[6px] p-6 sm:p-7",
    lg: "rounded-[8px] p-6 sm:p-8 lg:p-10",
  };

  return (
    <Component
      className={cn(
        "transition-all duration-200",
        variantStyles[variant],
        radiusStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
