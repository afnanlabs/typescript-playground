// GOAL: Master runtime Type Narrowing using 'typeof' primitive guards, 'instanceof' class prototype checks, and specialized 'Array.isArray' checks.

// 1. Primitive Guard Routing via 'typeof'
function describeTypeOf(x: unknown) {
  if (typeof x === "string") {
    return "string";
  }

  if (typeof x === "number") {
    return 10;
  }

  if (typeof x === "boolean") {
    return true;
  }

  if (typeof x === "bigint") {
    return "bigint";
  }

  if (typeof x === "symbol") {
    return "symbol";
  }

  if (typeof x === "undefined") {
    return "undefined";
  }

  if (typeof x === "function") {
    return () => {};
  }

  // Defending against legacy JS quirk: typeof null evaluates to 'object'
  if (x === null) {
    return "null";
  }

  return "object";
}

console.log(
  describeTypeOf("Hi"),
  describeTypeOf(23),
  describeTypeOf(true), // Fixed trailing comma syntax error
  describeTypeOf(10n),
  describeTypeOf(Symbol("Afnan")),
  describeTypeOf(undefined),
  describeTypeOf(() => {}),
  describeTypeOf(null),
  describeTypeOf({}),
);

// 2. Structural & Prototype Instance Guarding
function info(z: unknown) {
  // Arrays lack a distinct 'typeof' primitive category, so we leverage the native helper
  if (Array.isArray(z)) {
    return z;
  }

  // Evaluates whether the object shares prototype chains with the Date constructor
  if (z instanceof Date) {
    return new Date();
  }

  // Evaluates whether the object shares prototype chains with native Errors
  if (z instanceof Error) {
    return new Error("hello");
  }

  return "other";
}

console.log(
  info([1, 2, 3, 4, 5, 6]),
  info(new Date()),
  info(new Error("oopps! Error occured")),
  info({ x: 1 }),
);
