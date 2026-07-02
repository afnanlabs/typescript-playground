// GOAL: Master async type unwrapping using 'Awaited<T>' to extract synchronous payloads from Promises and deep Thenables.

// 1. Basic & Deep Unwrapping Operations

type Promise1 = Awaited<Promise<number>>; // Evaluates to: number
type Promise2 = Awaited<Promise<string>>; // Evaluates to: string

// If passed a non-promise primitive, it cleanly evaluates directly to that type
type Awaited1 = Awaited<string>; // Evaluates to: string

// Handles complex unions inside async shells effortlessly
type PromiseUnionExample = Awaited<Promise<string | number>>; // Evaluates to: string | number

// 2. Real-World API Data Payload Capture

async function fetchCount() {
  return 42 as const;
}

// Drops the Promise wrapping and extracts the literal value type '42'
type ResolvedFetchedCountValue = Awaited<ReturnType<typeof fetchCount>>;

// 3. Destructuring Complex Concurrent Async Tasks

async function getData() {
  return Promise.all([
    Promise.resolve(1 as const),
    Promise.resolve("x" as const),
  ] as const);
}

// Resolves a strict, immutable runtime readonly tuple: readonly [1, "x"]
type DataTupleWithPromise = Awaited<ReturnType<typeof getData>>;

const samplePayload: DataTupleWithPromise = [1, "x"];
console.log("Async Data Tuple Payload:", samplePayload);
