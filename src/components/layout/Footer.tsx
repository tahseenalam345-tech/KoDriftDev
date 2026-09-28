"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Mail,
  MessageCircle,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/content/site";
import { socialLinks } from "@/content/social";
import { services } from "@/content/services";

function GithubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function XIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TikTokIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68a6.34 6.34 0 0 0 10.86 4.47A6.29 6.29 0 0 0 15.8 15.7V8.5a8.27 8.27 0 0 0 4.79 1.5V6.7a4.91 4.91 0 0 1-1-.01z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Navigation links
  const mainLinks = [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "Process", href: "/process" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  // Primary services subset for quick links
  const featuredServices = services.slice(0, 5);

  return (
    <footer className="relative w-full overflow-hidden mt-auto border-t border-[rgba(0,110,245,0.22)] bg-[#040914] text-[#E2E8F0]">
      {/* Top Ambient Glow linking seamlessly from section above */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[850px] h-[220px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0, 110, 245, 0.22) 0%, rgba(44, 129, 250, 0.10) 45%, transparent 75%)",
          filter: "blur(90px)",
        }}
        aria-hidden="true"
      />

      {/* Subtle Matrix Dot Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(44, 129, 250, 0.20) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 pt-16 sm:pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14">
          
          {/* ── COL 1 & 2: Brand, Status, Description (Span 4) ── */}
          <div className="lg:col-span-4 flex flex-col gap-4 max-w-sm">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 font-heading text-2xl font-extrabold tracking-tight text-white select-none"
              aria-label="KoDriftDev Homepage"
            >
              <div
                className="relative flex h-10 w-10 items-center justify-center rounded-xl overflow-hidden shrink-0 shadow-[0_0_20px_rgba(0,110,245,0.35)] transition-transform duration-300 group-hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #0A1931 0%, #030812 100%)",
                  border: "1.5px solid rgba(44,129,250,0.35)",
                }}
              >
                <Image
                  src="/images/logo/logo.png"
                  alt="KoDriftDev Logo"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <span>
                KoDrift<span className="bg-gradient-to-r from-[#2C81FA] to-[#60A5FA] bg-clip-text text-transparent">Dev</span>
              </span>
            </Link>

            {/* Live Availability Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/10 w-fit text-[11px] font-mono text-white/80">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
              </span>
              <span>Available for new projects</span>
            </div>

            <p className="text-sm text-[#94A3B8] leading-relaxed">
              {siteConfig.shortDescription}
            </p>

            <div className="flex items-center gap-2 text-xs text-[#64748B] pt-1">
              <MapPin className="h-3.5 w-3.5 text-[#2C81FA]" />
              <span>Based in {siteConfig.location} • Working worldwide</span>
            </div>
          </div>

          {/* ── COL 3: Quick Navigation (Span 2) ── */}
          <div className="lg:col-span-2 flex flex-col gap-3.5">
            <h3 className="flex items-center gap-1.5 text-xs font-mono font-bold text-white uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-[#006EF5]" />
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-[#94A3B8]">
              {mainLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 hover:text-white hover:translate-x-1 transition-all duration-200"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── COL 4: Core Services (Span 3) ── */}
          <div className="lg:col-span-3 flex flex-col gap-3.5">
            <h3 className="flex items-center gap-1.5 text-xs font-mono font-bold text-white uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2C81FA]" />
              Services
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-[#94A3B8]">
              {featuredServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-white hover:translate-x-1 transition-all duration-200 block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li className="pt-1.5">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#60A5FA] hover:text-[#93C5FD] transition-colors"
                >
                  <span>Explore all services</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* ── COL 5: Direct Connect & Social Media (Span 3) ── */}
          <div className="lg:col-span-3 flex flex-col gap-3.5">
            <h3 className="flex items-center gap-1.5 text-xs font-mono font-bold text-white uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-[#60A5FA]" />
              Connect
            </h3>

            <div className="flex flex-col gap-2.5 text-sm">
              <a
                href={`mailto:${siteConfig.email}`}
                className="group flex items-center gap-2 text-[#94A3B8] hover:text-white transition-colors"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/[0.05] border border-white/10 group-hover:border-[#006EF5]/50 group-hover:bg-[#006EF5]/10 transition-colors">
                  <Mail className="h-3.5 w-3.5 text-[#60A5FA]" />
                </div>
                <span className="truncate">{siteConfig.email}</span>
              </a>

              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-[#94A3B8] hover:text-white transition-colors"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/[0.05] border border-white/10 group-hover:border-[#25D366]/50 group-hover:bg-[#25D366]/10 transition-colors">
                  <MessageCircle className="h-3.5 w-3.5 text-[#25D366]" />
                </div>
                <span>WhatsApp: {siteConfig.phoneDisplay}</span>
              </a>
            </div>

            {/* Social Glass Squircle Buttons */}
            <div className="pt-2">
              <span className="text-[11px] font-mono text-[#64748B] block mb-2 uppercase tracking-wider">
                Follow Us
              </span>
              <div className="flex flex-wrap gap-2">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.05] hover:bg-white/[0.12] text-white/80 hover:text-white border border-white/10 hover:border-white/25 shadow-xs transition-all duration-200 hover:-translate-y-0.5"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>

                <a
                  href={socialLinks.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.05] hover:bg-[#1DA1F2]/20 text-white/80 hover:text-[#1DA1F2] border border-white/10 hover:border-[#1DA1F2]/40 shadow-xs transition-all duration-200 hover:-translate-y-0.5"
                >
                  <XIcon className="h-3.5 w-3.5" />
                </a>

                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.05] hover:bg-[#E1306C]/20 text-white/80 hover:text-[#E1306C] border border-white/10 hover:border-[#E1306C]/40 shadow-xs transition-all duration-200 hover:-translate-y-0.5"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>

                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.05] hover:bg-[#1877F2]/20 text-white/80 hover:text-[#1877F2] border border-white/10 hover:border-[#1877F2]/40 shadow-xs transition-all duration-200 hover:-translate-y-0.5"
                >
                  <FacebookIcon className="h-4 w-4" />
                </a>

                {socialLinks.tiktok && (
                  <a
                    href={socialLinks.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.05] hover:bg-[#00F2FE]/20 text-white/80 hover:text-[#00F2FE] border border-white/10 hover:border-[#00F2FE]/40 shadow-xs transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <TikTokIcon className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar: Copyright & Legal Links ── */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>© {currentYear} KoDriftDev. All rights reserved. Built for reliable digital execution.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20">•</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
