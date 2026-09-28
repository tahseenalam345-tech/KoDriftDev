import React from "react";
import { Mail, MessageCircle, MapPin, ArrowUpRight, ShieldCheck, Clock, UserCheck } from "lucide-react";
import { siteConfig } from "@/content/site";
import { socialLinks } from "@/content/social";
import { Card } from "@/components/ui/Card";

export function ContactDetails() {
  return (
    <div className="space-y-6">
      {/* Direct Contact Card */}
      <Card variant="surface" size="md" className="space-y-4 sm:space-y-6 bg-[#FFFEFC] p-4 sm:p-6 rounded-2xl sm:rounded-[6px]">
        <div>
          <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-accent">
            Direct Reach
          </span>
          <h2 className="text-lg sm:text-2xl font-bold text-primary font-heading mt-1">
            Talk to Our Team
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-muted">
            Reach our team directly for questions, partnerships, or immediate consultations.
          </p>
        </div>

        {/* WhatsApp & Email */}
        <div className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
          {/* WhatsApp Emphasis */}
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-3 sm:gap-3.5 p-3 sm:p-4 rounded-xl sm:rounded-[6px] bg-[#FAF8F5] hover:bg-[#F4F1EA] border border-primary/30 hover:border-accent transition-all duration-[180ms]"
          >
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg sm:rounded-[4px] bg-accent text-[#FCFBF7] shadow-2xs">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1 font-bold text-primary group-hover:text-accent font-heading">
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
              <p className="text-xs text-muted mt-0.5">{siteConfig.phoneDisplay}</p>
              <p className="text-[11px] text-accent font-mono mt-1 font-semibold">Fastest for quick enquiries</p>
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${siteConfig.email}`}
            className="group flex items-start gap-3 sm:gap-3.5 p-3 sm:p-3.5 rounded-xl sm:rounded-[6px] bg-surface hover:bg-[#F4F1EA] border border-border transition-colors duration-[180ms]"
          >
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg sm:rounded-[4px] bg-primary/10 text-primary group-hover:bg-primary group-hover:text-[#FCFBF7] transition-colors">
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1 font-semibold text-text group-hover:text-primary">
                <span>Email Enquiries</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
              <p className="text-muted text-xs mt-0.5">{siteConfig.email}</p>
            </div>
          </a>

          {/* Location */}
          <div className="flex items-start gap-3 sm:gap-3.5 p-3 sm:p-3.5 rounded-xl sm:rounded-[6px] bg-surface border border-border">
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg sm:rounded-[4px] bg-border/60 text-muted">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div>
              <p className="font-semibold text-text text-xs sm:text-sm">Base Location</p>
              <p className="text-muted text-[11px] sm:text-xs mt-0.5">{siteConfig.location} · Serving clients locally and worldwide</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="pt-4 border-t border-border/80">
          <p className="text-xs font-mono font-bold uppercase tracking-wider text-muted mb-2.5">
            Connect Online
          </p>
          <div className="flex flex-wrap gap-2 text-xs font-semibold text-primary">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background px-3 py-1.5 rounded-[6px] border border-border hover:border-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href={socialLinks.x}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background px-3 py-1.5 rounded-[6px] border border-border hover:border-primary transition-colors"
            >
              X (Twitter)
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background px-3 py-1.5 rounded-[6px] border border-border hover:border-primary transition-colors"
            >
              Instagram
            </a>
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background px-3 py-1.5 rounded-[6px] border border-border hover:border-primary transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </Card>

      {/* Process Reassurance Card */}
      <Card variant="surface" size="md" className="space-y-3 sm:space-y-3.5 bg-[#FAF8F5] border-border/90 p-3.5 sm:p-6 rounded-2xl sm:rounded-[6px]">
        <h3 className="text-xs sm:text-sm font-bold text-primary font-heading">
          What to Expect When You Contact Us
        </h3>
        <div className="space-y-2 sm:space-y-2.5 text-[11px] sm:text-xs text-muted">
          <div className="flex items-start gap-2.5">
            <UserCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary shrink-0 mt-0.5" />
            <span>Direct conversation with builders and lead developers, not commission salespeople.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-accent shrink-0 mt-0.5" />
            <span>Enquiries are typically acknowledged and reviewed within 24 hours.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary shrink-0 mt-0.5" />
            <span>No hard-selling or forced packages. Transparent recommendation tailored to your needs.</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
