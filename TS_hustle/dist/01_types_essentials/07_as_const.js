// GOAL: Master 'as const' literal locking to dynamically derive type definitions directly from runtime data structures.
// 1. Literal Locking using a Const Assertion
// Without 'as const', this would be inferred as a generic string array: string[].
// With 'as const', it becomes a deeply immutable, read-only tuple of exact string literal types:
// readonly ["admin", "user", "operators"]
const ROLES = ["admin", "user", "operators"];
// 3. Functional Execution Contract
// The function now strictly accepts only values matching the derived 'Role' union type.
function setRole(r) {
    console.log(r);
}
setRole("user"); // Valid: Matches a literal element within the derived union.
export {};
// setRole("superadmin"); // Compile Error: Argument is not assignable to type 'Role'.
