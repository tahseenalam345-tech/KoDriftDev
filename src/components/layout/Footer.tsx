"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/content/site";
import { socialLinks } from "@/content/social";

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

export function Footer() {
  const currentYear = new Date().getFullYear();

  const mainLinks = [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "Process", href: "/process" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="relative w-full overflow-hidden mt-auto border-t border-[rgba(0,110,245,0.22)] bg-[#040914] text-[#E2E8F0]">
      {/* Subtle top ambient glow */}
      <div
        className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-[600px] h-[100px] rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, rgba(0, 110, 245, 0.20) 0%, transparent 75%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 py-5 sm:py-7">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3.5 pb-4 border-b border-white/[0.08]">
          {/* Brand & Subtitle */}
          <div className="flex items-center gap-2.5">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 font-heading text-lg font-extrabold tracking-tight text-white select-none"
              aria-label="KoDriftDev Homepage"
            >
              <div
                className="relative flex h-7 w-7 items-center justify-center rounded-lg overflow-hidden shrink-0 shadow-xs"
                style={{
                  background: "linear-gradient(135deg, #0A1931 0%, #030812 100%)",
                  border: "1.5px solid rgba(44,129,250,0.35)",
                }}
              >
                <Image
                  src="/images/logo/logo.png"
                  alt="KoDriftDev Logo"
                  width={28}
                  height={28}
                  className="object-cover w-full h-full"
                />
              </div>
              <span>
                KoDrift<span className="bg-gradient-to-r from-[#2C81FA] to-[#60A5FA] bg-clip-text text-transparent">Dev</span>
              </span>
            </Link>

            <span className="text-white/20 hidden sm:inline">|</span>

            <span className="text-[11px] text-slate-400 hidden sm:inline">
              Digital Studio & Product Engineering
            </span>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs font-semibold text-slate-300">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Icons (Compact) */}
          <div className="flex items-center gap-1.5">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/[0.05] hover:bg-white/[0.12] text-white/80 hover:text-white border border-white/10 transition-colors"
            >
              <GithubIcon className="h-3.5 w-3.5" />
            </a>

            <a
              href={socialLinks.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/[0.05] hover:bg-[#1DA1F2]/20 text-white/80 hover:text-[#1DA1F2] border border-white/10 transition-colors"
            >
              <XIcon className="h-3 w-3" />
            </a>

            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/[0.05] hover:bg-[#E1306C]/20 text-white/80 hover:text-[#E1306C] border border-white/10 transition-colors"
            >
              <InstagramIcon className="h-3.5 w-3.5" />
            </a>

            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/[0.05] hover:bg-[#1877F2]/20 text-white/80 hover:text-[#1877F2] border border-white/10 transition-colors"
            >
              <FacebookIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* ── Bottom Bar: Attribution, WhatsApp, Legal ── */}
        <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#64748B]">
          <p className="text-center sm:text-left">
            Designed & Engineered by <span className="text-slate-200 font-bold">KoDriftDev</span> · Punjab, Pakistan
          </p>

          <div className="flex items-center gap-3">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2C81FA] hover:underline font-semibold"
            >
              {siteConfig.phoneDisplay}
            </a>
            <span className="text-white/20">•</span>
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy
            </Link>
            <span className="text-white/20">•</span>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
