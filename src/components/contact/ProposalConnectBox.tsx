"use client";

import React, { useState } from "react";
import { MessageSquare, Send, Sparkles, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/content/site";

const SERVICES = [
  "Web Development",
  "Mobile Apps",
  "Custom SaaS",
  "AI Automation",
  "AI Photoshoot",
];

const BUDGET_RANGES = [
  "PKR 15K - 30K",
  "PKR 30K - 55K",
  "PKR 55K - 90K",
  "PKR 90K+",
];

export default function ProposalConnectBox() {
  const [selectedService, setSelectedService] = useState<string>("Web Development");
  const [selectedBudget, setSelectedBudget] = useState<string>("PKR 30K - 55K");
  const [clientName, setClientName] = useState<string>("");
  const [clientPhone, setClientPhone] = useState<string>("");
  const [projectNote, setProjectNote] = useState<string>("");

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = clientName.trim() || "Prospective Client";
    const phone = clientPhone.trim() || "Not provided";
    const note = projectNote.trim() || "Standard consultation requested";

    const message = `*New Project Proposal Request — KoDriftDev*%0A%0A` +
      `*Client Name:* ${name}%0A` +
      `*WhatsApp / Phone:* ${phone}%0A` +
      `*Service Required:* ${selectedService}%0A` +
      `*Target Budget:* ${selectedBudget}%0A` +
      `*Project Summary:* ${note}%0A%0A` +
      `_Sent directly via KoDriftDev Instant Connect Portal_`;

    const cleanNumber = siteConfig.phoneRaw;
    window.open(`https://wa.me/${cleanNumber}?text=${message}`, "_blank");
  };

  return (
    <div
      className="relative rounded-[24px] sm:rounded-[32px] p-4 sm:p-7 border border-white/20 shadow-[0_20px_60px_rgba(0,110,245,0.28)] overflow-hidden"
      style={{
        background: "linear-gradient(160deg, rgba(8, 18, 42, 0.92) 0%, rgba(4, 9, 22, 0.96) 100%)",
        backdropFilter: "blur(24px)",
      }}
    >
      {/* Luminous Core Gradient Orbs */}
      <div
        className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0, 110, 245, 0.35) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-16 w-48 h-48 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(44, 129, 250, 0.25) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 space-y-4">
        {/* Header */}
        <div className="flex items-center gap-2.5 pb-2 border-b border-white/10">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-[#003FC5] to-[#006EF5] text-white shadow-md border border-white/20 shrink-0">
            <Sparkles className="h-4 w-4 text-cyan-200" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-white font-heading">
              Quick Proposal Calculator
            </h3>
            <p className="text-[11px] text-white/60">
              Pick your service & PKR budget — get a proposal in minutes
            </p>
          </div>
        </div>

        <form onSubmit={handleWhatsAppSubmit} className="space-y-3 sm:space-y-3.5">
          {/* 1. Service Selection */}
          <div>
            <label className="text-[11px] font-sans font-bold text-white/80 block mb-1.5 uppercase tracking-wider">
              1. Select Project Type
            </label>
            <div className="flex flex-wrap gap-1.5">
              {SERVICES.map((srv) => {
                const isSelected = selectedService === srv;
                return (
                  <button
                    type="button"
                    key={srv}
                    onClick={() => setSelectedService(srv)}
                    className={`px-2.5 py-1 rounded-xl text-xs font-semibold transition-all duration-150 cursor-pointer ${
                      isSelected
                        ? "bg-[#006EF5] text-white shadow-[0_2px_12px_rgba(0,110,245,0.4)] border border-blue-400/50 scale-[1.02]"
                        : "bg-white/[0.06] hover:bg-white/[0.12] text-white/75 hover:text-white border border-white/10"
                    }`}
                  >
                    {srv}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Target Investment in PKR (Strictly PKR, No Dollars) */}
          <div>
            <label className="text-[11px] font-sans font-bold text-white/80 block mb-1.5 uppercase tracking-wider">
              2. Target Budget Range (PKR)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
              {BUDGET_RANGES.map((b) => {
                const isSelected = selectedBudget === b;
                return (
                  <button
                    type="button"
                    key={b}
                    onClick={() => setSelectedBudget(b)}
                    className={`py-1.5 px-2 rounded-xl text-xs font-semibold text-center transition-all duration-150 cursor-pointer ${
                      isSelected
                        ? "bg-[#006EF5] text-white shadow-[0_2px_12px_rgba(0,110,245,0.4)] border border-blue-400/50 scale-[1.02]"
                        : "bg-white/[0.06] hover:bg-white/[0.12] text-white/75 hover:text-white border border-white/10"
                    }`}
                  >
                    {b}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Client Name & WhatsApp */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-0.5">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                required
                className="w-full px-3 py-2 rounded-xl bg-white/[0.07] hover:bg-white/[0.10] focus:bg-white/[0.12] border border-white/15 text-white placeholder-white/40 text-xs focus:outline-none focus:ring-1 focus:ring-[#006EF5] transition-all"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="WhatsApp Number (e.g. 0370...)"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                required
                className="w-full px-3 py-2 rounded-xl bg-white/[0.07] hover:bg-white/[0.10] focus:bg-white/[0.12] border border-white/15 text-white placeholder-white/40 text-xs focus:outline-none focus:ring-1 focus:ring-[#006EF5] transition-all"
              />
            </div>
          </div>

          {/* 4. Optional Project Note */}
          <div>
            <input
              type="text"
              placeholder="Brief note (optional, e.g. need website in 2 weeks)"
              value={projectNote}
              onChange={(e) => setProjectNote(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-white/[0.07] hover:bg-white/[0.10] focus:bg-white/[0.12] border border-white/15 text-white placeholder-white/40 text-xs focus:outline-none focus:ring-1 focus:ring-[#006EF5] transition-all"
            />
          </div>

          {/* 5. Submit Button */}
          <button
            type="submit"
            className="w-full group py-2.5 sm:py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#003FC5] via-[#006EF5] to-[#2C81FA] hover:shadow-[0_8px_25px_rgba(0,110,245,0.45)] active:scale-98 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <Send className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
            <span>Send Proposal Request via WhatsApp</span>
          </button>

          <p className="text-[10px] text-white/50 text-center flex items-center justify-center gap-1.5">
            <CheckCircle2 className="h-3 w-3 text-emerald-400" />
            <span>Direct engineer response within 1 hour · No spam</span>
          </p>
        </form>
      </div>
    </div>
  );
}
