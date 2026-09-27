import React from "react";
import Link from "next/link";
import {
  Globe,
  Smartphone,
  Cpu,
  Camera,
  Bot,
  RefreshCw,
  Search,
  Palette,
  Megaphone,
  FileSpreadsheet,
  ArrowRight,
  LucideIcon,
  Check,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  Cpu,
  Camera,
  Bot,
  RefreshCw,
  Search,
  Palette,
  Megaphone,
  FileSpreadsheet,
};

interface ServiceCardProps {
  name: string;
  slug: string;
  category?: string;
  shortDescription: string;
  outcomes?: string[];
  iconName?: string;
  featured?: boolean;
  isFeatureCard?: boolean;
  className?: string;
}

export function ServiceCard({
  name,
  slug,
  category,
  shortDescription,
  outcomes = [],
  iconName = "Globe",
  featured = false,
  isFeatureCard = false,
  className,
}: ServiceCardProps) {
  const IconComponent = iconMap[iconName] || Globe;

  return (
    <Card
      as="article"
      variant="surface"
      size={isFeatureCard ? "lg" : "md"}
      className={cn(
        "group relative flex flex-col justify-between hover:border-primary/60 hover:-translate-y-1 transition-all duration-[220ms] motion-reduce:transition-none motion-reduce:transform-none overflow-hidden",
        isFeatureCard && "border-primary/30 bg-[#FFFEFC]",
        className
      )}
    >
      {/* Subtle architectural CSS pattern for feature cards (no gradients) */}
      {isFeatureCard && (
        <div className="pointer-events-none absolute inset-0 pattern-dot-grid opacity-[0.05]" />
      )}

      <div className="relative z-10 flex flex-col gap-4">
        {/* Header icon and category badge */}
        <div className="flex items-center justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-[5px] bg-primary/10 text-primary group-hover:bg-primary group-hover:text-surface transition-colors duration-[220ms] shadow-2xs">
            <IconComponent className="h-5 w-5" aria-hidden="true" />
          </div>
          {featured && (
            <Badge variant="highlight">Core Service</Badge>
          )}
          {!featured && category && (
            <Badge variant="outline">{category}</Badge>
          )}
        </div>

        {/* Title and Short Description */}
        <div>
          <h3 className={cn("font-bold text-text group-hover:text-primary transition-colors duration-[220ms] font-heading", isFeatureCard ? "text-2xl" : "text-xl")}>
            {name}
          </h3>
          <p className="mt-2 text-sm text-muted leading-relaxed">
            {shortDescription}
          </p>
        </div>

        {/* Max 2 Outcomes */}
        {outcomes.length > 0 && (
          <ul className="mt-2 flex flex-col gap-2 text-xs text-text/90 pt-3 border-t border-border/70 font-body">
            {outcomes.slice(0, 2).map((outcome, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <Check className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                <span className="leading-snug">{outcome}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Explore Service Link */}
      <div className="relative z-10 mt-6 pt-4 border-t border-border/60">
        <Link
          href={`/services/${slug}`}
          className="group/link inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:text-accent transition-colors duration-[220ms]"
        >
          <span>Explore service</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-[220ms] group-hover/link:translate-x-[3px] motion-reduce:transform-none" aria-hidden="true" />
        </Link>
      </div>
    </Card>
  );
}
