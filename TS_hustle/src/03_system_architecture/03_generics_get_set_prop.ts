// GOAL: Master dynamic property reading and mutation by matching key arguments with object shapes via lookup constraints.

type UserN7 = {
  id: string;
  name: string;
  email?: string;
};

// 1. Dynamic Getter Engine
// Extracts the exact type of T[K] at compile time
function getUserPropN7<T, K extends keyof T>(objN7: T, keyN7: K): T[K] {
  return objN7[keyN7];
}

const uN7: UserN7 = {
  id: "u1",
  name: "sangam",
};

// TS infers idValN7 is strictly a 'string'
const idValN7 = getUserPropN7(uN7, "id");
console.log("Initial ID:", idValN7); // Output: u1

// 2. Dynamic Setter Engine (In-place Mutation Type-Safety)
// Enforces that newVal perfectly satisfies the type declaration bound to T[K]
function setUserPropN7<T, K extends keyof T>(
  objN7: T,
  keyN7: K,
  newVal: T[K],
): void {
  objN7[keyN7] = newVal;
}

// Executing object modifications safely
setUserPropN7(uN7, "name", "afnan");
setUserPropN7(uN7, "id", "u2");

console.log("Updated Object State:", uN7);
// Output: { id: 'u2', name: 'afnan' }

// setUserPropN7(uN7, "name", 12345);
// ❌ Compile Error: Argument of type 'number' is not assignable to parameter of type 'string'.
