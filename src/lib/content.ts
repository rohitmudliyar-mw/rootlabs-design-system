/**
 * Central content for the AshwaMag pages.
 * Edit copy here; the components stay clean.
 * Every claim traces to a dose and a study (see `evidence`).
 */

export const product = {
  name: "AshwaMag",
  category: "Sleep",
  tagline: "Liposomal Magnesium Glycinate + Ashwagandha",
  overview:
    "A 3-in-1 nightly gummy: liposomal magnesium glycinate, KSM-66 ashwagandha, and L-theanine, dosed to restore deep sleep.",
  featureCallout: "Liposomal blend from clinically-studied actives",
  promise: "Rested, not sedated.",
  rating: 4.8,
  reviewCount: 2417,
  prices: {
    subscribe: 42,
    oneTime: 52,
  },
  supplyDays: 30,
};

export const reasons = [
  {
    title: "Best-absorbed magnesium",
    body: "A liposomal lipid layer carries magnesium glycinate past stomach acid for ~17% better absorption. Oxide passes through you. This does not.",
  },
  {
    title: "Built for deep sleep",
    body: "675mg magnesium glycinate, 200mg KSM-66 ashwagandha, 26mg L-theanine. Dosed to restore deep sleep, not just knock you out.",
  },
  {
    title: "No sugar",
    body: "Sweetened with chicory root fibre, which also adds 8.76g of fibre, about 25% of your daily need.",
  },
  {
    title: "7× certified",
    body: "Backed by 7 certifications and batch-by-batch Eurofins testing, with a certificate of authentication on every lot.",
  },
];

export const ingredients = [
  { name: "Magnesium glycinate", dose: "675 mg" },
  { name: "KSM-66 ashwagandha", dose: "200 mg" },
  { name: "L-theanine", dose: "26 mg" },
];

export const mechanism = [
  {
    n: 1,
    title: "Lipid shell",
    body: "Magnesium is encased in a lipid bilayer that mimics the body's fat-soluble carriers.",
  },
  {
    n: 2,
    title: "Survives stomach acid",
    body: "The shell protects the mineral through the gut instead of dumping it all at once.",
  },
  {
    n: 3,
    title: "Sustained release",
    body: "Steady intestinal absorption across roughly 12 hours, with about 17% better uptake.",
  },
];

export const evidence = [
  {
    claim: "−17 min faster sleep onset vs. placebo.",
    source: "Abbasi et al., 2012",
    active: "Magnesium glycinate",
  },
  {
    claim: "+72% sleep quality vs. placebo.",
    source: "Langade et al., 2019",
    active: "KSM-66 ashwagandha",
  },
  {
    claim: "Improved sleep latency in clinical context.",
    source: "Hidese et al., 2019",
    active: "L-theanine",
  },
];

export const comparison = {
  us: [
    "Liposomal magnesium glycinate, ~17% better absorbed",
    "KSM-66 ashwagandha at a clinical 200mg dose",
    "No added sugar, sweetened with chicory root fibre",
    "7× certified, third-party batch tested",
    "Restores deep sleep, no morning grogginess",
  ],
  them: [
    "Cheap magnesium oxide that passes through you",
    "Melatonin that sedates instead of restoring",
    "Sugar gummies in disguise",
    "No third-party testing or certificates",
    "Knock-you-out marketing, groggy mornings",
  ],
};

/**
 * Video reviews, a simple swipeable row. Posters reuse existing imagery as
 * placeholders; swap in real video stills/embeds later.
 */
export const videoReviews = [
  { name: "Dana R.", note: "Sleeps through the night now", poster: "/product/lifestyle-man.jpg" },
  { name: "Priya M.", note: "The 3am wakeups stopped", poster: "/product/scene-3am.svg" },
  { name: "Marcus T.", note: "Wakes up clear, no fog", poster: "/product/gummies-bowl.jpg" },
  { name: "Dr. Lena K.", note: "I recommend it to patients", poster: "/product/lifestyle-man.jpg" },
];

export const reviews = [
  {
    quote:
      "Finally an explanation that makes sense. I sleep through the night and wake up clear, no hangover.",
    name: "Dana R.",
    meta: "Verified buyer · 41",
    rating: 5,
  },
  {
    quote:
      "I used to wake at 3am wired but tired. Around week three that stopped. The science sold me, the sleep kept me.",
    name: "Priya M.",
    meta: "Verified buyer · 38",
    rating: 5,
  },
  {
    quote:
      "I read labels obsessively. This is the first sleep product I'd actually recommend to patients.",
    name: "Dr. Lena K.",
    meta: "Verified buyer · 47",
    rating: 5,
  },
];

export const faqs = [
  {
    q: "When will I feel a difference?",
    a: "Be honest with yourself about the curve. Meaningful shifts in deep sleep typically land between days 18 and 28 as magnesium reserves replenish. This is restoration, not a sedative hit.",
  },
  {
    q: "Will it make me groggy in the morning?",
    a: "No. AshwaMag has no melatonin and no sedatives. It replenishes the chemistry deep sleep depends on, so you wake rested rather than knocked out.",
  },
  {
    q: "How do I take it?",
    a: "Two gummies nightly, about 30 minutes before bed. Each bottle is a 30-day supply.",
  },
  {
    q: "What makes the magnesium different?",
    a: "A liposomal lipid layer carries magnesium glycinate past stomach acid for roughly 17% better absorption and a steady release across ~12 hours. Magnesium oxide largely passes through you.",
  },
  {
    q: "Is it third-party tested?",
    a: "Yes. Every lot is batch-tested by Eurofins and backed by 7 certifications, with a certificate of authentication available for each batch.",
  },
];

export const certifications = [
  "Third-party tested",
  "No added sugar",
  "Hormone-free",
  "No melatonin",
  "Vegan",
  "GMP",
  "Non-GMO",
];

export const productImages = [
  {
    src: "/product/pouch-hero.png",
    alt: "Root Labs Liposomal Magnesium + Ashwagandha gummies pouch",
  },
  {
    src: "/product/gummies-bowl.jpg",
    alt: "Berry gummies falling into a glass bowl",
  },
  {
    src: "/product/lifestyle-man.jpg",
    alt: "A man holding a single Root Labs gummy",
  },
];

/**
 * The cortisol-magnesium loop section (AshwaMag's own framing). Headline is
 * split so one word can be set in italic.
 */
export const magnesiumLoop = {
  eyebrow: "The cortisol-magnesium loop",
  headline: { lead: "You need the", emph: "right", tail: "magnesium." },
  body: "After 35, cortisol burns through your magnesium every night.",
  scene: {
    image: "/product/scene-3am.svg",
    time: "3:17",
    meridiem: "AM",
    caption: "Wired. Tired. Heart racing.",
  },
};

/**
 * The hidden cycle behind poor sleep, a 4-step vertical timeline (AshwaMag's
 * own education content). Progressive reveal on each pointer.
 */
export const hiddenCycle = {
  heading: "The hidden cycle behind poor sleep.",
  steps: [
    {
      n: "01",
      title: "Estrogen & progesterone drop",
      body: "After 35, both hormones decline year over year. Both normally buffer the stress response and protect deep sleep.",
      stat: null,
    },
    {
      n: "02",
      title: "Cortisol surges at 3 AM",
      body: "Without that buffer, the HPA axis fires mid-cycle. Cortisol peaks when it should be at its lowest point of the night.",
      stat: "+200% above baseline",
    },
    {
      n: "03",
      title: "Magnesium depletes",
      body: "Cortisol burns through magnesium faster than diet can replace it. Magnesium is the mineral that tells the stress response to shut off.",
      stat: "~50% of US adults deficient",
    },
    {
      n: "04",
      title: "Deep sleep collapses",
      body: "With no magnesium to brake cortisol, REM and slow-wave sleep never deepen. You wake unrested, and the cycle repeats.",
      stat: null,
    },
  ],
};

/**
 * Pack options for the reference-style buy panel, chosen via a 3-point slider.
 * `sub` is the subscribe price (the primary path), `once` the one-time price.
 * One pack = 60 gummies = a 30-day supply.
 */
export const packs = [
  { name: "1-Pack", supply: "30-day supply", sub: 25, once: 32, save: 18, perPack: 25, badge: null },
  { name: "2-Pack", supply: "60-day supply", sub: 46, once: 51, save: 22, perPack: 23, badge: "Most popular" },
  { name: "3-Pack", supply: "90-day supply", sub: 57, once: 63, save: 27, perPack: 19, badge: "Best value" },
];

/**
 * Gallery images for the reference-style PDP hero (8 shots). Kept separate from
 * `productImages` so the original /product gallery stays unchanged.
 */
export const galleryImages = [
  { src: "/product/pouch-hero.png", alt: "AshwaMag pouch" },
  { src: "/product/shot-bottle.svg", alt: "AshwaMag bottle, 30-day supply" },
  { src: "/product/gummies-bowl.jpg", alt: "Berry gummies in a glass bowl" },
  { src: "/product/shot-macro.svg", alt: "Single berry gummy, close up" },
  { src: "/product/shot-texture.svg", alt: "60 gummies per bottle" },
  { src: "/product/shot-label.svg", alt: "Supplement facts label" },
  { src: "/product/shot-box.svg", alt: "Recyclable carton" },
  { src: "/product/lifestyle-man.jpg", alt: "Taking AshwaMag before bed" },
];

export const benefits = [
  "Restores deep sleep, no grogginess",
  "~17% better-absorbed magnesium",
  "Calms the 3am cortisol surge",
  "No melatonin, no added sugar",
];

/**
 * Made Traceable, the reference-style ingredient transparency data.
 * For each active we name the dose, the form, why it is there, and where
 * it comes from. Suppliers (KSM-66 / Suntheanine) are the real makers of
 * those branded extracts.
 */
export const traceable = [
  {
    name: "Magnesium glycinate",
    dose: "675 mg",
    form: "Fully-reacted bisglycinate chelate",
    why: "Bound to glycine so it absorbs gently, without the laxative effect of oxide.",
    origin: "Final blend made in the USA, Eurofins batch-tested per lot.",
    image: "/product/swatch-magnesium.svg",
  },
  {
    name: "KSM-66 ashwagandha",
    dose: "200 mg",
    form: "Root-only extract, 5% withanolides",
    why: "The most-studied ashwagandha extract, at the clinical dose shown to support sleep.",
    origin: "KSM-66, sourced from Ixoreal in India.",
    image: "/product/swatch-ashwagandha.svg",
  },
  {
    name: "L-theanine",
    dose: "26 mg",
    form: "Suntheanine, fermented",
    why: "An amino acid from tea leaves that nudges the brain toward calm alpha-wave activity.",
    origin: "Suntheanine, made by Taiyo in Japan.",
    image: "/product/swatch-theanine.svg",
  },
];

/**
 * How to use, the icon-step section. Short instructions, no paragraphs.
 */
export const howToUse = [
  { title: "Two gummies", body: "Your full nightly serving." },
  { title: "30 min before bed", body: "Chew, no water needed." },
  { title: "Nightly", body: "Consistency is what replenishes reserves." },
  { title: "30-day supply", body: "60 gummies per bottle." },
];

/**
 * Certificate of traceability data, mirroring the reference layout's expandable proof
 * sections. Numbers are demo values for the reference brand.
 */
export const traceability = {
  heavyMetals: {
    summary: "Tested below Prop 65 limits, every batch.",
    items: ["Lead", "Arsenic", "Cadmium", "Mercury"],
  },
  certifications: [
    { name: "Eurofins tested", note: "Third-party batch verification" },
    { name: "Non-GMO", note: "No genetically modified inputs" },
    { name: "Vegan", note: "No animal-derived ingredients" },
    { name: "GMP", note: "Good Manufacturing Practice facility" },
  ],
  carbon: {
    metric: "0.9 kg",
    unit: "CO2e per bottle",
    note: "Measured per bottle and offset through verified projects.",
  },
  packaging: {
    metric: "100%",
    unit: "post-consumer recycled",
    note: "Bottle and outer carton, fully recyclable.",
  },
  allergens: {
    summary: "Tested for the major allergens, none detected.",
    items: ["Milk", "Egg", "Soy", "Peanut", "Tree nut", "Wheat", "Fish", "Shellfish"],
  },
  microbiological: {
    summary: "Screened for pathogens on every lot.",
    items: ["Salmonella", "E. coli", "S. aureus", "Yeast & mould"],
  },
};

/**
 * Scientific advisory board, the 5-up expert row. Demo names for the
 * reference brand; avatars render as initials.
 */
export const advisoryBoard = [
  { name: "Dr. Lena Koss", credential: "MD, Sleep Medicine" },
  { name: "Dr. Marcus Bell", credential: "PhD, Pharmacology" },
  { name: "Priya Nair", credential: "RD, Dietetics" },
  { name: "Dr. Ana Reyes", credential: "MD, Integrative Med" },
  { name: "Dr. Tom Vance", credential: "PhD, Clinical Research" },
];

/**
 * Review summary widget data, mirroring the reference layout's rating breakdown.
 */
export const reviewStats = {
  recommendPct: 94,
  distribution: [
    { stars: 5, pct: 78 },
    { stars: 4, pct: 15 },
    { stars: 3, pct: 4 },
    { stars: 2, pct: 2 },
    { stars: 1, pct: 1 },
  ],
  topics: ["Deep sleep", "No grogginess", "Absorption", "Value", "Taste"],
};

/**
 * "You may also like" cards. Reuse existing imagery as placeholders.
 */
export const relatedProducts = [
  {
    name: "Daily Magnesium",
    blurb: "Liposomal magnesium for everyday calm.",
    price: 34,
    image: "/product/pouch-hero.png",
  },
  {
    name: "Sleep Bundle",
    blurb: "AshwaMag plus a magnesium topical.",
    price: 68,
    image: "/product/gummies-bowl.jpg",
  },
  {
    name: "Wind-Down Tea",
    blurb: "Caffeine-free, L-theanine forward.",
    price: 22,
    image: "/product/lifestyle-man.jpg",
  },
];

/**
 * Story blocks, the image-led editorial section (Hims / Hers style).
 * One claim, one stat, one image per block. Keep the copy short.
 */
export const storyBlocks = [
  {
    eyebrow: "Absorption",
    title: "Magnesium your body can actually use",
    body: "A lipid shell carries it past stomach acid for steadier uptake than oxide.",
    stat: { value: "~17%", label: "better absorbed" },
    callout: "Liposomal delivery",
    image: "/product/scene-absorb.svg",
    tone: "mist" as const,
    fit: "cover" as const,
  },
  {
    eyebrow: "Deep sleep",
    title: "Built to restore, not sedate",
    body: "No melatonin. It replenishes the chemistry deep sleep runs on, so mornings stay clear.",
    stat: { value: "0mg", label: "melatonin" },
    callout: "No grogginess",
    image: "/product/scene-night.svg",
    tone: "ink" as const,
    fit: "cover" as const,
  },
  {
    eyebrow: "No sugar",
    title: "Sweetened with fibre, not sugar",
    body: "Chicory root fibre does the sweetening and adds about a quarter of your daily fibre.",
    stat: { value: "8.76g", label: "fibre per serving" },
    callout: "0g added sugar",
    image: "/product/gummies-bowl.jpg",
    tone: "berry" as const,
    fit: "cover" as const,
  },
];
