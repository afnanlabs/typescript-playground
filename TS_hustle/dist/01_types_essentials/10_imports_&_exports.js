// GOAL: Master ES Modules, scoping boundaries, renaming strategies, and type-only bundle optimization.
// 1. Exporting Mechanics
// Method 1: Named Export (Inline declaration)
export const PI = 3.14;
export function add(a, b) {
    return a + b;
}
// Method 2: Export after declaration
function subtract(a, b) {
    return a - b;
}
// Renaming Export on dispatch
export { subtract as sub };
// Method 3: Default Export (Strict rule: Only one allowed per file module)
export default function greet() {
    return {
        name: "Afnan",
        age: 20,
    };
}
// 2. Importing Mechanics (Simulated Reference Guide)
/* Inside your consuming companion file, you would pull these structures like this:

  // Rule: Do not write the raw ".ts" extension inside module resolution strings!
  
  // A. Importing Named and Renamed targets:
  import { add, sub as Subtraction } from "./10_imports__exports";

  // B. Importing Default targets (Name can be anything you choose):
  import executeGreeting from "./10_imports__exports";

  // C. Structural Type-Only Import (CRITICAL: Stripped completely out by the compiler)
  import type { OperationalMeta } from "./10_imports__exports";
*/
