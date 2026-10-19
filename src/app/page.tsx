import { hero, intro, pillars, projects, testimonials } from "@/content/site";
import { Btn, Eyebrow, Ph } from "@/components/ui";
import { FeatureSlider, Steps } from "@/components/Interactive";
import { EnquirySection, TypeChips } from "@/components/Enquiry";

export default function Home() {
  return (
    <>
      {/* Hero: full-bleed photo/video, centred light headline, project-type shortcut */}
      <section className="ph-dark relative flex min-h-[calc(100svh-64px)] items-center justify-center overflow-hidden text-white md:min-h-[calc(100svh-96px)]">
        <span className="absolute right-4 top-4 text-[11px] text-white/40">Hero video / photo</span>
        <div className="absolute inset-0 bg-black/25" aria-hidden />
        <div className="relative w-full px-5 text-center">
          <p className="text-[13px]">{hero.eyebrow}</p>
          <h1 className="mx-auto mt-5 max-w-3xl text-4xl leading-[1.1] md:text-5xl">{hero.headline}</h1>
          <p className="mt-5 flex items-center justify-center gap-5 text-[15px]">
            {hero.tags.map((t, i) => (
              <span key={t} className="flex items-center gap-5">
                {i > 0 && <span aria-hidden>—</span>}
                {t}
              </span>
            ))}
          </p>
          <TypeChips />
        </div>
        <svg viewBox="0 0 20 20" className="absolute bottom-7 left-1/2 size-5 -translate-x-1/2" fill="none" stroke="currentColor" aria-hidden>
          <path d="m4 7 6 6 6-6" />
        </svg>
      </section>

      {/* Three pillars with hairline dividers */}
      <section id="philosophy" className="wrap py-16 md:py-28">
        <Eyebrow>{pillars.eyebrow}</Eyebrow>
        <div className="mt-8 grid gap-10 md:grid-cols-3 md:gap-0">
          {pillars.items.map((p) => (
            <div key={p.title} className="md:border-l md:border-rule md:px-10 md:first:border-l-0 md:first:pl-0 md:last:pr-0">
              <h2 className="text-2xl">{p.title}</h2>
              <p className="mt-5 text-sm leading-relaxed text-ink-2">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy line over a full-width image band */}
      <section className="ph-dark relative text-white">
        <span className="absolute right-4 top-4 text-[11px] text-white/40">Wide project photo</span>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" aria-hidden />
        <div className="wrap relative grid gap-8 pb-14 pt-48 md:grid-cols-2 md:pb-20 md:pt-72">
          <div>
            <Eyebrow className="!text-white/60">{intro.eyebrow}</Eyebrow>
            <h2 className="mt-3 max-w-xl text-3xl leading-tight md:text-4xl">{intro.headline}</h2>
          </div>
          <div className="text-sm leading-relaxed text-white/80">
            {intro.body.map((p, i) => (
              <p key={i} className={i ? "mt-4" : ""}>
                {p}
              </p>
            ))}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {intro.ctas.map((c) => (
                <Btn key={c.label} tone="light" href={c.href}>
                  {c.label}
                </Btn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects: four tall cards, suburb pill + project name */}
      <section id="projects" className="wrap py-16 md:py-28">
        <Eyebrow>{projects.eyebrow}</Eyebrow>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.cards.map((c) => (
            <a key={c.name} href="#" className="group block">
              <div className="relative overflow-hidden">
                <Ph label={`${c.name} — photo`} className="aspect-[3/4] transition-transform duration-700 group-hover:scale-[1.03]" />
                <span className="absolute left-4 top-4 rounded-full bg-black/30 px-3 py-1 text-[11px] text-white">{c.suburb}</span>
              </div>
              <p className="mt-3 text-sm">{c.name}</p>
            </a>
          ))}
        </div>
      </section>

      <FeatureSlider />

      <Steps />

      {/* Testimonials: grey band, white cards */}
      <section className="bg-mist py-16 md:py-28">
        <div className="wrap">
          <Eyebrow>{testimonials.eyebrow}</Eyebrow>
          <div className="mt-6 grid items-start gap-6 md:grid-cols-3 lg:gap-10">
            {testimonials.items.map((t) => (
              <figure key={t.name} className="bg-white p-8">
                <blockquote className="text-[15px] leading-relaxed">“{t.quote}”</blockquote>
                <figcaption className="mt-6 text-sm text-ink-3">{t.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <EnquirySection />
    </>
  );
}
