// GOAL: Master standard function parameter typing, contextual signature inference, anonymous arrow syntax, and structural object arguments.

// Standard Function with Explicit Parameter and Return Typing
function func1(a: number, b: number): number {
  return a + b;
}

const nums12 = [1, 2, 3];

// Contextual Inference: TS automatically infers 'n' is a number because 'nums12' is a number[]
const doubled = nums12.map((n) => n * 2); // (n:number)
console.log(doubled);

// Arrow Function Annotations and Public Interface Strategy
// const times2 = (n) => n * 2; // always preffer to give annotations
const times2 = (n: number) => n * 2; // you should always mention return type for public functions.

type Point = { x: number; y: number };

// Structural Typing Object Parameters
function distanceFromOrigin(p: Point): number {
  return Math.hypot(p.x, p.y);
}

console.log(distanceFromOrigin({ x: 3, y: 3 }));
