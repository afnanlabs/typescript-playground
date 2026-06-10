// GOAL: Master Array contract declarations, generic notation vs. bracket syntax, and collection widening rules.

// Syntax Type A: Square Bracket Notation (Industry Standard)
// Explicitly binds the collection contract to hold only the specified primitive type.
const a11: number[] = [1, 2, 3];

// Syntax Type B: Generic Array Utility Notation
// Achieves identical compilation outcomes as bracket notation. Highly useful when writing abstract generic classes.
const a22: Array<number> = [1, 2, 3, 4];

// Compilation Mechanics: Implicit Collection Tracking
// TypeScript automatically infers 'scores' as a strict 'number[]' based on the initial array literal elements.
const scores = [10, 20, 30, 40];

// Compile Error: Argument of type 'string' is not assignable to parameter of type 'number'.
// The array contract locks down mutability to prevent runtime type pollution.
// scores.push('40');

// Heterogeneous Collections: The Array of Unions
// Parentheses are mandatory when combining the union operator with array brackets.
// This allows indices to safely hold a dynamic mix of both strings and numbers within a single container.
const mix: (string | number)[] = [1, "2", 3, "4"];
