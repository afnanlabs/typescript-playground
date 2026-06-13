// GOAL: Comprehend the structural differences between Interfaces and Type Aliases, focusing on Declaration Merging vs. Immutability.

// ==========================================
// 1. INTERFACES: Object Shapes & Merging
// ==========================================
// Interfaces can be reopened and extended anywhere in the application.
// The compiler automatically merges identical interface names together.

interface Box1 {
  width: number; // Corrected lowercase 'number' type for consistency
}

interface Box1 {
  height: number;
}

// Declaration Merging in action: BoxDemo MUST satisfy both fields
const BoxDemo: Box1 = { width: 10, height: 1 };

// ==========================================
// 2. TYPE ALIASES: General, Closed Contracts
// ==========================================
// Type Aliases are final. Once declared, they cannot be reopened or modified.
// They are more flexible, supporting Unions, Intersections, Primitives, and Tuples.

type Bag = { size: number };
// type Bag = { weight: number };
// ❌ Compile Error: Duplicate identifier 'Bag'. Type aliases cannot undergo merging.

// Composition alternative for types (Intersection):
type ColoredBag = Bag & { color: string };
