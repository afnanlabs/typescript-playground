// GOAL: Master the architectural boundary between 'any' (un-defended) and 'unknown' (type-safe top type).
// 1. The Hazard of 'any'
let looselyTyped = "Hello World";
looselyTyped = 40;
looselyTyped.toUpperCase();
// 👍 Compiles fine, but 💥 CRASHES at runtime because .toUpperCase() doesn't exist on a number!
// 2. The Defense of 'unknown'
let securelyTyped = "Hello World";
securelyTyped = 40;
securelyTyped = [];
// securelyTyped.toUpperCase();
// ❌ Compile Error: Object is of type 'unknown'. TS forces safety first!
// 3. Narrowing the Unknown Barrier
let samplePayload = "Afnan Khan";
// Type Guard Checkpoint:
if (typeof samplePayload === "string") {
    // Within this block, TS safely narrows the type down from 'unknown' to 'string'
    console.log("String length:", samplePayload.length); // Output: 10
}
if (Array.isArray(samplePayload)) {
    console.log("Array items element count:", samplePayload.length);
}
export {};
