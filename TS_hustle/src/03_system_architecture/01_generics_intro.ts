// GOAL: Understand the "Type Parameter" <T> and how TypeScript automatically infers <T> from your arguments.

// MENTAL MODEL:
// 1. Generics act as "blanks" in a function that you fill in later.
// 2. <T> is just a placeholder (like a variable for a type).
// 3. TS infers what <T> should be based on the data you pass in.

// 1. The Identity Function
// Without Generics: (x: unknown) => unknown (You lose the specific type)
// With Generics:    (x: T) => T       (Keeps the exact type intact)
function id<T>(x: T): T {
  return x;
}

// Inference in action: TS automatically knows T is a 'number' here.
// You don't need to manually write id<number>(4).
const xyz = id(4);
console.log(xyz + 1); // Output: 5

// Here, TS infers T is a 'string[]'
console.log(xyz + 1, id(["afnan"])); // Output: 5 [ 'afnan' ]

// 2. Array Generics
// Takes an array of type T, returns a single element of type T (or undefined if empty).
function firstGen<T>(arr: T[]): T | undefined {
  return arr[0];
}

console.log(firstGen([1, 2, 3, 4])); // Output: 1 (TS knows this is a number)

// 3. Wrapper Generics
// Takes a value of type T and locks it inside an object strictly typed to hold T.
function wrap<T>(value: T): { value: T } {
  return { value };
}

console.log(wrap("Hello")); // Output: { value: 'Hello' } (TS knows value is a string)
