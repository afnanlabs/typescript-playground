// GOAL: Master dynamic index signatures, utility Record configurations, native ES6 Maps, and explicit undefined safety bounds.

// 1. Classic Index Signature (Open & Dynamic)
// Allows any arbitrary string key, but guarantees that the paired value will always be a number.
type NumberDict = { [k: string]: number };

const counters: NumberDict = {};
counters["Likes"] = 1;
counters["Comments"] = 2;
counters["Shares"] = 200;

// 2. Strict Utility Record (Closed & Exhaustive)
// Best Practice: Restricts keys strictly to the designated union literals. Every single listed key is mandatory.
type Metrics = Record<"likes" | "views" | "shares", number>;

const mm: Metrics = {
  likes: 1,
  views: 100,
  shares: 23,
};

// 3. Native ES6 Map Collection
// Ideal for heavy runtime additions/deletions, custom key lookups, and tracking true collection size properties.
const priceMap = new Map<string, number>();
priceMap.set("likes", 1);

// 4. Loose Value Fallback (Runtime Defended Object)
// Explicitly forces 'undefined' into the type contract. This forces you to write safe checks before executing logic on missing keys.
type LooseMap = Record<string, number | undefined>;

const lm: LooseMap = {};
lm["x"] = undefined;
lm["x"] = 100;
