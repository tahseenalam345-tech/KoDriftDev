import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/content/site";
import { socialLinks } from "@/content/social";
import { services } from "@/content/services";

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
    <footer className="w-full bg-[#0B211F] text-[#FCFBF7] border-t border-[#123634] mt-auto">
      <Container className="py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col gap-4 max-w-sm">
            <Link
              href="/"
              className="flex items-center gap-2.5 font-heading text-2xl font-bold tracking-tight text-[#FCFBF7]"
              aria-label="KoDriftDev Homepage"
            >
              <div
                className="relative flex h-9 w-9 items-center justify-center rounded-lg overflow-hidden shrink-0 shadow-xs"
                style={{
                  background: "#04070A",
                  border: "1px solid rgba(255,255,255,0.15)",
                  boxShadow: "0 0 14px rgba(45,140,255,0.22)",
                }}
              >
                <Image
                  src="/images/logo/logo.png"
                  alt="KoDriftDev Logo"
                  width={36}
                  height={36}
                  className="object-cover w-full h-full"
                />
              </div>
              <span>
                KoDrift<span style={{ color: "var(--brand-blue)" }}>Dev</span>
              </span>
            </Link>
            <p className="text-sm text-[#94A09C] leading-relaxed">
              {siteConfig.shortDescription}
            </p>
            <p className="text-xs text-[#94A09C]">
              Based in {siteConfig.location}. Building practical websites, applications, and business software.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-mono font-bold text-[#FFFEFC] uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-[#A6AEA8]">
              {mainLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#FFFEFC] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-mono font-bold text-[#FFFEFC] uppercase tracking-wider">
              Services
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-[#A6AEA8]">
              {featuredServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-[#FFFEFC] transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/services"
                  className="font-semibold text-accent hover:text-accent-hover transition-colors"
                >
                  View all 10 services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-mono font-bold text-[#FFFEFC] uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex flex-col gap-2 text-sm text-[#A6AEA8]">
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-[#FFFEFC] transition-colors"
              >
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFFEFC] transition-colors"
              >
                WhatsApp: {siteConfig.phoneDisplay}
              </a>
              <span className="text-xs text-[#A6AEA8]/80">{siteConfig.location}</span>
            </div>

            <div className="mt-3 flex flex-wrap gap-3 text-xs font-medium text-[#A6AEA8]">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFFEFC] transition-colors"
              >
                GitHub
              </a>
              <a
                href={socialLinks.x}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFFEFC] transition-colors"
              >
                X (Twitter)
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFFEFC] transition-colors"
              >
                Instagram
              </a>
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFFEFC] transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-[#183B3A] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A6AEA8]">
          <p>© {currentYear} KoDriftDev. All rights reserved. Located in Punjab, Pakistan.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#FFFEFC] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#FFFEFC] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
