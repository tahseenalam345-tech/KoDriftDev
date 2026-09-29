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

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages, isLoading]);

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
    <div className="fixed bottom-6 right-6 z-50 select-none">
      {/* ── 1. Expanded Chat Window (Compact Mobile Popup) ── */}
      {isOpen && (
        <div
          className="w-[calc(100vw-28px)] sm:w-[380px] max-w-[380px] h-[440px] sm:h-[530px] max-h-[72vh] sm:max-h-[82vh] rounded-[24px] sm:rounded-3xl border border-white/20 bg-[#030712]/92 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,110,245,0.35)] flex flex-col overflow-hidden mb-2 sm:mb-3 animate-in fade-in zoom-in-95 duration-200"
          style={{
            boxShadow:
              "0 20px 60px rgba(0,110,245,0.30), 0 0 2px rgba(255,255,255,0.4), inset 0 1px 1px rgba(255,255,255,0.2)",
          }}
        >
          {/* Header */}
          <div className="p-3.5 sm:p-4 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-[#002D8B]/50 border-b border-white/10 flex items-center justify-between text-white">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#003FC5] to-[#006EF5] text-white shadow-md border border-white/20">
                <Sparkles className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-cyan-200" />
                <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-emerald-500 border-2 border-[#030712]" />
                </span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-xs sm:text-sm font-extrabold tracking-tight text-white font-heading">
                    KoDriftDev AI
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-[#006EF5]/20 border border-[#006EF5]/40 text-[9px] font-sans text-blue-300 font-extrabold tracking-wider">
                    AI ASSISTANT
                  </span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Online & ready to help
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={resetChat}
                className="p-1.5 rounded-xl hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                title="Reset Conversation"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-xl hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                title="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs font-sans scrollbar-thin scrollbar-thumb-white/10">
            {messages.map((m) => {
              const isUser = m.role === "user";
              return (
                <div
                  key={m.id}
                  className={`flex items-start gap-2.5 ${isUser ? "flex-row-reverse" : "flex-row"}`}
                >
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-xl text-white ${
                      isUser
                        ? "bg-slate-700 border border-white/20"
                        : "bg-gradient-to-tr from-[#003FC5] to-[#006EF5] border border-blue-400/40 shadow-xs"
                    }`}
                  >
                    {isUser ? <User className="h-3.5 w-3.5" /> : <Bot className="h-3.5 w-3.5" />}
                  </div>

                  <div
                    className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 leading-relaxed shadow-sm ${
                      isUser
                        ? "bg-[#006EF5] text-white rounded-tr-xs font-medium"
                        : "bg-white/[0.08] backdrop-blur-md text-slate-200 border border-white/10 rounded-tl-xs"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{m.content}</p>

                    {/* If WhatsApp mention, show button */}
                    {m.content.includes("WhatsApp") && (
                      <div className="mt-2 pt-2 border-t border-white/10">
                        <a
                          href={siteConfig.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 transition-all shadow-xs"
                        >
                          <span>Open WhatsApp Chat</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    )}

                    <span className="block text-[9px] text-white/40 mt-1 text-right">
                      {m.timestamp}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex items-start gap-2.5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-[#003FC5] to-[#006EF5] text-white border border-blue-400/40">
                  <Bot className="h-3.5 w-3.5" />
                </div>
                <div className="rounded-2xl rounded-tl-xs px-4 py-3 bg-white/[0.08] border border-white/10 backdrop-blur-md flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-blue-400 animate-bounce [animation-delay:-0.3s]" />
                  <span className="h-2 w-2 rounded-full bg-blue-400 animate-bounce [animation-delay:-0.15s]" />
                  <span className="h-2 w-2 rounded-full bg-blue-400 animate-bounce" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Action Chips */}
          <div className="px-3 py-2 bg-black/40 border-t border-white/5 flex gap-1.5 overflow-x-auto no-scrollbar">
            {QUICK_ACTIONS.map((action) => (
              <button
                key={action}
                type="button"
                onClick={() => handleSend(action)}
                className="whitespace-nowrap px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer shrink-0"
              >
                {action}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <div className="p-3 bg-slate-950/90 border-t border-white/10 flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about services, pricing, tech stack..."
              disabled={isLoading}
              className="flex-1 bg-white/10 hover:bg-white/[0.14] focus:bg-white/[0.16] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
            />

            <button
              type="button"
              onClick={() => handleSend()}
              disabled={!inputValue.trim() || isLoading}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-[#003FC5] to-[#006EF5] text-white disabled:opacity-40 disabled:cursor-not-allowed hover:from-blue-600 hover:to-blue-500 transition-all shadow-md active:scale-95 cursor-pointer"
              title="Send message"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* ── 2. Collapsed Floating AI Assistant Button ── */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group relative flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gradient-to-tr from-[#002D8B] via-[#004AC7] to-[#006EF5] text-white shadow-[0_8px_30px_rgba(0,110,245,0.45)] hover:shadow-[0_12px_40px_rgba(0,110,245,0.7)] hover:scale-110 active:scale-95 border-2 border-white/30 backdrop-blur-xl transition-all duration-300 cursor-pointer"
          title="Open KoDriftDev AI Assistant"
          aria-label="Open AI Assistant"
        >
          {/* Glowing Luminous AI Aura */}
          <span className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-[#006EF5] via-[#2C81FA] to-[#8B5CF6] opacity-45 blur-md group-hover:opacity-85 animate-pulse transition-opacity" />

          {/* Futuristic AI Star Core Icon */}
          <div className="relative flex items-center justify-center">
            <Sparkles className="h-6 w-6 text-cyan-100 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
            <span className="absolute w-2 h-2 rounded-full bg-cyan-300 blur-[1px] animate-ping pointer-events-none" />
          </div>

          {/* Green Online Status Indicator */}
          <span className="absolute top-0.5 right-0.5 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-[#002D8B]" />
          </span>
        </button>
      )}
    </div>
  );
}
