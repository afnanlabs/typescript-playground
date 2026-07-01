// GOAL: Master Advanced Union Manipulations to filter, isolate, and sanitize type sets at compile time.

// 1. Exclude<Union, ExcludedMembers> (Set Difference)
// Removes matching variants from a union set.

type EventType1 = "click" | "submit" | "hover" | "keydown" | "keyup";
type EventType2 = Exclude<EventType1, "keydown">;
// Evaluates to: "click" | "submit" | "hover" | "keyup"

function handleEvent1(e: EventType2) {
  console.log("Valid event processed:", e);
}

// handleEvent1("keydown");
// ❌ Compile Error: Argument of type '"keydown"' is not assignable to parameter of type 'EventType2'.

// 2. Extract<Union, ExtractedMembers> (Set Intersection)
// Keeps only the matching variants common to both sets.

type ActionN1 = "create" | "update" | "delete" | "read";
type ActionN2 = Extract<ActionN1, "create" | "update" | "delete">;
// Evaluates to: "create" | "update" | "delete"

function handleEvent2(e: ActionN2) {
  console.log("Executing safe database modification action:", e);
}

// handleEvent2("read");
// ❌ Compile Error: Argument of type '"read"' is not assignable to parameter of type 'ActionN2'.

// 3. NonNullable<Union> (Nullish Filtering)
// Strips strict 'null' and 'undefined' states directly from a type domain.

type MayBeNumber = number | null | undefined;
type CleanNumber = NonNullable<MayBeNumber>;
// Evaluates to: number

function square(number: CleanNumber): number {
  return number * number; // Fixed logic bug (changed from number * 2 to square value)
}

console.log("Square Result:", square(10)); // Output: 100
// square(null);
// ❌ Compile Error: Argument of type 'null' is not assignable to parameter of type 'number'.
