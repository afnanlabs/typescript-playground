// GOAL: Master Core Primitives & Strict Typing — Learning how TypeScript handles basic data types,
// 64-bit precision safety, unique runtime tokens, and explicit functional input/output contracts.

// Variables & Constants with Type Annotations
let username: string = "Afnan";
let age: number = 40;
let isCreator: boolean = true;

// BigInt: Used for 64-bit integer precision (values beyond 2^63 - 1)
const big: bigint = 2n ** 63n - 1n;

// Type Error: TS blocks operations between 'bigint' and standard 'number' to prevent hidden rounding bugs.
// To fix this, you must explicitly type-cast: const mixed = big + BigInt(age);
// const mixed = big + age

// Unique Symbol: Creates a globally unique, immutable identifier often used as private object keys
const TOKEN: unique symbol = Symbol("TOKEN");

// Function with explicit parameter and return type annotations
// Logic Note: If calculating days from years, it should be multiplied (years * 365), not divided!
function yearsToDay(years: number): number {
  return years * 365;
}

// Using Type-Specific Methods: The compiler safely allows .toUpperCase() because it knows username is a string
console.log(username.toUpperCase());
