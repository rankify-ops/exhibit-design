"use client";

import { useEffect, useState } from "react";
import { contact, projectTypes, site } from "@/content/site";
import { Arrow } from "./ui";

const EVENT = "enquiry:type";

/** Hero shortcut: pick a project type, jump to the form with it preselected. */
export function TypeChips() {
  return (
    <div className="mt-8 flex flex-col items-stretch gap-2 sm:flex-row sm:flex-wrap sm:justify-center">
      {projectTypes.map((t) => (
        <a
          key={t}
          href="#contact"
          onClick={() => window.dispatchEvent(new CustomEvent(EVENT, { detail: t }))}
          className="rounded-full border border-white/40 bg-black/20 px-4 py-2 text-[13px] text-white transition-colors hover:bg-white hover:text-ink"
        >
          {t}
        </a>
      ))}
    </div>
  );
}

const field =
  "w-full border-0 border-b border-white/25 bg-transparent px-0 py-3 text-sm text-white placeholder:text-white/40 focus:border-white focus:outline-none focus:ring-0";

/*
 * Posts to Web3Forms once the access key is set; until then it opens the
 * visitor's mail client with the enquiry filled in.
 */
const WEB3FORMS_KEY = "";

export function EnquirySection() {
  const [type, setType] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const on = (e: Event) => setType((e as CustomEvent<string>).detail);
    window.addEventListener(EVENT, on);
    return () => window.removeEventListener(EVENT, on);
  }, []);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    if (WEB3FORMS_KEY) {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: WEB3FORMS_KEY, subject: `Website enquiry — ${data.type}`, ...data }),
      });
      setSent(true);
      return;
    }
    const body = Object.entries(data)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Website enquiry — ${data.type}`)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contact" className="bg-ink py-16 text-white md:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow !text-white/50">{contact.eyebrow}</p>
          <h2 className="mt-3 text-3xl md:text-4xl">{contact.headline}</h2>
          <p className="mt-6 text-sm text-white/70">{contact.body}</p>
          <div className="mt-6 space-y-1 text-lg">
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="block hover:opacity-70">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="block break-all hover:opacity-70">
              {site.email}
            </a>
          </div>
        </div>

        {sent ? (
          <p className="self-center text-lg">Thanks — we’ll be in touch.</p>
        ) : (
          <form onSubmit={submit} className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
            <input name="name" required placeholder="Name" className={field} autoComplete="name" />
            <input name="phone" required placeholder="Phone" className={field} type="tel" autoComplete="tel" />
            <input name="email" required placeholder="Email" className={`${field} sm:col-span-2`} type="email" autoComplete="email" />
            <select
              name="type"
              required
              value={type}
              onChange={(e) => setType(e.target.value)}
              className={`${field} sm:col-span-2 ${type ? "" : "text-white/40"}`}
            >
              <option value="" disabled>
                Project type
              </option>
              {projectTypes.map((t) => (
                <option key={t} value={t} className="text-ink">
                  {t}
                </option>
              ))}
            </select>
            <textarea name="message" rows={3} placeholder="Message" className={`${field} resize-none sm:col-span-2`} />
            <div className="mt-6 sm:col-span-2">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white bg-white px-6 py-3 text-sm text-ink transition-colors hover:bg-transparent hover:text-white sm:w-auto"
              >
                {site.cta}
                <Arrow />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
