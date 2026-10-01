"use client";

import React, { useState } from "react";
import { siteConfig } from "@/content/site";
import { Sparkles, Send, CheckCircle2, MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";

const PROJECT_CATEGORIES = [
  "Web Platform / Store",
  "Mobile App (Flutter / React Native)",
  "SaaS & Internal Ops",
  "AI & Automation Pipelines",
  "Architecture Audit / Fix",
];

const BUDGET_TIERS = [
  "PKR 15,000 – 30,000",
  "PKR 30,000 – 55,000",
  "PKR 55,000 – 90,000",
  "PKR 90,000+ / Custom",
];

export function ContactFormPlaceholder() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Web Platform / Store");
  const [selectedBudget, setSelectedBudget] = useState<string>("PKR 30,000 – 55,000");
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [details, setDetails] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Generate WhatsApp prefilled message
  const whatsappMessage = encodeURIComponent(
    `Hello Kodrift Team! I would like to enquire about a project:\n\n*Name:* ${fullName || "Client"}\n*Project Type:* ${selectedCategory}\n*Budget Tier:* ${selectedBudget}\n*Email:* ${email || "Not specified"}\n*Phone:* ${phone || "Not specified"}\n*Scope Details:* ${details || "Ready to discuss details."}`
  );
  const whatsappUrl = `https://wa.me/${siteConfig.phoneRaw}?text=${whatsappMessage}`;

  return (
    <div className="rounded-[24px] sm:rounded-[30px] p-6 sm:p-10 bg-white/95 backdrop-blur-xl border border-[rgba(0,110,245,0.22)] shadow-[0_16px_40px_rgba(0,110,245,0.08),inset_0_1px_1px_rgba(255,255,255,1)] space-y-6">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(0,110,245,0.08)] border border-[rgba(0,110,245,0.20)] text-[#006EF5] text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Project Scoping & Proposal</span>
        </div>
        <h2 className="text-xl sm:text-3xl font-extrabold text-[#0B132B] font-heading tracking-tight">
          Request an Itemized Estimate
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-[#475569] font-medium leading-relaxed">
          Tell us what you want to build or what operations need fixing. We will review your requirements and reply with a milestone roadmap.
        </p>
      </div>

      {submitted ? (
        <div className="rounded-[22px] bg-gradient-to-br from-blue-500/[0.08] via-emerald-500/[0.04] to-white border border-[rgba(0,110,245,0.25)] p-6 sm:p-8 text-center space-y-4 shadow-sm animate-in fade-in duration-300">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/30">
            <CheckCircle2 className="h-8 w-8" />
          </div>

          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-extrabold text-[#0B132B] font-heading">
              Enquiry Summary Ready!
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-bold text-[#0B132B]">{fullName || "there"}</span>! Your project scope has been drafted. For the fastest response, send this scope directly to our lead engineers on WhatsApp:
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-500 shadow-[0_4px_16px_rgba(16,185,129,0.30)] hover:shadow-[0_6px_22px_rgba(16,185,129,0.45)] hover:scale-105 active:scale-95 transition-all"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Send via WhatsApp Now</span>
            </a>

            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-[#1E293B] hover:text-[#006EF5] bg-white border border-[rgba(0,110,245,0.20)] shadow-2xs hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <span>Edit Details</span>
            </button>
          </div>

          <div className="pt-3 border-t border-[rgba(0,110,245,0.12)] flex items-center justify-center gap-2 text-[11px] font-sans font-semibold text-[#64748B]">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Strict NDA & 100% Client IP Ownership Protected</span>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 1. Category Chips */}
          <div className="space-y-2">
            <label className="block text-xs font-sans font-extrabold uppercase tracking-wider text-[#0B132B]">
              1. What type of platform are you building?
            </label>
            <div className="flex flex-wrap gap-2">
              {PROJECT_CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isSelected
                        ? "bg-gradient-to-r from-[#003FC5] to-[#006EF5] text-white shadow-[0_3px_12px_rgba(0,110,245,0.25)] scale-[1.02]"
                        : "bg-white text-[#3A4B6E] hover:text-[#0B132B] hover:bg-slate-50 border border-[rgba(0,110,245,0.18)]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Budget Tier Chips */}
          <div className="space-y-2">
            <label className="block text-xs font-sans font-extrabold uppercase tracking-wider text-[#0B132B]">
              2. Target investment range
            </label>
            <div className="flex flex-wrap gap-2">
              {BUDGET_TIERS.map((tier) => {
                const isSelected = selectedBudget === tier;
                return (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => setSelectedBudget(tier)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[rgba(0,110,245,0.12)] text-[#006EF5] border-2 border-[#006EF5] font-bold"
                        : "bg-white text-[#475569] hover:text-[#0B132B] border border-[rgba(0,110,245,0.18)]"
                    }`}
                  >
                    {tier}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Input Details */}
          <div className="space-y-4 pt-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs font-sans font-bold uppercase tracking-wider text-[#64748B] mb-1.5"
                >
                  Full Name *
                </label>
                <input
                  id="fullName"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. John Doe / Ali Khan"
                  className="w-full rounded-xl border border-[rgba(0,110,245,0.20)] bg-white px-4 py-3 text-sm text-[#0B132B] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#006EF5] focus:border-transparent transition-all shadow-2xs"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-sans font-bold uppercase tracking-wider text-[#64748B] mb-1.5"
                >
                  Work Email *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-[rgba(0,110,245,0.20)] bg-white px-4 py-3 text-sm text-[#0B132B] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#006EF5] focus:border-transparent transition-all shadow-2xs"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-sans font-bold uppercase tracking-wider text-[#64748B] mb-1.5"
              >
                WhatsApp / Phone (for fast follow-up)
              </label>
              <input
                id="phone"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+44 ... / +92 ... / +1 ..."
                className="w-full rounded-xl border border-[rgba(0,110,245,0.20)] bg-white px-4 py-3 text-sm text-[#0B132B] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#006EF5] focus:border-transparent transition-all shadow-2xs"
              />
            </div>

            <div>
              <label
                htmlFor="details"
                className="block text-xs font-sans font-bold uppercase tracking-wider text-[#64748B] mb-1.5"
              >
                Tell us about your project & key goals *
              </label>
              <textarea
                id="details"
                required
                rows={4}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="What are you building? Are there existing systems, Figma designs, or operational bottlenecks we should know about?"
                className="w-full rounded-xl border border-[rgba(0,110,245,0.20)] bg-white px-4 py-3 text-sm text-[#0B132B] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#006EF5] focus:border-transparent transition-all shadow-2xs resize-y"
              />
            </div>
          </div>

          {/* Submit CTA */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#003FC5] to-[#006EF5] shadow-[0_4px_16px_rgba(0,110,245,0.35)] hover:shadow-[0_6px_24px_rgba(0,110,245,0.50)] transition-all duration-200 hover:scale-[1.01] active:scale-98 cursor-pointer"
            >
              <span>Submit & Generate Project Proposal</span>
              <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <p className="mt-2 text-center text-[11px] text-[#64748B]">
              No obligation. We review all submissions within 24 hours.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
