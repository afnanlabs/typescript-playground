// Prmoise<T>
// nested Promise<Promise<T>
// Thenables -> .then

// Awaited<T>

type Promise1 = Awaited<Promise<number>>; // This will return a number
type Promise2 = Awaited<Promise<string>>; // This will return a string

type Awaited1 = Awaited<string>; // this is just a string but not a promise

type PrmoiseUnionExample = Awaited<Promise<string | number>>;
async function fetchCount() {
  return 42 as const;
}

type ResolvedFetchedCountValue = Awaited<ReturnType<typeof fetchCount>>;

async function getData() {
  return Promise.all([
    Promise.resolve(1 as const),
    Promise.resolve("x" as const),
  ] as const);
}

type DataTupleWithPromise = Awaited<ReturnType<typeof getData>>;
