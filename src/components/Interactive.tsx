"use client";

import { useState } from "react";
import { feature, steps } from "@/content/site";
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

/** Numbered step list left (two columns on desktop), selected step detail right. */
export function Steps() {
  const [i, setI] = useState(0);
  const half = Math.ceil(steps.items.length / 2);
  const cols = [steps.items.slice(0, half), steps.items.slice(half)];

  return (
    <section id="steps" className="wrap grid gap-10 py-16 md:py-28 lg:grid-cols-2 lg:gap-20">
      <div>
        <Eyebrow>{steps.eyebrow}</Eyebrow>
        <div className="mt-6 grid sm:grid-cols-2 sm:gap-x-8">
          {cols.map((col, c) => (
            <ul key={c}>
              {col.map((item, k) => {
                const idx = c * half + k;
                const on = idx === i;
                return (
                  <li key={idx}>
                    <button
                      onClick={() => setI(idx)}
                      className={`flex w-full items-center gap-3 border-b border-rule py-3 text-left text-sm transition-colors ${on ? "text-ink" : "text-ink-3 hover:text-ink"}`}
                    >
                      <span className="w-5 tabular-nums">{String(idx + 1).padStart(2, "0")}</span>
                      {item.title}
                    </button>
                  </li>
                );
              })}
            </ul>
          ))}
        </div>
      </div>
      <div className="lg:pt-10">
        <p className="text-sm tabular-nums text-ink-3">{String(i + 1).padStart(2, "0")} / 06</p>
        <h3 className="mt-2 text-2xl">{steps.items[i].title}</h3>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink-2">{steps.items[i].body}</p>
        <a href="#contact" className="mt-6 inline-flex items-center gap-2 border-b border-ink pb-0.5 text-sm">
          Make an enquiry <Arrow className="size-3" />
        </a>
      </div>
    </section>
  );
}
