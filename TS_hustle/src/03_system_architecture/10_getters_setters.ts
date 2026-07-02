// GOAL: Master Class Accessors (get/set) to intercept properties, compute values dynamically, and enforce runtime data validation boundaries.

class Temperature {
  // Hard encapsulated runtime state tracking
  #c = 0;

  constructor(celsius: number) {
    // Passes through your public setter validation right at initialization
    this.celsius = celsius;
  }

  // Intercepts reads to the .celsius property
  public get celsius(): number {
    return this.#c;
  }

  // Intercepts writes to the .celsius property to execute domain guardrails
  public set celsius(value: number) {
    if (Number.isNaN(value)) {
      // Fixed syntax typo from ':' to '.'
      throw new Error("Not a number! Please check input.");
    }
    this.#c = value;
  }

  // Computed Property: Computes Fahrenheit values dynamically on demand
  public get fahrenheit(): number {
    return (this.#c * 9) / 5 + 32;
  }

  // Computed Mutation: Reverse-calculates and routes data into your primary state channel
  public set fahrenheit(f: number) {
    this.celsius = ((f - 32) * 5) / 9;
  }
}

// Runtime Execution & State Interception Verification

const temp = new Temperature(25);
console.log("Initial Celsius:", temp.celsius); // Output: 25
console.log("Converted Fahrenheit:", temp.fahrenheit); // Output: 77

// Intercepting a new assignment value configuration
temp.fahrenheit = 212;
console.log("Mutated State Celsius:", temp.celsius); // Output: 100 (Boiling point!)
