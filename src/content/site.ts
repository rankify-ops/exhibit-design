/*
 * Every word on the page lives here. All values are placeholders until the
 * client's copy arrives — paste their text in verbatim, nothing else changes.
 */

export const site = {
  name: "Client Name",
  phone: "0000 000 000",
  email: "hello@example.com",
  utility: ["Utility link", "Utility link", "Utility link"],
  nav: ["About", "Projects", "Products", "Resources", "Sustainability"],
  cta: "Contact Us",
};

export const hero = {
  eyebrow: "Est. 0000",
  headline: "Hero headline placeholder, one or two lines.",
  tags: ["Category", "Category", "Category"],
  cta: "Primary call to action",
};

export const pillars = {
  eyebrow: "Section label",
  items: [
    { title: "Pillar one", body: "Short paragraph placeholder. Two to four sentences from the client describing this part of how they work." },
    { title: "Pillar two", body: "Short paragraph placeholder. Two to four sentences from the client describing this part of how they work." },
    { title: "Pillar three", body: "Short paragraph placeholder. Two to four sentences from the client describing this part of how they work." },
  ],
};

export const intro = {
  eyebrow: "Section label",
  headline: "Intro headline placeholder over a full-width image.",
  body: [
    "Intro paragraph placeholder. Who the client is, who they work with and what they deliver.",
    "Second supporting line placeholder.",
  ],
  ctas: ["Secondary action", "Secondary action"],
};

export const browse = {
  eyebrow: "Section label",
  cards: [
    { tag: "Tag", caption: "Card caption" },
    { tag: "Tag", caption: "Card caption" },
    { tag: "Tag", caption: "Card caption" },
    { tag: "Tag", caption: "Card caption" },
  ],
};

export const feature = {
  eyebrow: "Section label",
  slides: [1, 2, 3].map((n) => ({
    title: `Featured item ${n}`,
    body: "Feature paragraph placeholder. A short story about this project or item, three to five sentences.",
    detailLabel: "Detail heading",
    details: ["Detail line placeholder", "Detail line placeholder"],
    cta: "View item",
  })),
};

export const products = {
  eyebrow: "Section label",
  items: [
    { caption: "Image caption", title: "Item title" },
    { caption: "Image caption", title: "Item title" },
    { caption: "Image caption", title: "Item title" },
    { caption: "Image caption", title: "Item title" },
  ],
};

export const latest = {
  eyebrow: "Section label",
  posts: [1, 2, 3].map(() => ({
    tag: "Category",
    title: "Article title placeholder",
    body: "One or two line summary placeholder for this article or update.",
  })),
};

export const ctaBand = {
  eyebrow: "Section label",
  headline: "Closing call-to-action headline?",
  body: "Supporting paragraph placeholder for the closing call to action.",
  ctas: ["Primary action", "Secondary action"],
};

export const why = {
  eyebrow: "Section label",
  items: Array.from({ length: 8 }, (_, i) => ({
    title: `Reason ${i + 1}`,
    body: "Reason paragraph placeholder. Three to four sentences from the client explaining this point in more detail.",
  })),
};

export const footer = {
  tagline: "Footer tagline placeholder.",
  columns: [
    { heading: "Column heading", links: ["Link", "Link", "Link", "Link", "Link"] },
    { heading: "Column heading", links: ["Link", "Link", "Link", "Link", "Link"] },
    { heading: "Column heading", links: ["Link", "Link", "Link", "Link", "Link"] },
  ],
  newsletter: { heading: "Stay in touch", body: "Newsletter line placeholder.", cta: "Join" },
  acknowledgement: "Acknowledgement of Country placeholder.",
  legal: ["Terms & Conditions", "Privacy Policy"],
};
