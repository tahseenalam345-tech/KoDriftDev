"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Mail, ArrowRight, ChevronRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/content/site";

interface NavItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  currentPath: string;
  primaryCta: {
    label: string;
    href: string;
  };
}

export function MobileMenu({
  isOpen,
  onClose,
  navItems,
  currentPath,
  primaryCta,
}: MobileMenuProps) {
  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ── 1. Dimmed Translucent Backdrop (No heavy blur for instant 60/120fps opening) ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.16, ease: "linear" }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/65 md:hidden"
            aria-hidden="true"
          />

          {/* ── 2. Hardware-Accelerated Fast Drawer (180ms snappy cubic-bezier) ── */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.19, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 bottom-0 z-50 flex flex-col w-[82%] max-w-[340px] md:hidden overflow-hidden select-none"
            style={{
              willChange: "transform",
              transform: "translateZ(0)",
              background: "rgba(7, 13, 26, 0.98)",
              borderLeft: "1px solid rgba(255, 255, 255, 0.14)",
              boxShadow: "-16px 0 50px rgba(0, 0, 0, 0.75), -2px 0 16px rgba(0, 110, 245, 0.22)",
            }}
          >
            {/* Ambient Radial Glows (Pure gradient alpha stops, no heavy CPU/GPU filter:blur) */}
            <div
              className="pointer-events-none absolute -top-16 -right-16 w-52 h-52 rounded-full opacity-60"
              style={{
                background: "radial-gradient(circle, rgba(0, 110, 245, 0.35) 0%, rgba(0, 110, 245, 0.1) 40%, transparent 70%)",
              }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute bottom-20 -left-20 w-52 h-52 rounded-full opacity-50"
              style={{
                background: "radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, rgba(139, 92, 246, 0.08) 45%, transparent 70%)",
              }}
              aria-hidden="true"
            />

            {/* Top Bar with Brand + Close Button */}
            <div className="relative z-10 flex h-[68px] items-center justify-between px-5 shrink-0 border-b border-white/10">
              <Link
                href="/"
                onClick={onClose}
                className="flex items-center gap-2.5 font-heading font-extrabold text-base tracking-tight text-white group"
              >
                <div
                  className="relative flex h-[32px] w-[32px] items-center justify-center rounded-xl overflow-hidden shrink-0 border border-white/20 shadow-md group-hover:scale-105 transition-transform"
                  style={{
                    background: "#04070A",
                    boxShadow: "0 2px 10px rgba(0, 110, 245, 0.3)",
                  }}
                >
                  <Image
                    src="/images/logo/logo.png"
                    alt="KoDriftDev Logo"
                    width={32}
                    height={32}
                    className="object-cover w-full h-full"
                  />
                </div>
                <span>
                  KoDrift<span className="text-[#006EF5]">Dev</span>
                </span>
              </Link>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close navigation menu"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all cursor-pointer hover:rotate-90 active:scale-90"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            {/* Scrollable Navigation Body */}
            <div className="relative z-10 flex flex-col flex-1 overflow-y-auto px-4 py-5 gap-5">
              {/* Nav links with sleek modern glass effects */}
              <nav className="flex flex-col gap-1.5" aria-label="Mobile navigation">
                {navItems.map((item) => {
                  const isActive =
                    currentPath === item.href ||
                    (item.href !== "/" && currentPath.startsWith(item.href));

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className={`group relative flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                        isActive
                          ? "bg-gradient-to-r from-blue-500/20 via-blue-500/10 to-transparent border border-blue-500/40 text-white shadow-[0_4px_20px_rgba(0,110,245,0.2)] font-bold"
                          : "text-slate-300 hover:text-white hover:bg-white/[0.08] hover:border-white/15 border border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {isActive ? (
                          <span className="w-1.5 h-4.5 rounded-full bg-gradient-to-b from-[#006EF5] to-[#2C81FA] shadow-[0_0_8px_#006EF5]" />
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-500/60 group-hover:bg-blue-400 group-hover:scale-125 transition-all" />
                        )}
                        <span className="tracking-tight text-[15px]">{item.label}</span>
                      </div>

                      <ChevronRight
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isActive
                            ? "text-[#2C81FA] translate-x-0.5"
                            : "text-slate-500 group-hover:text-slate-300 group-hover:translate-x-1"
                        }`}
                      />
                    </Link>
                  );
                })}
              </nav>

              {/* ── Prominent Shifted CTA: Start a Project (Inside Sidebar) ── */}
              <div className="pt-2">
                <Link
                  href={primaryCta.href}
                  onClick={onClose}
                  className="group relative w-full justify-center text-sm py-3.5 px-5 font-bold flex items-center gap-2.5 rounded-2xl text-white bg-gradient-to-r from-[#003FC5] via-[#006EF5] to-[#2C81FA] shadow-[0_8px_25px_rgba(0,110,245,0.45)] hover:shadow-[0_12px_32px_rgba(0,110,245,0.65)] hover:scale-[1.02] active:scale-95 transition-all overflow-hidden"
                >
                  <Sparkles className="h-4 w-4 text-blue-200 animate-pulse" />
                  <span>{primaryCta.label}</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </div>

              {/* Bottom Direct Contacts */}
              <div className="mt-auto pt-4 space-y-2.5 shrink-0 border-t border-white/10">
                <p className="text-[11px] font-sans font-bold tracking-wider uppercase text-slate-400 px-1">
                  Direct Inquiries
                </p>
                <div className="space-y-2">
                  <a
                    href={siteConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-200 hover:text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 transition-all hover:scale-[1.01]"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0 text-[#25D366]" aria-hidden="true" />
                    <span className="truncate">WhatsApp: {siteConfig.phoneDisplay}</span>
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-200 hover:text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 transition-all hover:scale-[1.01]"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-[#2C81FA]" aria-hidden="true" />
                    <span className="truncate">{siteConfig.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;
