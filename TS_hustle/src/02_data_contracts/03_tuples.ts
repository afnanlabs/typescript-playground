// GOAL: Master Tuples, evaluate strict structural order over arrays, and implement optional elements and immutability rules.

// 1. Core Tuple Contract (Fixed Length & Fixed Ordered Types)
// Unlike an array of unions (string | number)[], a tuple enforces the exact type positioning at specific indices.
const userEntry: [string, number] = ["sangam", 29];

// 2. Optional Tuple Elements (Labeled for better API context)
// Labeled tuples provide naming hints inside IDE autocompletion panels.
type ResponseRow = [status: number, message?: string];

const r11: ResponseRow =[200]; // Valid: Optional message element is omitted.
const r12: ResponseRow = [404, "Not Found"]; // Valid: Optional message element is explicitly provided.

// 3. Deep Immutability: Readonly Tuples
// Populated with coordinate data vectors. Adding 'readonly' prevents post-initialization index alterations.
const corners: readonly [number, number] =;

// Compile Errors: All value overrides are blocked on read-only structures.
// corners = 0;