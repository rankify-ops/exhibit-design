"use client";

import { useEffect, useState } from "react";
import { contact, projectTypes, site, steps } from "@/content/site";
import { typeIcons } from "./Icons";
import { Arrow } from "./ui";

/** Hero → form hand-off: whatever was picked/typed in the hero lands in the form. */
const EVENT = "enquiry:start";
type Start = { type?: string; name?: string; phone?: string };

function start(detail: Start) {
  window.dispatchEvent(new CustomEvent<Start>(EVENT, { detail }));
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

/*
 * Hero starter. Quiet by default: three icon tiles and one button. Picking a
 * tile opens a single row for name + phone, so the first step feels like a
 * click rather than a form. No backdrop-filter — it freezes the hero video.
 */
export function HeroStarter() {
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="mx-auto mt-10 w-full max-w-xl rounded-2xl border border-white/15 bg-black/35 p-3 text-left sm:p-4">
      <div className="grid grid-cols-3 gap-2">
        {projectTypes.map((t, i) => {
          const Icon = typeIcons[i];
          const on = type === t;
          return (
            <button
              key={t}
              type="button"
              aria-pressed={on}
              onClick={() => setType(on ? "" : t)}
              className={`flex flex-col items-center gap-2 rounded-xl border px-2 py-4 text-center text-[12px] leading-tight transition-colors sm:text-[13px] ${
                on ? "border-white bg-white text-ink" : "border-white/15 text-white/85 hover:border-white/50 hover:text-white"
              }`}
            >
              <Icon className="size-7 sm:size-8" />
              {t}
            </button>
          );
        })}
      </div>

      {/* Revealed once a type is picked */}
      <div className={`grid transition-[grid-template-rows] duration-500 ${type ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <div className="grid gap-2 pt-2 sm:grid-cols-2">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              autoComplete="name"
              tabIndex={type ? 0 : -1}
              className="rounded-xl border border-white/15 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/45 focus:border-white/60 focus:outline-none"
            />
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
              type="tel"
              autoComplete="tel"
              tabIndex={type ? 0 : -1}
              className="rounded-xl border border-white/15 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/45 focus:border-white/60 focus:outline-none"
            />
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => start({ type, name, phone })}
        className="mt-2 flex w-full items-center justify-center gap-3 rounded-xl bg-white px-5 py-3.5 text-sm text-ink transition-colors hover:bg-white/85"
      >
        {site.cta}
        <Arrow />
      </button>
    </div>
  );
}

/** Quiet secondary link under the starter. */
export function ProcessLink() {
  return (
    <a href="#steps" className="mt-5 inline-flex items-center gap-2 text-[13px] text-white/70 underline-offset-4 hover:text-white hover:underline">
      {steps.eyebrow}
      <Arrow className="size-3 rotate-[135deg]" />
    </a>
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
  const [v, setV] = useState({ name: "", phone: "", email: "", type: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const on = (e: Event) => {
      const d = (e as CustomEvent<Start>).detail;
      setV((cur) => ({
        ...cur,
        type: d.type || cur.type,
        name: d.name || cur.name,
        phone: d.phone || cur.phone,
      }));
      // Land the cursor on the first field still empty.
      setTimeout(() => {
        const first = ["name", "phone", "email"].find((k) => !(k === "name" ? d.name : k === "phone" ? d.phone : ""));
        (document.querySelector(`#contact [name=${first}]`) as HTMLInputElement | null)?.focus({ preventScroll: true });
      }, 600);
    };
    window.addEventListener(EVENT, on);
    return () => window.removeEventListener(EVENT, on);
  }, []);

  const bind = (k: keyof typeof v) => ({
    name: k,
    value: v[k],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setV({ ...v, [k]: e.target.value }),
  });

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (WEB3FORMS_KEY) {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: WEB3FORMS_KEY, subject: `Website enquiry — ${v.type}`, ...v }),
      });
      setSent(true);
      return;
    }
    const body = Object.entries(v)
      .map(([k, val]) => `${k}: ${val}`)
      .join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Website enquiry — ${v.type}`)}&body=${encodeURIComponent(body)}`;
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
            <input {...bind("name")} required placeholder="Name" className={field} autoComplete="name" />
            <input {...bind("phone")} required placeholder="Phone" className={field} type="tel" autoComplete="tel" />
            <input {...bind("email")} required placeholder="Email" className={`${field} sm:col-span-2`} type="email" autoComplete="email" />
            <select {...bind("type")} required className={`${field} sm:col-span-2 ${v.type ? "" : "text-white/40"}`}>
              <option value="" disabled>
                Project type
              </option>
              {projectTypes.map((t) => (
                <option key={t} value={t} className="text-ink">
                  {t}
                </option>
              ))}
            </select>
            <textarea {...bind("message")} rows={3} placeholder="Message" className={`${field} resize-none sm:col-span-2`} />
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
