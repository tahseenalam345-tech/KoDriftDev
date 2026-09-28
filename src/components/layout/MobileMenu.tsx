"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Mail, ArrowRight } from "lucide-react";
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
          {/* ── 1. Dimmed Backdrop covering the left side (click to close) ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/45 backdrop-blur-xs md:hidden"
            aria-hidden="true"
          />

          {/* ── 2. Side Drawer sliding in from right covering ~75-80% of screen ── */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-50 flex flex-col w-[78%] max-w-[320px] md:hidden shadow-[-16px_0_45px_rgba(0,18,60,0.18)]"
            style={{
              background: "rgba(246, 248, 252, 0.96)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderLeft: "1px solid rgba(255, 255, 255, 0.85)",
            }}
          >
            {/* Top Bar with Brand + Close Cross Button */}
            <div
              className="relative z-10 flex h-[62px] items-center justify-between px-4 sm:px-5 shrink-0"
              style={{ borderBottom: "1px solid var(--line)" }}
            >
              <Link
                href="/"
                onClick={onClose}
                className="flex items-center gap-2 font-heading font-bold text-base tracking-tight"
                style={{ color: "var(--ink)" }}
              >
                <div
                  className="relative flex h-[28px] w-[28px] items-center justify-center rounded-lg overflow-hidden shrink-0 shadow-sm"
                  style={{
                    background: "#04070A",
                    border: "1px solid rgba(255,255,255,0.16)",
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
                  KoDrift<span style={{ color: "var(--brand-blue)" }}>Dev</span>
                </span>
              </Link>

              {/* Close (Cross) button */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close navigation menu"
                className="flex h-9 w-9 items-center justify-center rounded-full border transition-all cursor-pointer hover:bg-black/5 active:scale-95"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(16,40,39,0.14)",
                  boxShadow: "0 2px 6px rgba(16,40,39,0.06)",
                  color: "var(--ink)",
                }}
              >
                <X className="h-4.5 w-4.5" aria-hidden="true" />
              </button>
            </div>

            {/* Nav list */}
            <div className="relative z-10 flex flex-col flex-1 overflow-y-auto p-4 sm:p-5 gap-5">
              <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
                {navItems.map((item) => {
                  const isActive =
                    currentPath === item.href ||
                    (item.href !== "/" && currentPath.startsWith(item.href));

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-[15px] font-semibold transition-all duration-[150ms]"
                      style={
                        isActive
                          ? {
                              background: "rgba(0, 110, 245, 0.10)",
                              border: "1px solid rgba(0, 110, 245, 0.22)",
                              color: "var(--brand-blue)",
                              fontWeight: 700,
                            }
                          : {
                              background: "transparent",
                              border: "1px solid transparent",
                              color: "var(--ink)",
                            }
                      }
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-blue)]" />
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* Bottom Actions & Contacts */}
              <div
                className="mt-auto pt-4 space-y-3 shrink-0"
                style={{ borderTop: "1px solid var(--line)" }}
              >
                <div className="space-y-2">
                  <a
                    href={siteConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium transition-colors hover:bg-black/5"
                    style={{
                      background: "rgba(255,255,255,0.7)",
                      border: "1px solid rgba(16,40,39,0.08)",
                      color: "var(--ink)",
                    }}
                  >
                    <MessageCircle className="h-3.5 w-3.5 shrink-0 text-[#25D366]" aria-hidden="true" />
                    <span className="truncate">WhatsApp: {siteConfig.phoneDisplay}</span>
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium transition-colors hover:bg-black/5"
                    style={{
                      background: "rgba(255,255,255,0.7)",
                      border: "1px solid rgba(16,40,39,0.08)",
                      color: "var(--ink)",
                    }}
                  >
                    <Mail className="h-3.5 w-3.5 shrink-0 text-[#006EF5]" aria-hidden="true" />
                    <span className="truncate">{siteConfig.email}</span>
                  </a>
                </div>

                <Link
                  href={primaryCta.href}
                  onClick={onClose}
                  className="btn-pill-dark lighter-button default w-full justify-center text-xs py-2.5 px-4 font-bold flex items-center gap-2"
                >
                  <span>{primaryCta.label}</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
