"use client";

import { useEffect, useRef, useState } from "react";
import { feature, site, steps } from "@/content/site";
import { stepIcons } from "./Icons";
import { Arrow, Btn, Eyebrow, Ph } from "./ui";

/** Dark text panel left, photo right, dots to switch slides. */
export function FeatureSlider() {
  const [i, setI] = useState(0);
  const s = feature.slides[i];

  return (
    <section className="py-8 md:py-20">
      <div className="grid bg-ink text-white lg:grid-cols-2">
        <div className="flex flex-col justify-center px-5 py-12 md:px-10 xl:px-20">
          <Eyebrow className="!text-white/50">{feature.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl">{s.title}</h2>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/70">{s.body}</p>
          <div className="mt-8">
            <Btn tone="light">{s.cta}</Btn>
          </div>
        </div>
        <Ph label={`${s.title} — photo`} dark className="aspect-[4/3] lg:aspect-auto lg:min-h-[560px]" />
      </div>
      <div className="wrap mt-5 flex gap-2">
        {feature.slides.map((_, j) => (
          <button
            key={j}
            aria-label={`Show project ${j + 1}`}
            aria-current={i === j}
            onClick={() => setI(j)}
            className={`h-1.5 rounded-full transition-all ${i === j ? "w-6 bg-ink" : "w-1.5 bg-ink-3/50"}`}
          />
        ))}
      </div>
    </section>
  );
}

/*
 * Start-to-finish timeline. One bracket (the company) spans every phase, the
 * phases (Design | Build | Live) span their steps, and a progress line fills
 * to the selected step. Auto-advances while on screen until someone clicks.
 * Desktop: horizontal. Mobile: vertical list, selected step opens in place.
 */
export function Steps() {
  const n = steps.items.length;
  const [i, setI] = useState(0);
  const [auto, setAuto] = useState(true);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!auto || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let t: ReturnType<typeof setInterval> | undefined;
    const io = new IntersectionObserver(
      ([e]) => {
        clearInterval(t);
        if (e.isIntersecting) t = setInterval(() => setI((x) => (x + 1) % n), 4500);
      },
      { threshold: 0.4 },
    );
    if (ref.current) io.observe(ref.current);
    return () => {
      io.disconnect();
      clearInterval(t);
    };
  }, [auto, n]);

  const pick = (k: number) => {
    setAuto(false);
    setI(k);
  };
  const pad = (k: number) => String(k + 1).padStart(2, "0");
  const phaseOf = (k: number) => {
    let acc = 0;
    for (const ph of steps.phases) {
      acc += ph.span;
      if (k < acc) return ph.label;
    }
    return "";
  };

  return (
    <section ref={ref} id="steps" className="wrap py-16 md:py-28">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-20">
        <div>
          <Eyebrow>{steps.eyebrow}</Eyebrow>
          <h2 className="mt-3 max-w-xl text-3xl leading-tight md:text-4xl">{steps.headline}</h2>
        </div>
        <blockquote className="self-end border-l border-rule pl-6 text-[15px] leading-relaxed text-ink-2 lg:max-w-md">“{steps.quote}”</blockquote>
      </div>

      {/* Desktop: horizontal timeline */}
      <div className="mt-16 hidden md:block">
        {/* One company across the whole journey */}
        <div className="relative mx-[calc(100%/14)] h-3 border-x border-t border-ink">
          <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-white px-4 text-[12px] text-ink">{site.name}</span>
        </div>

        {/* Phases */}
        <div className="mt-5 grid grid-cols-7 gap-3">
          {steps.phases.map((ph, k) => {
            const start = steps.phases.slice(0, k).reduce((a, p) => a + p.span, 0);
            const on = i >= start && i < start + ph.span;
            return (
              <div
                key={ph.label}
                style={{ gridColumn: `span ${ph.span}` }}
                className={`border-t pt-2 text-center text-[12px] transition-colors ${on ? "border-ink text-ink" : "border-rule text-ink-3"}`}
              >
                {ph.label}
              </div>
            );
          })}
        </div>

        {/* Nodes */}
        <div className="relative mt-8">
          <div className="absolute left-[calc(100%/14)] right-[calc(100%/14)] top-8 h-px bg-rule" aria-hidden />
          <div
            className="absolute left-[calc(100%/14)] top-8 h-px bg-ink transition-[width] duration-700"
            style={{ width: `calc((100% - 100% / 7) * ${i / (n - 1)})` }}
            aria-hidden
          />
          <ol className="relative grid grid-cols-7">
            {steps.items.map((s, k) => {
              const Icon = stepIcons[k];
              const on = k === i;
              const done = k < i;
              return (
                <li key={s.title}>
                  <button onClick={() => pick(k)} aria-current={on ? "step" : undefined} className="group flex w-full flex-col items-center px-2 text-center">
                    <span
                      className={`flex size-16 items-center justify-center rounded-full border transition-all duration-500 ${
                        on
                          ? "scale-110 border-ink bg-ink text-white"
                          : done
                            ? "border-ink bg-white text-ink"
                            : "border-rule bg-white text-ink-3 group-hover:border-ink group-hover:text-ink"
                      }`}
                    >
                      <Icon className="size-7" />
                    </span>
                    <span className="mt-4 text-[11px] tabular-nums text-ink-3">{pad(k)}</span>
                    <span className={`mt-1 text-[13px] leading-snug transition-colors ${on ? "text-ink" : "text-ink-3 group-hover:text-ink"}`}>{s.title}</span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Detail */}
        <div className="mt-12 grid grid-cols-[1fr_auto] items-end gap-10 border-t border-rule pt-8">
          <div key={i} className="max-w-2xl animate-[fade_.5s_ease]">
            <p className="text-[12px] text-ink-3">
              {phaseOf(i)} · {pad(i)} / {pad(n - 1)}
            </p>
            <h3 className="mt-2 text-2xl">{steps.items[i].title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-ink-2">{steps.items[i].body}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => pick((i - 1 + n) % n)}
              aria-label="Previous step"
              className="flex size-11 items-center justify-center rounded-full border border-rule hover:border-ink"
            >
              <Arrow className="-rotate-[135deg]" />
            </button>
            <button
              onClick={() => pick((i + 1) % n)}
              aria-label="Next step"
              className="flex size-11 items-center justify-center rounded-full border border-rule hover:border-ink"
            >
              <Arrow className="rotate-45" />
            </button>
            <a
              href="#contact"
              className="ml-4 inline-flex items-center gap-3 rounded-full border border-ink px-5 py-2.5 text-sm transition-colors hover:bg-ink hover:text-white"
            >
              {site.cta}
              <Arrow />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile: vertical timeline */}
      <div className="relative mt-10 md:hidden">
        <div className="absolute bottom-6 left-6 top-6 w-px bg-rule" aria-hidden />
        <ol className="relative">
          {steps.items.map((s, k) => {
            const Icon = stepIcons[k];
            const on = k === i;
            const newPhase = k === 0 || phaseOf(k) !== phaseOf(k - 1);
            return (
              <li key={s.title}>
                {newPhase && <p className={`mb-2 ml-16 text-[12px] text-ink-3 ${k ? "mt-4" : ""}`}>{phaseOf(k)}</p>}
                <button onClick={() => pick(k)} aria-expanded={on} className="flex w-full items-center gap-4 py-2 text-left">
                  <span
                    className={`flex size-12 shrink-0 items-center justify-center rounded-full border transition-colors ${
                      on ? "border-ink bg-ink text-white" : "border-rule bg-white text-ink-2"
                    }`}
                  >
                    <Icon className="size-6" />
                  </span>
                  <span className={`text-[15px] ${on ? "text-ink" : "text-ink-2"}`}>
                    <span className="mr-2 text-[11px] tabular-nums text-ink-3">{pad(k)}</span>
                    {s.title}
                  </span>
                </button>
                <div className={`grid pl-16 transition-[grid-template-rows] duration-500 ${on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="pb-4 pt-1 text-sm leading-relaxed text-ink-2">{s.body}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
      <a href="#contact" className="mt-8 flex w-full items-center justify-center gap-3 rounded-full border border-ink py-3 text-sm md:hidden">
        {site.cta}
        <Arrow />
      </a>
    </section>
  );
}
