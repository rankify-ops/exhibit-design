import { footer, site } from "@/content/site";
import { Arrow } from "./ui";

export function Footer() {
  return (
    <footer className="border-t border-rule bg-white">
      <div className="wrap py-14 md:py-20">
        <div className="flex flex-col gap-4 border-b border-ink pb-8 md:flex-row md:items-end md:justify-between">
          {/* Large logo slot */}
          <p className="text-4xl tracking-tight md:text-5xl">{site.name}</p>
          <p className="text-sm text-ink-2">{footer.tagline}</p>
        </div>

        <div className="grid gap-10 pt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {footer.columns.map((col, i) => (
            <div key={i} className="lg:border-r lg:border-ink-3/40 lg:px-10 lg:first:pl-0">
              <p className="mb-4 text-sm font-normal">{col.heading}</p>
              <ul className="space-y-1.5 text-sm text-ink-2">
                {col.links.map((l, j) => (
                  <li key={j}>
                    <a href="#" className="hover:text-ink">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:pl-10">
            <p className="mb-4 text-sm font-normal">{footer.newsletter.heading}</p>
            <p className="mb-4 text-sm text-ink-2">{footer.newsletter.body}</p>
            <a href="#" className="flex w-full items-center justify-center gap-3 rounded-full border border-ink py-2.5 text-sm hover:bg-ink hover:text-white">
              {footer.newsletter.cta}
              <Arrow />
            </a>
            <p className="mt-6 text-sm text-ink-2">P — {site.phone}</p>
            <p className="text-sm text-ink-2">E — {site.email}</p>
          </div>
        </div>

        <p className="mt-14 text-center text-xs text-ink-3">{footer.acknowledgement}</p>
      </div>

      <div className="border-t border-rule py-6 text-center text-xs text-ink-2">
        Copyright {new Date().getFullYear()} {site.name}
        {footer.legal.map((l) => (
          <span key={l}>
            <span className="mx-3 text-ink-3">|</span>
            <a href="#" className="hover:text-ink">
              {l}
            </a>
          </span>
        ))}
      </div>
    </footer>
  );
}
