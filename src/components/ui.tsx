export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" className={`size-4 ${className}`} aria-hidden>
      <path d="M2 8h11M9 4l4 4-4 4" />
    </svg>
  );
}

/** Outlined pill with arrow. Full width on mobile, natural width from sm up. */
export function Btn({
  children,
  href = "#",
  tone = "dark",
  solid = false,
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  tone?: "dark" | "light";
  solid?: boolean;
  className?: string;
}) {
  const look =
    tone === "light"
      ? solid
        ? "bg-white text-ink border-white hover:bg-transparent hover:text-white"
        : "border-white/80 text-white hover:bg-white hover:text-ink"
      : solid
        ? "bg-ink text-white border-ink hover:bg-transparent hover:text-ink"
        : "border-ink text-ink hover:bg-ink hover:text-white";
  return (
    <a
      href={href}
      className={`inline-flex w-full items-center justify-center gap-3 rounded-full border px-5 py-2.5 text-sm transition-colors sm:w-auto ${look} ${className}`}
    >
      {children}
      <Arrow />
    </a>
  );
}

/** Image slot. `label` says what photo belongs here. */
export function Ph({ label, className = "", dark = false }: { label: string; className?: string; dark?: boolean }) {
  return (
    <div className={`${dark ? "ph-dark" : "ph"} relative ${className}`} role="img" aria-label={`Placeholder: ${label}`}>
      <span className={`absolute bottom-3 right-3 text-[11px] ${dark ? "text-white/40" : "text-ink/40"}`}>{label}</span>
    </div>
  );
}

export function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}
