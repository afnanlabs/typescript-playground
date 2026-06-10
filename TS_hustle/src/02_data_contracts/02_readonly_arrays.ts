// TS Compiler Alert: "Expression expected" error if left unassigned:
// const faultyReadonly: readonly number[] = ;

const yes: readonly number[] = [1, 2, 3, 4];
const maybe = [1, 2, 3, 4];

// Generic Utility Form
const noo: ReadonlyArray<number> = [1, 2, 3, 4];

maybe[0] = 9; // Valid: Standard arrays are mutable by default.

// Compile Errors: Property 'push' / 'splice' does not exist on type 'readonly number[]'.
// yes.push(3);
// yes.splice(0, 1); // Mutating operations are completely blocked.

// Production Best Practice: Protecting function parameters from side-effects.
function sum(nums: readonly number[]): number {
  let s = 0;
  for (const n of nums) s += n;
  return s;
}

// Architectural Rule: Assigning or passing a mutable array (wider constraint)
// into a readonly parameter (narrower constraint) is perfectly valid.
console.log(sum(maybe));

// Valid Execution: Readonly arrays can still use non-mutating transformation methods.
// The .map() method returns a completely new, standard mutable array array allocation.
const res = yes.map((n) => n * 8);
