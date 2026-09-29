import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `
You are the official AI Assistant for "KoDriftDev", a high-end digital agency based in Punjab, Pakistan.
Team members:
- Tahseen: Lead Developer & Full-Stack Engineer (Next.js, Flutter, AI agents, Supabase)
- Bisma: Lead Generation & Outreach Specialist
- Areeba: Client Communication & Content Strategist

Services provided:
1. Web Development (Next.js, High-performance storefronts, luxury e-commerce like AURA-X, Cluck n Moo)
2. App Development (Flutter cross-platform apps, SoundMind AI, Aether Diary)
3. Software Development & SaaS (Pharmacy SaaS, Prime Energy UK heating profitability engine)
4. AI Product Photography (AI-generated studio e-commerce visuals)
5. AI Automation (n8n workflows, custom chatbots, auto-scheduling)
6. SEO, Website Redesign, Digital Marketing, Graphic Design, Data Entry

Contact details:
- WhatsApp / Phone: +92 370 3495800
- Email: kodriftdev@gmail.com
- Location: Punjab, Pakistan

Behavior Rules:
- Be concise, friendly, confident, and professional.
- Answer user queries about KoDriftDev's tech stack, pricing approach (flexible, tailored packages), past projects, and capabilities.
- When a user wants to start a project or hire the team, guide them to contact via WhatsApp (+92 370 3495800) or submit the contact form on the /contact page.
- Keep responses within 2-3 short, engaging sentences.
`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({
        reply:
          "Hello! I am KoDriftDev's AI assistant. How can I help you today? You can ask me about our web development, mobile apps, software platforms, pricing, or reach our team directly on WhatsApp at +92 370 3495800!",
      });
    }

    // Format chat history for Gemini API
    const formattedContents = [
      { role: "user", parts: [{ text: SYSTEM_PROMPT }] },
      {
        role: "model",
        parts: [
          {
            text: "Understood! I am ready to assist potential clients about KoDriftDev.",
          },
        ],
      },
      ...((messages || []).map((m: { role: string; content: string }) => ({
        role: m.role === "user" ? "user" : "model",
        parts: [{ text: m.content || "" }],
      }))),
    ];

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: formattedContents }),
      }
    );

    const data = await res.json();
    
    // Safely parse Gemini candidate response
    let reply = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!reply && data.error) {
      console.warn("Gemini API Error Notice:", data.error);
      // Helpful fallback if API key quota/model is restricted
      const lastUserMsg = (messages?.[messages.length - 1]?.content || "").toLowerCase();
      if (lastUserMsg.includes("service") || lastUserMsg.includes("web") || lastUserMsg.includes("app")) {
        reply = "KoDriftDev provides bespoke Web Development (Next.js), Mobile App Development (Flutter), SaaS platforms, AI Automations, and E-Commerce visual engineering. Message us on WhatsApp (+92 370 3495800) to get a tailored proposal!";
      } else if (lastUserMsg.includes("tahseen") || lastUserMsg.includes("team") || lastUserMsg.includes("who")) {
        reply = "Tahseen is our Lead Full-Stack Engineer specializing in Next.js, Flutter, and AI systems. Together with Bisma (Outreach) and Areeba (Client Strategy), our team delivers end-to-end digital excellence.";
      } else if (lastUserMsg.includes("price") || lastUserMsg.includes("cost")) {
        reply = "Our pricing is structured into flexible, milestone-based tiers (Starter, Growth, Scale) with transparent milestone delivery. Check our /pricing page or reach out directly on WhatsApp (+92 370 3495800) for a free estimate!";
      } else {
        reply = "Thank you for reaching out to KoDriftDev! You can discuss your project scope or get a quick proposal directly with our lead engineer on WhatsApp: +92 370 3495800.";
      }
    }

    if (!reply) {
      reply =
        "Thank you for reaching out! You can discuss your project with Tahseen directly on WhatsApp: +92 370 3495800.";
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      {
        reply:
          "Our team is available to assist you! Feel free to message us on WhatsApp: +92 370 3495800.",
      },
      { status: 200 }
    );
  }
}
