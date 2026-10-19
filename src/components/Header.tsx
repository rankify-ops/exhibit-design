"use client";

import { useState } from "react";
import { site } from "@/content/site";
import { Arrow } from "./ui";

function Chevron() {
  return (
    <svg viewBox="0 0 8 8" className="size-2 text-ink-3" fill="none" stroke="currentColor" aria-hidden>
      <path d="M2.5 1.5 5 4 2.5 6.5" />
    </svg>
  );
}

/** Typographic stand-in until the new logo files arrive. */
function LogoSlot() {
  return <span className="text-[15px] tracking-tight">{site.name}</span>;
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="hidden h-8 items-center justify-end gap-8 bg-ink px-6 text-[12px] text-white md:flex">
        <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:opacity-70">
          <svg viewBox="0 0 16 16" className="size-3" fill="none" stroke="currentColor" aria-hidden>
            <path d="M3 2h3l1.5 3.5-2 1.2a8 8 0 0 0 3.8 3.8l1.2-2L14 10v3a1 1 0 0 1-1 1A11 11 0 0 1 2 3a1 1 0 0 1 1-1Z" />
          </svg>
          {site.phone}
        </a>
        <a href={`mailto:${site.email}`} className="hover:opacity-70">
          {site.email}
        </a>
        <a href={site.instagram} target="_blank" rel="noopener" className="hover:opacity-70">
          Instagram
        </a>
        <a href={site.facebook} target="_blank" rel="noopener" className="hover:opacity-70">
          Facebook
        </a>
      </div>

      {/* Main bar */}
      <div className="flex h-16 items-stretch border-b border-rule bg-white">
        <a href="#" className="flex items-center border-r border-rule px-5 md:px-6" aria-label={`${site.name} home`}>
          <LogoSlot />
        </a>

        <nav className="hidden flex-1 items-center gap-7 px-8 text-[15px] lg:flex">
          {site.nav.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-ink-2">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 px-4 md:px-5">
          <a
            href="#contact"
            className="hidden items-center gap-3 rounded-full border border-ink px-5 py-2 text-sm transition-colors hover:bg-ink hover:text-white sm:inline-flex"
          >
            {site.cta}
            <Arrow />
          </a>
          <button
            className="flex size-10 items-center justify-center lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <svg viewBox="0 0 20 20" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
              {open ? <path d="m4 4 12 12M16 4 4 16" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-b border-rule bg-white px-5 pb-6 lg:hidden">
          {site.nav.map((l) => (
            <a key={l.label} href={l.href} className="flex items-center justify-between border-b border-rule py-4 text-lg" onClick={() => setOpen(false)}>
              {l.label}
              <Chevron />
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 flex w-full items-center justify-center gap-3 rounded-full border border-ink py-3 text-sm"
          >
            {site.cta}
            <Arrow />
          </a>
        </nav>
      )}
    </header>
  );
}
