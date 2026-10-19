import { footer, site } from "@/content/site";

export function Footer() {
  const tel = `tel:${site.phone.replace(/\s/g, "")}`;
  return (
    <footer className="border-t border-rule bg-white">
      <div className="wrap py-14 md:py-20">
        <div className="flex flex-col gap-4 border-b border-ink pb-8 md:flex-row md:items-end md:justify-between">
          {/* Large logo slot — typographic until the new logo files arrive */}
          <p className="text-4xl tracking-tight md:text-5xl">{site.name}</p>
          <p className="text-sm text-ink-2">{footer.tagline}</p>
        </div>

        <div className="grid gap-10 pt-10 sm:grid-cols-3 sm:gap-0">
          <div className="sm:border-r sm:border-ink-3/40 sm:pr-10">
            <ul className="space-y-1.5 text-sm text-ink-2">
              {site.nav.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-ink">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="sm:border-r sm:border-ink-3/40 sm:px-10">
            <p className="text-sm text-ink-2">
              P —{" "}
              <a href={tel} className="hover:text-ink">
                {site.phone}
              </a>
            </p>
            <p className="break-all text-sm text-ink-2">
              E —{" "}
              <a href={`mailto:${site.email}`} className="hover:text-ink">
                {site.email}
              </a>
            </p>
          </div>
          <div className="sm:pl-10">
            <ul className="space-y-1.5 text-sm text-ink-2">
              <li>
                <a href={site.instagram} target="_blank" rel="noopener" className="hover:text-ink">
                  Instagram
                </a>
              </li>
              <li>
                <a href={site.facebook} target="_blank" rel="noopener" className="hover:text-ink">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-rule py-6 text-center text-xs text-ink-2">
        © Copyright - {site.name}
      </div>
    </footer>
  );
}
