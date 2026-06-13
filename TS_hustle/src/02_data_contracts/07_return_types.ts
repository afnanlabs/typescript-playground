// GOAL: Master return type inference, explicit public function contracts, conditional narrowing returns, and async Promise wrappers.

// 1. Implicit Function Return Inference
// TypeScript automatically infers the return type as 'number' based on the evaluation result of 'n * 2'.
const doubleFunc = (n: number) => n * 2;

// 2. Explicit Return Contract for Public Interfaces
// Best Practice: Always declare explicit return types on exported functions to maintain API stability across modules.
export function toTitle(s: string): string {
  return `Hello ${s}`;
}

// 3. Conditional Branch Return Narrowing
// Every single execution path must satisfy the designated 'number' return signature.
function booleanToNumber(flag: boolean): number {
  if (flag) {
    return 1;
  } else {
    return 0;
  }
}

// 4. Asynchronous Return Wrapping
// Async functions automatically wrap their inferred or explicit return evaluations inside a native 'Promise' wrapper.
async function loadCountInfered() {
  return 42; // Inferred return signature: Promise<number>
}

loadCountInfered().then((n) => console.log());
