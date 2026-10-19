/*
 * Thin line icons, drawn on a 32 grid at 1.25 stroke so they sit with the
 * light 300-weight type. currentColor throughout.
 */

type P = { className?: string };

function Svg({ className = "size-7", children }: P & { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" className={className} aria-hidden>
      {children}
    </svg>
  );
}

/* Project types */

export const NewSite = (p: P) => (
  <Svg {...p}>
    <path d="M4 22 16 27l12-5-12-5Z" strokeDasharray="2 2" />
    <path d="M16 22V6l7 3-7 3" />
  </Svg>
);

export const HouseLand = (p: P) => (
  <Svg {...p}>
    <path d="M7 15 16 7l9 8M9.5 13v10h13V13" />
    <path d="M14 23v-5h4v5M3 26h26" />
  </Svg>
);

export const KnockDown = (p: P) => (
  <Svg {...p}>
    <path d="M6 16 14 9l8 7M8 14.5V24h12v-9.5" />
    <path d="M26 7a6 6 0 0 1 0 8.5M26 7h-3.5M26 7v3.5" />
  </Svg>
);

export const typeIcons = [NewSite, HouseLand, KnockDown];

/* Process steps */

export const Hello = (p: P) => (
  <Svg {...p}>
    <path d="M6 8h20v13H14l-6 5v-5H6Z" />
    <path d="M11 13h10M11 16.5h6" />
  </Svg>
);

export const Plan = (p: P) => (
  <Svg {...p}>
    <path d="M5 6h22v20H5Z" />
    <path d="M5 15h9v11M14 6v5M20 15h7M20 15v4" />
  </Svg>
);

export const Contract = (p: P) => (
  <Svg {...p}>
    <path d="M9 4h11l5 5v19H9Z" />
    <path d="M20 4v5h5M13 14h8M13 18h8M13 23c1.5-2 2.5-2 3.5 0s2 2 3.5 0" />
  </Svg>
);

export const Approve = (p: P) => (
  <Svg {...p}>
    <circle cx="16" cy="16" r="11" />
    <path d="m11 16.5 3.5 3.5 6.5-7.5" />
  </Svg>
);

export const Swatch = (p: P) => (
  <Svg {...p}>
    <path d="M5 8h8v18H5Z" />
    <path d="m13 12 6-5 6 7-12 10M9 22h0" />
  </Svg>
);

export const Frame = (p: P) => (
  <Svg {...p}>
    <path d="M4 15 16 5l12 10M7 13v14h18V13" />
    <path d="M7 20h18M12 27v-7M20 27v-7M12 20l8-7M20 20l-8-7" />
  </Svg>
);

export const Key = (p: P) => (
  <Svg {...p}>
    <circle cx="11" cy="16" r="5" />
    <path d="M16 16h12M24 16v4M28 16v3" />
  </Svg>
);

export const stepIcons = [Hello, Plan, Contract, Approve, Swatch, Frame, Key];
