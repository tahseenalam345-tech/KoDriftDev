"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  X,
  Send,
  Sparkles,
  Bot,
  User,
  RotateCcw,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import { siteConfig } from "@/content/site";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

const QUICK_ACTIONS = [
  "What services do you provide?",
  "How does pricing work?",
  "Who is Tahseen & the team?",
  "Talk on WhatsApp",
];

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: "init-1",
    role: "assistant",
    content:
      "Hello! I am KoDriftDev's AI Assistant. How can I help you today with your web, mobile app, or software project?",
    timestamp: "Just now",
  },
];

export function AiChatWidget() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      // Ensure mobile virtual keyboard is NEVER auto-opened upon clicking the widget
      inputRef.current?.blur();
    }
  }, [isOpen, messages, isLoading]);

  // Click outside to close chat
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent | TouchEvent | PointerEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("pointerdown", handleClickOutside);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputValue("");
    setIsLoading(true);

    // If user asked to talk on WhatsApp directly
    if (query.toLowerCase().includes("whatsapp")) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: "assistant",
            content: `You can connect directly with our lead engineer on WhatsApp at ${siteConfig.phoneDisplay}! Click below to start the conversation:`,
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          },
        ]);
        setIsLoading(false);
      }, 400);
      return;
    }

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role === "user" ? "user" : "model",
            content: m.content,
          })),
        }),
      });

      const data = await res.json();
      const replyText =
        data.reply ||
        "Thank you! Feel free to discuss your requirements directly with Tahseen on WhatsApp: +92 370 3495800.";

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: replyText,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content:
            "Our team is standing by! Feel free to reach out directly via WhatsApp at +92 370 3495800 or through our /contact page.",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const resetChat = () => {
    setMessages(INITIAL_MESSAGES);
  };

  return (
    <>
      {/* ── 0. Backdrop Click-Catcher: Tapping anywhere outside closes the popup ── */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/15 backdrop-blur-[0.5px] transition-opacity cursor-pointer"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <div ref={widgetRef} className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-50 select-none">
        {/* ── 1. Compact Side-Docked Chat Popup ── */}
        {isOpen && (
          <div
            className="w-[252px] sm:w-[330px] max-w-[calc(100vw-24px)] h-[305px] sm:h-[420px] max-h-[46vh] sm:max-h-[64vh] rounded-2xl sm:rounded-3xl border border-white/20 bg-[#030712]/95 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,110,245,0.40)] flex flex-col overflow-hidden mb-1 sm:mb-2 animate-in fade-in zoom-in-95 duration-150"
            style={{
              boxShadow:
                "0 12px 40px rgba(0,110,245,0.35), 0 0 2px rgba(255,255,255,0.4), inset 0 1px 1px rgba(255,255,255,0.2)",
            }}
          >
            {/* Header */}
            <div className="p-2 sm:p-2.5 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-[#002D8B]/50 border-b border-white/10 flex items-center justify-between text-white shrink-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="relative flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-[#003FC5] to-[#006EF5] text-white shadow-md border border-white/20 shrink-0">
                  <Sparkles className="h-3.5 w-3.5 text-cyan-200" />
                  <span className="absolute -bottom-0.5 -right-0.5 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 border-2 border-[#030712]" />
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <h3 className="text-[11.5px] sm:text-xs font-extrabold tracking-tight text-white font-heading">
                      KoDriftDev AI
                    </h3>
                    <span className="px-1 py-0.2 rounded-full bg-[#006EF5]/20 border border-[#006EF5]/40 text-[8px] font-sans text-blue-300 font-extrabold tracking-wider">
                      ASSISTANT
                    </span>
                  </div>
                  <p className="text-[9px] sm:text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                    <span className="h-1 w-1 rounded-full bg-emerald-400" />
                    Online & ready to help
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-0.5">
                <button
                  type="button"
                  onClick={resetChat}
                  className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Reset Conversation"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Close chat"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-2.5 sm:p-3 overflow-y-auto space-y-2 sm:space-y-2.5 text-[11px] sm:text-xs font-sans scrollbar-thin scrollbar-thumb-white/10">
              {messages.map((m) => {
                const isUser = m.role === "user";
                return (
                  <div
                    key={m.id}
                    className={`flex items-start gap-1.5 sm:gap-2 ${isUser ? "flex-row-reverse" : "flex-row"}`}
                  >
                    <div
                      className={`flex h-6 w-6 sm:h-6.5 sm:w-6.5 shrink-0 items-center justify-center rounded-lg text-white ${
                        isUser
                          ? "bg-slate-700 border border-white/20"
                          : "bg-gradient-to-tr from-[#003FC5] to-[#006EF5] border border-blue-400/40 shadow-xs"
                      }`}
                    >
                      {isUser ? <User className="h-3 w-3" /> : <Bot className="h-3 w-3" />}
                    </div>

                    <div
                      className={`max-w-[84%] rounded-xl px-2.5 py-1.5 sm:px-3 sm:py-2 leading-relaxed shadow-sm ${
                        isUser
                          ? "bg-[#006EF5] text-white rounded-tr-xs font-medium"
                          : "bg-white/[0.08] backdrop-blur-md text-slate-200 border border-white/10 rounded-tl-xs"
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{m.content}</p>

                      {/* If WhatsApp mention, show button */}
                      {m.content.includes("WhatsApp") && (
                        <div className="mt-1.5 pt-1.5 border-t border-white/10">
                          <a
                            href={siteConfig.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 transition-all shadow-xs"
                          >
                            <span>Open WhatsApp</span>
                            <ExternalLink className="h-2.5 w-2.5" />
                          </a>
                        </div>
                      )}

                      <span className="block text-[8.5px] text-white/40 mt-0.5 text-right">
                        {m.timestamp}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Loading Indicator */}
              {isLoading && (
                <div className="flex items-start gap-1.5">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-gradient-to-tr from-[#003FC5] to-[#006EF5] text-white border border-blue-400/40">
                    <Bot className="h-3 w-3" />
                  </div>
                  <div className="rounded-xl rounded-tl-xs px-3 py-2 bg-white/[0.08] border border-white/10 backdrop-blur-md flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-bounce [animation-delay:-0.3s]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-bounce [animation-delay:-0.15s]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-bounce" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Action Chips */}
            <div className="px-2 py-1 bg-black/40 border-t border-white/5 flex gap-1 overflow-x-auto no-scrollbar shrink-0">
              {QUICK_ACTIONS.map((action) => (
                <button
                  key={action}
                  type="button"
                  onClick={() => handleSend(action)}
                  className="whitespace-nowrap px-2 py-0.5 rounded-full text-[9.5px] sm:text-[10.5px] font-semibold bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer shrink-0"
                >
                  {action}
                </button>
              ))}
            </div>

            {/* Input Bar — autoFocus explicitly false so mobile keyboard NEVER auto pops up */}
            <div className="p-1.5 sm:p-2 bg-slate-950/90 border-t border-white/10 flex items-center gap-1.5 shrink-0">
              <input
                ref={inputRef}
                type="text"
                autoFocus={false}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask a question..."
                disabled={isLoading}
                className="flex-1 bg-white/10 hover:bg-white/[0.14] focus:bg-white/[0.16] border border-white/15 rounded-lg px-2.5 py-1.5 text-[11px] sm:text-xs text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
              />

              <button
                type="button"
                onClick={() => handleSend()}
                disabled={!inputValue.trim() || isLoading}
                className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-[#003FC5] to-[#006EF5] text-white disabled:opacity-40 disabled:cursor-not-allowed hover:from-blue-600 hover:to-blue-500 transition-all shadow-md active:scale-95 cursor-pointer"
                title="Send message"
              >
                <Send className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* ── 2. Collapsed Floating AI Assistant Button ── */}
        {!isOpen && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gradient-to-tr from-[#002D8B] via-[#004AC7] to-[#006EF5] text-white shadow-[0_8px_30px_rgba(0,110,245,0.45)] hover:shadow-[0_12px_40px_rgba(0,110,245,0.7)] hover:scale-105 active:scale-95 border-2 border-white/30 backdrop-blur-xl transition-all duration-200 cursor-pointer"
            title="Open KoDriftDev AI Assistant"
            aria-label="Open AI Assistant"
          >
            {/* Glowing Luminous AI Aura */}
            <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#006EF5] via-[#2C81FA] to-[#8B5CF6] opacity-45 blur-md group-hover:opacity-85 animate-pulse transition-opacity" />

            {/* Futuristic AI Star Core Icon */}
            <div className="relative flex items-center justify-center">
              <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-100 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              <span className="absolute w-2 h-2 rounded-full bg-cyan-300 blur-[1px] animate-ping pointer-events-none" />
            </div>

            {/* Green Online Status Indicator */}
            <span className="absolute top-0.5 right-0.5 flex h-3 w-3 sm:h-3.5 sm:w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 sm:h-3.5 sm:w-3.5 bg-emerald-500 border-2 border-[#002D8B]" />
            </span>
          </button>
        )}
      </div>
    </>
  );
}
