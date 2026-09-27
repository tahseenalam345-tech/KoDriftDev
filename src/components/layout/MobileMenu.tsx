import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, MessageCircle, Mail } from "lucide-react";
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
  const shouldReduceMotion = useReducedMotion();

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
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="fixed inset-0 z-50 flex flex-col md:hidden"
          style={{
            background: "rgba(233,232,229,0.95)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
          }}
        >
          {/* Ambient glows */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            <div
              className="absolute -top-20 -left-10 w-64 h-64 rounded-full"
              style={{ background: "var(--blue-light)", filter: "blur(80px)", opacity: 0.22 }}
            />
            <div
              className="absolute -bottom-20 right-0 w-64 h-64 rounded-full"
              style={{ background: "var(--lavender-light)", filter: "blur(80px)", opacity: 0.18 }}
            />
          </div>

          {/* Header */}
          <div
            className="relative z-10 flex h-[68px] items-center justify-between px-5 sm:px-7"
            style={{ borderBottom: "1px solid var(--line)" }}
          >
            <Link
              href="/"
              onClick={onClose}
              className="flex items-center gap-2.5 font-heading text-xl font-bold tracking-tight"
              style={{ color: "var(--ink)" }}
            >
              <div
                className="relative flex h-[34px] w-[34px] items-center justify-center rounded-lg overflow-hidden shrink-0 shadow-sm"
                style={{
                  background: "#04070A",
                  border: "1px solid rgba(255,255,255,0.16)",
                  boxShadow: "0 0 12px rgba(45,140,255,0.20)",
                }}
              >
                <Image
                  src="/images/logo/logo.png"
                  alt="KoDriftDev Logo"
                  width={34}
                  height={34}
                  className="object-cover w-full h-full"
                />
              </div>
              <span>
                KoDrift<span style={{ color: "var(--brand-blue)" }}>Dev</span>
              </span>
            </Link>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2"
              style={{
                background: "rgba(255,255,255,0.46)",
                border: "1px solid rgba(255,255,255,0.65)",
                color: "var(--ink)",
              }}
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          {/* Nav + contact */}
          <div className="relative z-10 flex flex-col flex-1 overflow-y-auto p-5 sm:p-7 gap-6">
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
                    className="rounded-xl px-4 py-3.5 text-lg font-semibold transition-all duration-[150ms]"
                    style={
                      isActive
                        ? {
                            background: "rgba(255,255,255,0.55)",
                            backdropFilter: "blur(10px)",
                            border: "1px solid rgba(255,255,255,0.72)",
                            color: "var(--ink)",
                          }
                        : {
                            background: "transparent",
                            border: "1px solid transparent",
                            color: "var(--text-muted)",
                          }
                    }
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        (e.currentTarget as HTMLAnchorElement).style.color = "var(--ink)";
                        (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.30)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)";
                        (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                      }
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Bottom */}
            <div
              className="mt-auto pt-6 space-y-4"
              style={{ borderTop: "1px solid var(--line)" }}
            >
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {siteConfig.shortDescription}
              </p>

              <div className="space-y-2.5">
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-[150ms]"
                  style={{
                    background: "rgba(255,255,255,0.42)",
                    border: "1px solid rgba(255,255,255,0.65)",
                    color: "var(--ink)",
                  }}
                >
                  <MessageCircle className="h-4 w-4 shrink-0" style={{ color: "var(--brand-blue)" }} aria-hidden="true" />
                  <span>WhatsApp: {siteConfig.phoneDisplay}</span>
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-[150ms]"
                  style={{
                    background: "rgba(255,255,255,0.42)",
                    border: "1px solid rgba(255,255,255,0.65)",
                    color: "var(--ink)",
                  }}
                >
                  <Mail className="h-4 w-4 shrink-0" style={{ color: "var(--teal)" }} aria-hidden="true" />
                  <span>{siteConfig.email}</span>
                </a>
              </div>

              <Link
                href={primaryCta.href}
                onClick={onClose}
                className="btn-primary w-full justify-center"
              >
                {primaryCta.label}
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
