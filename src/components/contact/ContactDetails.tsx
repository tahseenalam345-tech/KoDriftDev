import React from "react";
import { Mail, MessageCircle, MapPin, ArrowUpRight, ShieldCheck, Clock, UserCheck, Sparkles } from "lucide-react";
import { siteConfig } from "@/content/site";
import { socialLinks } from "@/content/social";

export function ContactDetails() {
  return (
    <div className="space-y-6">
      {/* ── Main Direct Contact Card ── */}
      <div className="rounded-[24px] sm:rounded-[30px] p-6 sm:p-8 bg-white/95 backdrop-blur-xl border border-[rgba(0,110,245,0.22)] shadow-[0_16px_40px_rgba(0,110,245,0.08),inset_0_1px_1px_rgba(255,255,255,1)] space-y-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(0,110,245,0.08)] border border-[rgba(0,110,245,0.20)] text-[#006EF5] text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Reach</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B132B] font-heading tracking-tight">
            Talk to Our Team
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-[#475569] font-medium leading-relaxed">
            Reach our lead engineers directly for technical scoping, project estimates, or immediate milestone consultations.
          </p>
        </div>

        {/* Channels */}
        <div className="space-y-3.5 text-xs sm:text-sm">
          {/* WhatsApp Direct Highlight */}
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-3.5 p-4 rounded-2xl bg-gradient-to-br from-emerald-500/[0.08] via-emerald-500/[0.03] to-white border border-emerald-500/30 hover:border-emerald-500/60 shadow-[0_4px_16px_rgba(16,185,129,0.08)] hover:shadow-[0_6px_22px_rgba(16,185,129,0.18)] transition-all duration-200 hover:-translate-y-0.5"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-md">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1.5 font-extrabold text-[#0B132B] group-hover:text-emerald-700 transition-colors">
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-emerald-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <p className="text-xs text-[#475569] font-mono mt-0.5">{siteConfig.phoneDisplay}</p>
              <div className="flex items-center gap-1.5 mt-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[11px] text-emerald-700 font-bold">Fastest for immediate response</span>
              </div>
            </div>
          </a>

          {/* Email Channel */}
          <a
            href={`mailto:${siteConfig.email}`}
            className="group flex items-start gap-3.5 p-4 rounded-2xl bg-white hover:bg-[rgba(0,110,245,0.03)] border border-[rgba(0,110,245,0.18)] hover:border-[rgba(0,110,245,0.40)] shadow-2xs hover:shadow-md transition-all duration-200"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[rgba(0,110,245,0.10)] text-[#006EF5] group-hover:bg-[#006EF5] group-hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1 font-bold text-[#0B132B] group-hover:text-[#006EF5] transition-colors">
                <span>Email Enquiries</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#006EF5]" />
              </div>
              <p className="text-xs text-[#475569] font-mono mt-0.5">{siteConfig.email}</p>
              <p className="text-[11px] text-[#64748B] mt-1">Detailed scopes & architectural RFPs</p>
            </div>
          </a>

          {/* Base Location */}
          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[rgba(0,110,245,0.14)] shadow-2xs">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-[#475569]">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <p className="font-bold text-[#0B132B] text-xs sm:text-sm">Global Operations Hub</p>
              <p className="text-[#475569] text-xs mt-0.5">{siteConfig.location}</p>
              <p className="text-[11px] text-[#006EF5] font-semibold mt-1">Serving clients in UK, US, PK, EU & UAE</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="pt-4 border-t border-[rgba(0,110,245,0.14)]">
          <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#64748B] mb-3">
            Connect Online
          </p>
          <div className="flex flex-wrap gap-2 text-xs font-semibold">
            {[
              { name: "Instagram", url: socialLinks.instagram },
              { name: "Facebook", url: socialLinks.facebook },
              { name: "X (Twitter)", url: socialLinks.x },
              { name: "GitHub", url: socialLinks.github },
              { name: "TikTok", url: socialLinks.tiktok },
            ]
              .filter((s) => Boolean(s.url))
              .map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-slate-50 border border-[rgba(0,110,245,0.20)] text-[#1E293B] hover:text-[#006EF5] shadow-2xs transition-colors"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="h-3 w-3 text-[#94A3B8]" />
                </a>
              ))}
          </div>
        </div>
      </div>

      {/* ── Client Commitment Guarantees Card ── */}
      <div className="rounded-[22px] p-5 sm:p-6 bg-white/80 backdrop-blur-md border border-[rgba(0,110,245,0.16)] shadow-2xs space-y-3.5">
        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#006EF5]">
          Kodrift Delivery Guarantee
        </h4>
        <div className="space-y-2.5 text-xs text-[#2C3E5A]">
          <div className="flex items-center gap-2.5">
            <Clock className="h-4 w-4 text-[#006EF5] shrink-0" />
            <span className="font-medium">Direct reply within 24 hours guaranteed</span>
          </div>
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
            <span className="font-medium">100% intellectual property & code ownership</span>
          </div>
          <div className="flex items-center gap-2.5">
            <UserCheck className="h-4 w-4 text-purple-600 shrink-0" />
            <span className="font-medium">Zero sales reps — speak directly with system engineers</span>
          </div>
        </div>
      </div>
    </div>
  );
}
