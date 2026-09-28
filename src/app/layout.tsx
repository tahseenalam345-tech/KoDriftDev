import type { Metadata, Viewport } from "next";
import { Manrope, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { constructMetadata } from "@/lib/metadata";
import { AnimationProvider } from "@/context/AnimationContext";
import { ParticleStage } from "@/components/canvas/ParticleStage";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["500", "600"],
  display: "swap",
});

export const metadata: Metadata = constructMetadata();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${dmSans.variable} ${jetbrainsMono.variable} overflow-x-clip w-full max-w-full`}
    >
      <body
        className="min-h-screen flex flex-col antialiased overflow-x-clip w-full max-w-full relative"
        style={{ background: "var(--bg-base)", color: "var(--text)" }}
      >
        <AnimationProvider>
          <ParticleStage />
          <Header />
          <main className="flex-1 bg-transparent overflow-x-clip w-full max-w-full">{children}</main>
          <div className="relative z-20 overflow-x-clip w-full max-w-full">
            <Footer />
          </div>
        </AnimationProvider>
      </body>
    </html>
  );
}
