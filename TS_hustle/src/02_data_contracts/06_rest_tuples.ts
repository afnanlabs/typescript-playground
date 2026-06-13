// GOAL: Master standard rest parameters, rest tuples with labeled elements, and array-to-tuple constant assertions.

// 1. Standard Rest Parameters (Unbounded Array)
function sumAllNumbers(...xs: number[]): number {
  return xs.reduce((s, n) => s + n, 0);
}

console.log(sumAllNumbers(1, 2, 3, 4));

// 2. Rest Tuples (Fixed-Length Arguments Spread)
// Labeled rest tuples enforce specific, ordered parameters inside the arguments spread array.
function makeRange(
  ...args: [start: number, end: number, step?: number]
): number[] {
  const [start, end, step = 1] = args;
  const out: number[] = [];

  for (let n = start; n <= end; n += step) out.push(n);
  return out;
}

// Important Part
console.log(makeRange(1, 3));
console.log(makeRange(2, 10, 3));
// console.log(makeRange(2, 10, "3")); // Compile Error: String is not assignable to number parameter.

// 3. Spreading Collections into Fixed Arguments
function draw(x: number, y: number) {
  console.log(x, y);
}

const points = [10, 30];
// draw(...points); // Compile Error: A spread argument must either have a tuple type or be passed to a rest parameter.

// Solution: Use 'as const' literal assertion to narrow the mutable type 'number[]' down to a fixed 'readonly' tuple contract.
const pointsFixed = [10, 30] as const;
draw(...pointsFixed);
