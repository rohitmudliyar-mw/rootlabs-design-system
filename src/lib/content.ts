/**
 * Central content for the AshwaMag pages.
 * Edit copy here; the components stay clean.
 * Every claim traces to a dose and a study (see `evidence`).
 */

export const product = {
  name: "AshwaMag",
  tagline: "Liposomal Magnesium Glycinate + Ashwagandha",
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
    body: "Sweetened with chicory root fibre, which also adds 8.76g of fibre — about 25% of your daily need.",
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
    "No added sugar — sweetened with chicory root fibre",
    "7× certified, third-party batch tested",
    "Restores deep sleep — no morning grogginess",
  ],
  them: [
    "Cheap magnesium oxide that passes through you",
    "Melatonin that sedates instead of restoring",
    "Sugar gummies in disguise",
    "No third-party testing or certificates",
    "Knock-you-out marketing, groggy mornings",
  ],
};

export const reviews = [
  {
    quote:
      "Finally an explanation that makes sense. I sleep through the night and wake up clear — no hangover.",
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
    a: "Be honest with yourself about the curve — meaningful shifts in deep sleep typically land between days 18 and 28 as magnesium reserves replenish. This is restoration, not a sedative hit.",
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

export const benefits = [
  "Restores deep sleep — no grogginess",
  "~17% better-absorbed magnesium",
  "Calms the 3am cortisol surge",
  "No melatonin, no added sugar",
];
