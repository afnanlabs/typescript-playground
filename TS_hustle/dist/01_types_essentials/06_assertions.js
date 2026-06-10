// GOAL: Master type assertions vs runtime type guards, and implement defensive parsing strategies for external data inputs.
const raw = `{
  "id": 1,
  "name" : "A"
}`;
// Case 1: Compile-Time Type Assertion ('as')
// The 'as' keyword forces the compiler to override its internal inference logic and trust your structural claim.
// Risk: This is an untrusted assertion. If the 'raw' JSON string structure changes at runtime (e.g., missing properties),
// this code will still compile but can immediately throw runtime errors when accessing properties.
const riskyUser = JSON.parse(raw);
console.log(riskyUser.name);
// Case 2: Runtime Type Guard Validation ('v is User22')
// A type predicate ('parameterName is Type') forces TypeScript to narrow the verified variable's type
// inside any downstream conditional block where this function evaluates to true.
function isUser(v) {
    return (typeof v === "object" &&
        v !== null &&
        "id" in v &&
        "name" in v &&
        typeof v.id === "number" &&
        typeof v.name === "string");
}
// Production-Safe Pipeline Strategy
// 1. Force the dynamic API data into the 'unknown' shield container.
const maybe = JSON.parse(raw);
// 2. Perform exhaustive runtime checks before executing domain logic.
if (isUser(maybe)) {
    // Safe: Inside this block, the compiler knows with absolute certainty that 'maybe' matches the User22 shape.
    console.log(maybe.name);
}
export {};
