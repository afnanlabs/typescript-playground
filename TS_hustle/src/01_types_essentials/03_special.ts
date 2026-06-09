// GOAL: Master TypeScript's special types (void, never, any) and control safety behaviors using configuration flags.

// Configuration: strictNullChecks
// When enabled, values like 'null' or 'undefined' cannot be assigned to strict primitives.
// let title: string = "intro";
// title = undefined; // Compiler Error under strictNullChecks

// Union types must be used explicitly when a variable can legitimately hold an absent value.
let subtitle: string | undefined = "afnan khan";

// Type: void
// Explicitly indicates that a function intentionally returns no value (returns undefined at runtime).
// Commonly used for side-effects like logging or updating local mutations.
function log(msg: string): void {
  console.log(msg);
}

// Type: never
// Represents a value that can never occur. Used for functions that never complete their execution path,
// either by throwing a runtime exception or entering an infinite execution loop.
function fail(msg: string): never {
  throw new Error(msg);
}

// Type: any (Deactivates Type-Checking)
// Completely disables static analysis for the targeted variable, matching standard dynamic JavaScript behavior.
// Risk: Postpones structural type validation to runtime, allowing unsafe property access to compile cleanly.
const valueAny: any = JSON.parse('{"x" : 1}');
valueAny.notThere.toFixed(2); // Compiles successfully but throws a TypeError at runtime. Avoid using 'any'.

// Type: unknown (The Safe Alternative to any)
// A type-safe counterpart to 'any'. It accepts any assignment, but forces structural validation
// or type narrowing before any properties can be read or methods invoked.
const valueUnknown: unknown = JSON.parse('{"x" : 1}');
// valueUnknown.notThere; // Compiler Error: Object is of type 'unknown'.
if (valueUnknown && typeof valueUnknown === "object" && "x" in valueUnknown) {
  console.log((valueUnknown as { x: number }).x); // Safe extraction after narrowing
}
