// GOAL: Master structural type narrowing using the 'in' operator, safe object property traversal, and precise nullish vs. falsy evaluations.

type InExample1 = { role: "Admin"; permissions: string[] }; // Fixed leading space typo
type InExample2 = { role: "User"; expiresAt: Date }; // Fixed leading space typo

type UserExample = InExample1 | InExample2;

function describeUserExample(u: UserExample) {
  // The 'in' operator checks if a property exists on an object at runtime and narrows the type block
  if ("permissions" in u) {
    return `Admin ${u.permissions.join(",")}`; // u is safely narrowed to InExample1 here
  }

  return `User ${u.expiresAt.toISOString()}`; // Fixed missing invocation parentheses (). u is InExample2 here
}

console.log(describeUserExample({ role: "Admin", permissions: ["read"] }));

// 2. Avoiding Runtime Crashes (Defensive Engineering)

type ProfileN3 = {
  name: string;
  contact?: { email?: string };
};

const P1N3: ProfileN3 = { name: "John" };
const P2N3: ProfileN3 = { name: "ben", contact: { email: "ben123@gmail.com" } };

// Optional Chaining (?.) short-circuits to returning 'undefined' the moment it hits a missing node
const email1N3 = P1N3.contact?.email;
const email2N3 = P2N3.contact?.email;

// 3. Nullish Coalescing (??) vs. Logical OR (||)

// ?? -> Only falls back if the left side is strict 'null' or 'undefined'
// || -> Falls back if the left side is ANY falsy value (0, "", false, NaN, null, undefined)

const countFromServerN3: number | null = 0;
const labelFromServerN3: string | undefined = "";

const aN3 = countFromServerN3 ?? 100; // Evaluates to 0 (0 is a valid number, not null/undefined)
const bN3 = countFromServerN3 || 100; // Evaluates to 100 (0 is treated as a falsy value)

console.log(aN3); // Output: 0
console.log(bN3); // Output: 100
