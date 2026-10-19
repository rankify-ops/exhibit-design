/*
 * Every word on the page lives here.
 *
 * Copy is verbatim from exhibitdesign.com.au (home, our-philosophy,
 * building-with-us, steps-to-your-new-home) unless marked PLACEHOLDER.
 * Brief from the call with Petar: architect + builder, every home custom
 * designed for its block and built start to finish by the same team; no
 * generic plans, no client portal, portfolio-led, keep it simple.
 */

export const site = {
  name: "Exhibit Design + Construction",
  short: "Exhibit",
  phone: "02 6109 7770",
  // Their site shows Construction@ but the mailto goes to Ben@ — confirm which.
  email: "Construction@exhibitdesign.com.au",
  instagram: "https://www.instagram.com/exhibit_design_construction/",
  facebook: "https://www.facebook.com/exhibitdesignconstruction/",
  nav: [
    { label: "Projects", href: "#projects" },
    { label: "Our Philosophy", href: "#philosophy" },
    { label: "Building with us", href: "#steps" },
    { label: "Contact Us", href: "#contact" },
  ],
  cta: "Make an enquiry",
};

// Deposit categories from their Steps page, reused to qualify enquiries.
export const projectTypes = ["New Site", "House + Land package", "Knock Down Rebuild"];

export const hero = {
  eyebrow: "Canberra",
  headline: "Architectural house design and construction in Canberra.",
  tags: ["Design", "Build", "Live"],
  cta: "Make an enquiry",
};

export const pillars = {
  eyebrow: "Our Philosophy",
  items: [
    {
      title: "Design Team",
      body: "Our talented in-house design team are available to meet with you to discuss your family’s needs and lifestyle requirements. We want your home to be functional without compromising your design brief. Our company’s unique design/build structure means that complete customisation is easy and stress-free.",
    },
    {
      title: "Flexibility",
      body: "Our team tackles each project differently. We’ll work with you to meet your brief, regardless of a difficult block or design idea. From amending an existing design to creating your own, we can adjust features and specifications so we can execute your vision.",
    },
    {
      title: "Communication",
      body: "We want our clients to be confident throughout their home building journey and that cannot be achieved without clear lines of communication. We are completely transparent at all stages and accessible at all levels – whether you’d like to meet with our head designer or talk to the company directors, we’re happy to arrange this for you to give you peace of mind.",
    },
  ],
};

export const intro = {
  eyebrow: "Design | Build | Live",
  headline: "A design isn’t finished until someone is using it.",
  body: [
    "We value your decision to build with us and we’ll treat your home as if it were our own. Whether it’s your dream home or an investment property, we do not lose sight of the fact that our contribution is essential to you achieving your goals.",
    "Our staff understand that building a home is a colossal undertaking for you and they are available at every stage of the building process.",
  ],
  ctas: [
    { label: "Our Philosophy", href: "#philosophy" },
    { label: "Make an enquiry", href: "#contact" },
  ],
};

// Project names from their portfolio. Photos + write-ups come from the Dropbox.
export const projects = {
  eyebrow: "Residential",
  cards: [
    { suburb: "Casey ACT", name: "Renouf St" },
    { suburb: "Forde ACT", name: "Retz Cres" },
    { suburb: "Googong NSW", name: "Baxter Loop" },
    { suburb: "Jacka ACT", name: "Starcevich Cres" },
  ],
};

export const feature = {
  eyebrow: "Residential",
  slides: [
    { title: "Patrick Shaw St, Casey ACT" },
    { title: "Turbayne Cres, Forde ACT" },
    { title: "Buchan Residence" },
  ].map((s) => ({
    ...s,
    body: "PLACEHOLDER — project write-up from the case studies.",
    cta: "View project",
  })),
};

// First paragraph (or the most relevant one) of each step, verbatim.
export const steps = {
  eyebrow: "Steps to your new home",
  // Petar on the call (2026-10-19), lightly trimmed — confirm wording with him.
  headline: "Architect and builder — everything from start to finish.",
  quote: "The same person that’s talking to you about the design is the same person that’s executing the design.",
  // Their tagline split across the steps: index ranges into items.
  phases: [
    { label: "Design", span: 2 },
    { label: "Build", span: 4 },
    { label: "Live", span: 1 },
  ],
  items: [
    {
      title: "Say Hello",
      body: "Take this opportunity to discuss your budget, needs and aspirations one-on-one with our sales team. They will ask you about your land requirements, whether you already have land or need a house & land package.",
    },
    {
      title: "Bring your design to life",
      body: "You will meet with the design team to make decisions about the design, modifications and inclusions. At this stage, the architectural plans will be done. This will include a detailed site plan, floor plan and 3d elevation perspectives.",
    },
    {
      title: "Contracts and Exchange",
      body: "We will provide you with a Master Builders Association (MBA) building contract to review and sign. Generally, you will exchange on 10% building contract and if applicable, 10% land contract.",
    },
    {
      title: "Approvals",
      body: "At this point we will have commenced design (DA) and building (BA) approvals, ordered contour surveys, energy ratings, engineering, prepared and lodged the architectural plans with the private certifier and procured lead-time items (windows, frames etc).",
    },
    {
      title: "Colour Selections",
      body: "Colour selection is one of the most exciting steps for our clients. You will have the opportunity to make design decisions for interior and exterior parts of the home. Our suppliers will work alongside you to choose the final products, colours and finishes for the various new products being installed.",
    },
    {
      title: "Construction and Handover",
      body: "Once the land has been titled or cleared, it’s time for Exhibit Design & Construction site team to take the lead. At this stage, we ensure that construction is in accordance with the approved plans, selections and quality controls.",
    },
    {
      title: "Live",
      body: "Congratulations! Your brand new home is complete and ready for you to move in! Relax and enjoy the features, inclusions and lifestyle of your new home.",
    },
  ],
};

export const testimonials = {
  eyebrow: "Building with us",
  items: [
    {
      quote: "Great to deal with and very professional. The design are amazing and the quality is impeccable! Would recommend to anyone.",
      name: "Laine Clair",
    },
    {
      quote: "Right from the beginning, EDC were different! Our first sit down with Ben for more information was a surprise as he had already printed our block out and we designed it together with everything we wanted. Our plan didn’t change much from our original idea. To get proper drawings done, all they asked for was 500$. Petar really took what we wanted and gave us something we were really excited for! You hear bad stories about builders all the time. But this experience has been fantastic right from the start! Highly recommend them!",
      name: "Zaara Svensen",
    },
    {
      quote: "Without a doubt the best home on display in the village. Refreshing to hear that what is displayed is what you get.",
      name: "Ben Harris",
    },
  ],
};

export const contact = {
  eyebrow: "Contact Us",
  headline: "Make an enquiry",
  body: "For all enquiries please contact our Office",
};

export const footer = {
  tagline: "Design | Build | Live",
};
