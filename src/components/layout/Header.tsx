"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ── Top Announcement Bar ── */}
      <div
        className="relative z-50 flex items-center justify-center w-full overflow-hidden"
        style={{
          background: "linear-gradient(91deg, #003FC5 0%, #006EF5 55%, #2C81FA 100%)",
          boxShadow: "0 0 14px 0 rgba(255, 255, 255, 0.60) inset, 0 12px 40px 0 rgba(0, 63, 197, 0.32)",
          padding: "7px 30px",
        }}
        aria-label="Studio announcement"
      >
        <Link
          href="/contact"
          className="flex items-center gap-[9px] hover:opacity-95 transition-opacity"
        >
          {/* Status halo dot */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            className="shrink-0"
            aria-hidden="true"
          >
            <circle cx="5" cy="5" r="3" fill="white" />
            <circle cx="5" cy="5" r="4" stroke="white" strokeOpacity="0.3" strokeWidth="2" />
          </svg>
          <p
            style={{
              fontSize: "14px",
              fontWeight: 500,
              letterSpacing: "-0.28px",
              color: "#FFFFFF",
              lineHeight: 1.3,
              margin: 0,
            }}
          >
            Have a project in mind? Let’s talk
          </p>
        </Link>
      </div>

      {/* ── Main Header Wrapper (transparent floating header) ── */}
      <header
        className="sticky top-0 z-40 w-full overflow-hidden max-w-full"
        style={{ background: "transparent", border: "none" }}
      >
        {/* Soft top-center ambient glow linking with announcement bar */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div
            className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-full"
            style={{
              width: "620px",
              height: "120px",
              background: "radial-gradient(ellipse at center, rgba(44, 129, 250, 0.28) 0%, rgba(0, 110, 245, 0.15) 50%, transparent 80%)",
              filter: "blur(45px)",
            }}
          />
        </div>

        {/* Contained Header box matching hero canvas bounds */}
        <div
          className="relative mx-auto w-full px-2.5 sm:px-4 md:px-5"
          style={{ maxWidth: "1360px", border: "none" }}
        >
          <div
            className={cn(
              "relative mx-0 sm:mx-4 md:mx-6 lg:mx-8 transition-all duration-[220ms]",
              isScrolled ? "backdrop-blur-md shadow-xs" : ""
            )}
            style={{
              height: "74px",
              background: isScrolled ? "rgba(236, 238, 242, 0.90)" : "transparent",
              border: "none",
              borderLeft: "none",
              borderRight: "none",
              borderTop: "none",
              borderBottom: isScrolled ? "1px solid var(--line)" : "none",
              paddingInline: "clamp(0.35rem, 2vw, 2rem)",
            }}
          >
            <div className="flex items-center justify-between h-full w-full">
              {/* ── Left: Brand (aligned left) ── */}
              <div className="flex items-center justify-start shrink-0">
                <Link
                  href="/"
                  className="flex items-center gap-2 sm:gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-md group"
                  style={{ "--tw-ring-color": "var(--brand-blue)" } as React.CSSProperties}
                  aria-label="KoDriftDev — Homepage"
                >
                  <div
                    className="relative flex h-[32px] w-[32px] sm:h-[34px] sm:w-[34px] items-center justify-center rounded-lg overflow-hidden shrink-0 shadow-sm transition-transform duration-200 group-hover:scale-105"
                    style={{
                      background: "#04070A",
                      border: "1px solid rgba(255,255,255,0.16)",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.25), 0 0 14px rgba(45,140,255,0.22)",
                    }}
                  >
                    <Image
                      src="/images/logo/logo.png"
                      alt="KoDriftDev Logo"
                      width={34}
                      height={34}
                      className="object-cover w-full h-full"
                      priority
                      quality={95}
                    />
                  </div>
                  <span
                    className="font-heading font-bold tracking-tight text-[1.05rem] sm:text-[1.15rem]"
                    style={{ color: "var(--ink)", letterSpacing: "-0.02em" }}
                  >
                    KoDrift<span style={{ color: "var(--brand-blue)" }}>Dev</span>
                  </span>
                </Link>
              </div>

              {/* ── Center: Floating pure white nav pill (exact VistaRapid shape) ── */}
              <nav
                className="hidden md:flex items-center gap-0.5 rounded-full mx-auto"
                style={{
                  width: "auto",
                  maxWidth: "none",
                  padding: "5px 8px",
                  borderRadius: "9999px",
                  background: "#FFFFFF",
                  border: "1px solid rgba(255, 255, 255, 0.95)",
                  boxShadow: "0 4px 20px -2px rgba(16, 40, 39, 0.08), 0 2px 6px -1px rgba(16, 40, 39, 0.04)",
                }}
                aria-label="Main navigation"
              >
                {navLinks.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "text-[13.5px] font-semibold rounded-full transition-all duration-[170ms] focus-visible:outline-none focus-visible:ring-2",
                        isActive
                          ? "text-ink font-bold"
                          : "text-[#35403E] hover:text-ink hover:bg-black/[0.035]"
                      )}
                      style={{
                        padding: "8px 16px",
                        letterSpacing: "-0.01em",
                        ...(isActive
                          ? { background: "rgba(16, 40, 39, 0.055)" }
                          : {}),
                        "--tw-ring-color": "var(--brand-blue)",
                      } as React.CSSProperties}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              {/* ── Right: Rounded pill CTA (desktop) & Mobile Sidebar Trigger pushed right ── */}
              <div className="flex items-center justify-end gap-2 sm:gap-3 ml-auto shrink-0">
                {/* Desktop-only CTA Button: strictly hidden on mobile devices */}
                <div className="hidden md:flex items-center shrink-0">
                  <Link
                    href="/contact"
                    className="btn-pill-dark lighter-button default inline-flex items-center text-xs sm:text-sm py-2 px-3.5 sm:py-2.5 sm:px-5 shrink-0"
                    aria-label="Start a Project"
                  >
                    Start a Project
                  </Link>
                </div>

                {/* Mobile menu trigger with custom modern tech icon */}
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  aria-label="Open navigation menu"
                  className="md:hidden group relative inline-flex items-center justify-center w-10 h-10 rounded-full cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-2 transition-all duration-200 hover:scale-105 active:scale-95"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(0, 110, 245, 0.22)",
                    boxShadow: "0 2px 10px rgba(0, 110, 245, 0.12)",
                    color: "var(--ink)",
                    "--tw-ring-color": "var(--brand-blue)",
                  } as React.CSSProperties}
                >
                  {/* Custom Staggered Modern Menu Icon */}
                  <div className="flex flex-col items-end justify-center gap-1 w-[18px] h-[16px]">
                    <span className="w-full h-[2px] rounded-full bg-[#0B132B] transition-all duration-200 group-hover:w-[13px]" />
                    <span className="w-[13px] h-[2px] rounded-full bg-[#006EF5] transition-all duration-200 group-hover:w-full" />
                    <span className="w-[16px] h-[2px] rounded-full bg-[#0B132B] transition-all duration-200 group-hover:w-[10px]" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={navLinks}
        currentPath={pathname}
        primaryCta={{ label: "Start a Project", href: "/contact" }}
      />
    </>
  );
}
