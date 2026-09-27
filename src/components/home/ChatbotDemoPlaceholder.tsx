import React from "react";
import { Bot, Sparkles, Send } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export interface ChatbotDemoPlaceholderProps {
  webhookUrl?: string;
  enabled?: boolean;
}

/**
 * Phase 2 Contained Dark/Teal Card with a friendly simulated chat UI shell.
 * Strictly non-operational preview with zero external network requests.
 */
export function ChatbotDemoPlaceholder({
  webhookUrl,
  enabled = false,
}: ChatbotDemoPlaceholderProps) {
  return (
    <div
      data-webhook-configured={!!webhookUrl}
      data-active={enabled}
      className="relative rounded-[20px] bg-[#183B3A] text-[#FFFEFC] border border-[#102625] p-6 sm:p-10 lg:p-12 shadow-md overflow-hidden"
    >
      {/* Background Architectural Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 pattern-dot-grid-light opacity-5" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Descriptive Content */}
        <div className="lg:col-span-7 space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent bg-accent/20 border border-accent/40 px-3 py-1 rounded-full">
              AI Automation Demo
            </span>
            <Badge variant="muted" className="bg-[#102625] text-[#A6AEA8] border-[#183B3A] text-xs">
              Demo connection coming soon
            </Badge>
          </div>

          <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#FFFEFC] font-heading leading-tight">
            See what a smarter customer workflow can feel like.
          </h3>

          <p className="text-sm sm:text-base text-[#A6AEA8] leading-relaxed max-w-xl">
            This space will host a live KoDriftDev automation demo powered by n8n. It can later
            answer common questions, collect project details, and route enquiries to the right
            workflow.
          </p>

          <div className="pt-2">
            <Button
              href="/services/ai-automation"
              variant="primary"
              size="lg"
              showArrow
            >
              Explore AI Automation
            </Button>
          </div>
        </div>

        {/* Right Column: Friendly Simulated Chat UI Shell */}
        <div className="lg:col-span-5 w-full">
          <div className="rounded-[16px] border border-[#102625] bg-[#102625] p-5 shadow-sm space-y-4 select-none">
            {/* Chat Shell Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#183B3A]">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-surface shadow-2xs">
                  <Bot className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#FFFEFC] font-heading">
                    KoDriftDev Assistant
                  </h4>
                  <p className="text-[10px] text-accent font-mono">Simulated Workflow</p>
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#A6AEA8] bg-[#183B3A] px-2 py-0.5 rounded">
                Preview Mode
              </span>
            </div>

            {/* Simulated Chat Messages */}
            <div className="space-y-3 py-2 text-xs">
              {/* Bot greeting */}
              <div className="rounded-[10px] bg-[#183B3A] text-[#E4E0D9] p-3 max-w-[90%] border border-[#102625]">
                <p className="font-semibold text-accent text-[11px] mb-1 font-mono">KoDrift Assistant</p>
                <p>Hello! Welcome to KoDriftDev. Are you looking to build a website, a custom software system, or automate workflows?</p>
              </div>

              {/* User mock reply */}
              <div className="rounded-[10px] bg-accent/20 text-[#FFFEFC] p-3 max-w-[85%] ml-auto border border-accent/30 text-right">
                <p>We need an order-tracking dashboard for our store.</p>
              </div>

              {/* Bot response */}
              <div className="rounded-[10px] bg-[#183B3A] text-[#E4E0D9] p-3 max-w-[90%] border border-[#102625]">
                <p className="font-semibold text-accent text-[11px] mb-1 font-mono">KoDrift Assistant</p>
                <p>Understood! I will route your specifications directly to our lead developer for an initial discovery review.</p>
              </div>
            </div>

            {/* Non-operational Input Box */}
            <div className="pt-2 border-t border-[#183B3A] flex items-center gap-2">
              <div className="flex-1 rounded-[8px] bg-[#183B3A]/60 px-3 py-2 text-[11px] text-[#A6AEA8] border border-[#183B3A]">
                Preview only · Interactive n8n live connection in Phase 4
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-[#183B3A] text-[#A6AEA8]">
                <Send className="h-3.5 w-3.5" />
              </div>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#A6AEA8] pt-1">
              <Sparkles className="h-3 w-3 text-accent" />
              <span>Full automated interaction arriving in later release</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
