import React from "react";
import {
  ShoppingBag,
  UtensilsCrossed,
  Layers,
  Activity,
  CalendarCheck,
  LayoutGrid,
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export type PlaceholderCategory =
  | "ecommerce"
  | "restaurant"
  | "pharmacy"
  | "energy"
  | "healthcare"
  | "mobile"
  | "general";

interface PlaceholderMediaProps {
  label: string;
  category?: PlaceholderCategory | string;
  contentType?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "3/2" | "auto";
  priority?: boolean;
  className?: string;
  sublabel?: string;
  src?: string | null;
  alt?: string;
  sizes?: string;
  objectFit?: "cover" | "contain";
}

const aspectRatios = {
  "16/9": "aspect-video",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
  "3/2": "aspect-[3/2]",
  auto: "h-full min-h-[240px]",
};

export function PlaceholderMedia({
  label,
  category = "general",
  contentType = "Project Interface Preview",
  aspectRatio = "16/9",
  className,
  sublabel,
  src,
  alt,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  objectFit,
}: PlaceholderMediaProps) {
  const normalizedCategory = category.toLowerCase();

  // If real image source is provided, render optimized Next.js Image
  if (src) {
    const isMobileScreenshot =
      normalizedCategory.includes("restaurant") ||
      normalizedCategory.includes("mobile") ||
      objectFit === "contain";

    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-[6px] border border-border/90 bg-[#FAF8F5] select-none shadow-2xs group/media transition-all duration-[250ms]",
          aspectRatios[aspectRatio],
          className
        )}
      >
        {isMobileScreenshot ? (
          <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4 bg-[#F4F1EA]">
            <div className="relative h-full aspect-[9/19] rounded-[8px] overflow-hidden shadow-2xs border border-primary/20 bg-background">
              <Image
                src={src}
                alt={alt || label}
                fill
                sizes={sizes}
                priority={priority}
                className="object-cover object-top transition-transform duration-[250ms] ease-out group-hover/media:scale-[1.01]"
              />
            </div>
          </div>
        ) : (
          <Image
            src={src}
            alt={alt || label}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover object-top transition-transform duration-[250ms] ease-out group-hover/media:scale-[1.01]"
          />
        )}
      </div>
    );
  }

  // Category-specific motif rendering
  const renderMotif = () => {
    if (normalizedCategory.includes("e-commerce") || normalizedCategory === "ecommerce") {
      return (
        <div className="w-full max-w-[260px] opacity-40 space-y-2 pointer-events-none select-none">
          <div className="flex items-center gap-2 pb-1 border-b border-border/80">
            <ShoppingBag className="h-3.5 w-3.5 text-primary" />
            <div className="h-2 w-20 bg-primary/20 rounded" />
            <div className="ml-auto h-2 w-8 bg-accent/30 rounded" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="h-10 bg-primary/10 rounded-[6px] border border-border/60" />
            <div className="h-10 bg-primary/10 rounded-[6px] border border-border/60" />
          </div>
          <div className="h-2.5 w-3/4 bg-primary/15 rounded" />
        </div>
      );
    }

    if (normalizedCategory.includes("restaurant") || normalizedCategory === "food") {
      return (
        <div className="w-full max-w-[260px] opacity-40 space-y-2 pointer-events-none select-none">
          <div className="flex items-center gap-2 pb-1 border-b border-border/80">
            <UtensilsCrossed className="h-3.5 w-3.5 text-primary" />
            <div className="h-2 w-24 bg-primary/20 rounded" />
          </div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-accent/20 border border-accent/30 shrink-0" />
            <div className="space-y-1 flex-1">
              <div className="h-2 w-24 bg-primary/20 rounded" />
              <div className="h-1.5 w-16 bg-muted/30 rounded" />
            </div>
          </div>
          <div className="h-2 w-full bg-primary/10 rounded" />
        </div>
      );
    }

    if (normalizedCategory.includes("pharmacy") || normalizedCategory.includes("software")) {
      return (
        <div className="w-full max-w-[260px] opacity-40 space-y-1.5 pointer-events-none select-none">
          <div className="flex items-center gap-2 pb-1 border-b border-border/80">
            <Layers className="h-3.5 w-3.5 text-primary" />
            <div className="h-2 w-28 bg-primary/20 rounded" />
          </div>
          <div className="space-y-1">
            <div className="h-3 w-full bg-primary/10 rounded border border-border/50" />
            <div className="h-3 w-full bg-primary/10 rounded border border-border/50" />
            <div className="h-3 w-4/5 bg-primary/10 rounded border border-border/50" />
          </div>
        </div>
      );
    }

    if (normalizedCategory.includes("energy") || normalizedCategory.includes("engineering")) {
      return (
        <div className="w-full max-w-[260px] opacity-40 space-y-2 pointer-events-none select-none">
          <div className="flex items-center gap-2 pb-1 border-b border-border/80">
            <Activity className="h-3.5 w-3.5 text-accent" />
            <div className="h-2 w-24 bg-primary/20 rounded" />
          </div>
          <div className="flex gap-2">
            <div className="h-9 flex-1 bg-primary/10 rounded-[6px] border border-border/60" />
            <div className="h-9 flex-1 bg-primary/10 rounded-[6px] border border-border/60" />
          </div>
          <div className="h-1.5 w-20 bg-muted/30 rounded" />
        </div>
      );
    }

    if (normalizedCategory.includes("health") || normalizedCategory.includes("clinic")) {
      return (
        <div className="w-full max-w-[260px] opacity-40 space-y-2 pointer-events-none select-none">
          <div className="flex items-center gap-2 pb-1 border-b border-border/80">
            <CalendarCheck className="h-3.5 w-3.5 text-primary" />
            <div className="h-2 w-20 bg-primary/20 rounded" />
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            <div className="h-7 bg-primary/10 rounded border border-border/50" />
            <div className="h-7 bg-accent/15 rounded border border-accent/30" />
            <div className="h-7 bg-primary/10 rounded border border-border/50" />
          </div>
        </div>
      );
    }

    if (normalizedCategory.includes("mobile") || normalizedCategory.includes("app")) {
      return (
        <div className="w-24 h-28 opacity-40 rounded-[14px] border-2 border-primary/40 bg-surface/60 p-2 flex flex-col justify-between pointer-events-none select-none shadow-2xs">
          <div className="w-8 h-1 bg-primary/30 rounded-full mx-auto" />
          <div className="space-y-1.5 my-auto">
            <div className="h-2 w-12 bg-primary/20 rounded mx-auto" />
            <div className="h-5 w-full bg-accent/15 rounded border border-accent/30" />
          </div>
          <div className="w-4 h-1 bg-primary/20 rounded-full mx-auto" />
        </div>
      );
    }

    // Default / general web layout wireframe
    return (
      <div className="w-full max-w-[260px] opacity-40 space-y-2 pointer-events-none select-none">
        <div className="flex items-center gap-2 pb-1 border-b border-border/80">
          <LayoutGrid className="h-3.5 w-3.5 text-primary" />
          <div className="h-2 w-24 bg-primary/20 rounded" />
        </div>
        <div className="h-10 bg-primary/10 rounded-[6px] border border-border/60" />
        <div className="flex gap-2">
          <div className="h-2 w-16 bg-primary/15 rounded" />
          <div className="h-2 w-24 bg-muted/20 rounded" />
        </div>
      </div>
    );
  };

  return (
    <div
      role="img"
      aria-label={`${contentType}: ${label}`}
      className={cn(
        "relative flex flex-col items-center justify-between overflow-hidden rounded-[6px] border border-border/90 bg-[#FAF8F5] p-5 sm:p-6 text-center select-none shadow-2xs group/placeholder transition-colors",
        aspectRatios[aspectRatio],
        className
      )}
    >
      {/* Subtle architectural dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(#183B3A 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* Top Header: Content Type & Asset Badge */}
      <div className="relative z-10 w-full flex items-center justify-between text-left">
        <span className="text-[11px] font-bold uppercase tracking-wider text-muted font-body">
          {contentType}
        </span>
        <span className="font-mono text-[10px] text-muted tracking-wider uppercase bg-surface/90 border border-border px-2 py-0.5 rounded shadow-2xs">
          Asset to be added
        </span>
      </div>

      {/* Center Motif */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto py-2">
        {renderMotif()}
      </div>

      {/* Bottom Footer: Project / Service Identifier */}
      <div className="relative z-10 w-full pt-3 border-t border-border/70 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-left">
        <p className="text-xs sm:text-sm font-bold text-primary line-clamp-1 font-heading">
          {label}
        </p>
        {sublabel && (
          <p className="text-[11px] text-muted font-mono tracking-tight shrink-0">
            {sublabel}
          </p>
        )}
      </div>
    </div>
  );
}
