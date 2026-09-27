import React from "react";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { PricingPackage } from "@/types";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  pkg: PricingPackage;
  className?: string;
}

export function PricingCard({ pkg, className }: PricingCardProps) {
  const isRecommended = pkg.isRecommended;

  return (
    <Card
      as="article"
      variant="surface"
      size="md"
      className={cn(
        "relative flex flex-col justify-between hover:border-primary/60 hover:-translate-y-[3px] transition-all duration-200 motion-reduce:transition-none motion-reduce:transform-none",
        isRecommended && "border-primary ring-2 ring-primary/20 shadow-md",
        className
      )}
    >
      <div className="flex flex-col gap-6">
        {/* Header */}
        <div>
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              {pkg.eyebrow}
            </span>
            {isRecommended && (
              <Badge variant="highlight">
                Recommended for growing businesses
              </Badge>
            )}
          </div>

          <h3 className="mt-2 text-2xl font-bold text-text">{pkg.name}</h3>
          <p className="mt-2 text-sm text-muted leading-relaxed">
            {pkg.description}
          </p>
        </div>

        {/* Best For Section */}
        {pkg.bestFor && pkg.bestFor.length > 0 && (
          <div className="pt-4 border-t border-border/60">
            <p className="text-xs font-bold uppercase tracking-wider text-text mb-2">
              Best for:
            </p>
            <ul className="flex flex-col gap-2 text-xs text-muted">
              {pkg.bestFor.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Included Deliverables */}
        <div className="pt-4 border-t border-border/60">
          <p className="text-xs font-bold uppercase tracking-wider text-text mb-3">
            What is included:
          </p>
          <ul className="flex flex-col gap-2.5 text-sm text-text">
            {pkg.includes.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Note */}
        {pkg.note && (
          <p className="text-xs italic text-muted pt-4 border-t border-border/40">
            {pkg.note}
          </p>
        )}
      </div>

      {/* CTA Button */}
      <div className="mt-8 pt-6 border-t border-border">
        <Button
          href="/contact"
          variant={isRecommended ? "primary" : "secondary"}
          size="md"
          className="w-full text-center"
        >
          {pkg.ctaLabel}
        </Button>
      </div>
    </Card>
  );
}
