// GOAL: Master optional parameters, default assignments, string interpolation mechanics, and nullish coalescing safeguards.

// 1. Optional Parameters & Optional Chaining
function greetPersonOptional(name?: string): string {
  // Optional chaining (?.) safely returns undefined instead of throwing a runtime crash if 'name' is missing.
  const upperRes = name?.toUpperCase();

  // Corrected Syntax: Shifted from $(variable) to native JS template literal syntax ${variable}
  return `Hello ${upperRes}`;
}

console.log(greetPersonOptional("Afnan"));
console.log(greetPersonOptional()); // Outputs: Hello undefined

// 2. Default Parameters (Triggers Type Narrowing Automatically)
function greetPersonDefault(name: string = "Guest"): string {
  // If no argument is passed, the compiler uses "Guest". This guarantees 'name' is always a valid string.
  return `Hello ${name.toUpperCase()}`;
}

console.log(greetPersonDefault()); // Outputs: Hello GUEST

// 3. Nullish Coalescing Guard (??)
function connect(host: string, port?: number, secure?: boolean) {
  // The ?? operator fallback triggers ONLY if the left operand is null or undefined.
  const p = port ?? 80;
  const s = secure ?? false;

  // Corrected to return evaluated fallbacks 'p' and 's' rather than the original optional variables
  return `Connect ${host} on port ${p} (Secure: ${s})`;
}

console.log(connect("localhost", 100, true));
console.log(connect("127.0.0.1")); // Correctly evaluates and logs fallback metrics
