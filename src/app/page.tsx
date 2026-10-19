import { browse, ctaBand, hero, intro, latest, pillars, products } from "@/content/site";
import { Btn, Eyebrow, Ph } from "@/components/ui";
import { FeatureSlider, WhyChoose } from "@/components/Interactive";

export default function Home() {
  return (
    <>
      {/* Hero: full-bleed photo/video, centred light headline */}
      <section className="ph-dark relative flex min-h-[calc(100svh-64px)] items-center justify-center overflow-hidden text-white md:min-h-[calc(100svh-96px)]">
        <span className="absolute right-4 top-4 text-[11px] text-white/40">Hero photo / video</span>
        <div className="absolute inset-0 bg-black/25" aria-hidden />
        <div className="relative px-5 text-center">
          <p className="text-[13px]">{hero.eyebrow}</p>
          <h1 className="mx-auto mt-5 max-w-3xl text-4xl leading-[1.1] md:text-5xl">{hero.headline}</h1>
          <p className="mt-5 flex items-center justify-center gap-5 text-[15px]">
            {hero.tags.map((t, i) => (
              <span key={i} className="flex items-center gap-5">
                {i > 0 && <span aria-hidden>—</span>}
                {t}
              </span>
            ))}
          </p>
          <div className="mt-10">
            <Btn tone="light" href="#browse">
              {hero.cta}
            </Btn>
          </div>
        </div>
        <p className="absolute bottom-8 left-5 hidden text-[13px] md:left-10 md:block xl:left-20">{hero.tags.join("  ·  ")}</p>
        <svg viewBox="0 0 20 20" className="absolute bottom-7 left-1/2 size-5 -translate-x-1/2" fill="none" stroke="currentColor" aria-hidden>
          <path d="m4 7 6 6 6-6" />
        </svg>
      </section>

      {/* Three pillars with hairline dividers */}
      <section className="wrap py-16 md:py-28">
        <Eyebrow>{pillars.eyebrow}</Eyebrow>
        <div className="mt-8 grid gap-10 md:grid-cols-3 md:gap-0">
          {pillars.items.map((p, i) => (
            <div key={i} className="md:border-l md:border-rule md:px-10 md:first:border-l-0 md:first:pl-0">
              <h2 className="text-2xl">{p.title}</h2>
              <p className="mt-5 text-sm leading-relaxed text-ink-2">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Intro over a full-width image band */}
      <section className="ph-dark relative text-white">
        <span className="absolute right-4 top-4 text-[11px] text-white/40">Wide feature photo</span>
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
              {intro.ctas.map((c, i) => (
                <Btn key={i} tone="light">
                  {c}
                </Btn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Browse: four tall cards with tag pill + caption */}
      <section id="browse" className="wrap py-16 md:py-28">
        <Eyebrow>{browse.eyebrow}</Eyebrow>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {browse.cards.map((c, i) => (
            <a key={i} href="#" className="group relative block overflow-hidden">
              <Ph label={`Card photo ${i + 1}`} className="aspect-[3/4] transition-transform duration-700 group-hover:scale-[1.03]" />
              <span className="absolute left-4 top-4 rounded-full bg-black/30 px-3 py-1 text-[11px] text-white backdrop-blur-sm">{c.tag}</span>
              <span className="absolute bottom-4 left-4 text-[13px] text-ink underline underline-offset-4">{c.caption}</span>
            </a>
          ))}
        </div>
      </section>

      <FeatureSlider />

      {/* Featured items: tall photos, title underneath */}
      <section className="wrap py-16 md:py-24">
        <Eyebrow>{products.eyebrow}</Eyebrow>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.items.map((p, i) => (
            <a key={i} href="#" className="group block">
              <div className="relative overflow-hidden">
                <Ph label={`Item photo ${i + 1}`} className="aspect-[3/4] transition-transform duration-700 group-hover:scale-[1.03]" />
                <span className="absolute bottom-4 left-4 text-[12px] text-ink underline underline-offset-4">{p.caption}</span>
              </div>
              <p className="mt-3 text-sm">{p.title}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Latest: grey band, three image + white text cards */}
      <section className="bg-mist py-16 md:py-28">
        <div className="wrap">
          <Eyebrow>{latest.eyebrow}</Eyebrow>
          <div className="mt-6 grid gap-6 md:grid-cols-3 lg:gap-10">
            {latest.posts.map((p, i) => (
              <a key={i} href="#" className="group block bg-white">
                <div className="overflow-hidden">
                  <Ph label={`Article photo ${i + 1}`} className="aspect-[4/3] transition-transform duration-700 group-hover:scale-[1.03]" />
                </div>
                <div className="p-6">
                  <p className="text-[11px] uppercase tracking-wider text-ink-3">{p.tag}</p>
                  <h3 className="mt-2 text-lg">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-3">{p.body}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Closing call to action */}
      <section id="contact" className="bg-ink py-16 text-white md:py-28">
        <div className="wrap grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <Eyebrow className="!text-white/50">{ctaBand.eyebrow}</Eyebrow>
            <h2 className="mt-3 text-3xl md:text-4xl">{ctaBand.headline}</h2>
          </div>
          <div>
            <p className="text-sm leading-relaxed text-white/70">{ctaBand.body}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Btn tone="light" solid>
                {ctaBand.ctas[0]}
              </Btn>
              <Btn tone="light">{ctaBand.ctas[1]}</Btn>
            </div>
          </div>
        </div>
      </section>

      <WhyChoose />
    </>
  );
}
