import React from "react";
import { Container } from "@/components/layout/Container";
import { testimonials } from "@/content/testimonials";

const STARS = [1, 2, 3, 4, 5];

function StarRow() {
  return (
    <div className="flex items-center gap-1" aria-label="5 stars" role="img">
      {STARS.map((s) => (
        <svg
          key={s}
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          style={{ color: "var(--coral)" }}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function getInitials(name: string): string {
  if (name.includes("Dr. Tariq")) return "TM";
  if (name.includes("Muhammad")) return "MY";
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export function TestimonialPreview() {
  const featured = testimonials[0];
  const supporting = testimonials.slice(1);

  return (
    <section
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden kd-testimonials-section"
      aria-labelledby="testimonials-heading"
    >
      <style>{`
        .kd-testimonials-section { background: var(--bg-base); border-top: 1px solid var(--line); }
        .kd-quote-card {
          border-radius: 16px;
          transition: transform 220ms cubic-bezier(0.22,1,0.36,1), box-shadow 220ms;
        }
        .kd-quote-card-a {
          background: var(--surface);
          border: 1px solid var(--line);
          box-shadow: var(--shadow-soft), var(--shadow-inset);
          transform: rotate(-0.8deg);
        }
        .kd-quote-card-b {
          background: var(--surface);
          border: 1px solid var(--line);
          box-shadow: var(--shadow-soft), var(--shadow-inset);
          transform: rotate(0.8deg);
        }
        .kd-quote-card:hover { transform: rotate(0deg) translateY(-3px) !important; }
      `}</style>

      {/* Teal glow bottom-left */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[320px] rounded-full"
        style={{ background: "var(--teal-bright)", filter: "blur(130px)", opacity: 0.12 }}
        aria-hidden="true"
      />

      <Container className="relative z-10 space-y-14">
        {/* Header */}
        <div className="max-w-2xl space-y-4">
          <span className="metadata-text" style={{ color: "var(--brand-blue)" }}>Client feedback</span>
          <h2 id="testimonials-heading" className="section-headline">
            Good work should{" "}
            <span style={{ color: "var(--text-muted)" }}>make a difference.</span>
          </h2>
          <p className="text-base sm:text-[17px] leading-relaxed max-w-[520px]" style={{ color: "var(--text-muted)" }}>
            Direct feedback from founders and teams we have partnered with.
          </p>
        </div>

        {/* Featured large quote */}
        <blockquote
          className="relative rounded-2xl p-8 sm:p-12 lg:p-16"
          style={{
            background: "rgba(255,255,255,0.52)",
            backdropFilter: "blur(18px) saturate(125%)",
            WebkitBackdropFilter: "blur(18px) saturate(125%)",
            border: "1px solid rgba(255,255,255,0.72)",
            boxShadow: "var(--shadow-glass)",
          }}
        >
          <span
            className="absolute top-6 left-8 font-heading font-extrabold leading-none pointer-events-none select-none"
            style={{ fontSize: "8rem", color: "var(--teal)", opacity: 0.08, lineHeight: 1 }}
            aria-hidden="true"
          >
            &ldquo;
          </span>

          <div className="relative z-10">
            <StarRow />
            <p
              className="mt-5 text-xl sm:text-2xl lg:text-3xl font-heading font-semibold leading-snug max-w-3xl"
              style={{ color: "var(--ink)", letterSpacing: "-0.025em" }}
            >
              &ldquo;{featured.quote}&rdquo;
            </p>

            <footer
              className="mt-8 pt-6 flex items-center justify-between gap-4 flex-wrap"
              style={{ borderTop: "1px solid var(--line)" }}
            >
              <div className="flex items-center gap-3.5">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-mono font-bold text-sm"
                  style={{ background: "var(--bg-soft)", border: "1px solid var(--line)", color: "var(--ink)" }}
                  aria-hidden="true"
                >
                  {getInitials(featured.name)}
                </div>
                <div>
                  <cite className="font-heading font-bold not-italic" style={{ color: "var(--ink)", fontSize: "15px" }}>
                    {featured.name}
                  </cite>
                  <p className="text-xs sm:text-sm" style={{ color: "var(--text-muted)" }}>{featured.role}</p>
                </div>
              </div>
              <span className="text-[11px] font-mono" style={{ color: "var(--text-muted)" }}>
                {featured.verificationStatus}
              </span>
            </footer>
          </div>
        </blockquote>

        {/* Two supporting quotes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {supporting.map((item, idx) => (
            <blockquote
              key={idx}
              className={`kd-quote-card flex flex-col justify-between p-7 sm:p-8 ${idx === 0 ? "kd-quote-card-a" : "kd-quote-card-b"}`}
            >
              <div>
                <StarRow />
                <p className="mt-4 text-base sm:text-lg leading-relaxed" style={{ color: "var(--text)" }}>
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
              <footer
                className="mt-6 pt-5 flex items-center justify-between gap-3"
                style={{ borderTop: "1px solid var(--line)" }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg font-mono font-bold text-xs"
                    style={{ background: "var(--bg-soft)", border: "1px solid var(--line)", color: "var(--ink)" }}
                    aria-hidden="true"
                  >
                    {getInitials(item.name)}
                  </div>
                  <div>
                    <cite className="font-heading font-bold not-italic text-sm" style={{ color: "var(--ink)" }}>
                      {item.name}
                    </cite>
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>{item.role}</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono" style={{ color: "var(--text-muted)" }}>Verified</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}
