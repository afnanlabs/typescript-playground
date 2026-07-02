// GOAL: Master Control Flow Narrowing and custom type predicates to safely filter execution paths.

// 1. Primitive Narrowing (typeof)
function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} chai ..`; // Fixed quote strings to backticks
  }
  return `Chai order: ${kind}`;
}

// 2. Truthiness & Optional Filtering
function serveChai(msg?: string) {
  if (msg) {
    return `Serving ${msg}`; // Safely filters out undefined/empty states
  }
  return "Serving default masala chai";
}

// 3. Literal & Value Assertions
function orderChai(size: "small" | "medium" | "large" | number) {
  if (size === "small") {
    return "Small cutting chai";
  }
  if (size === "medium" || size === "large") {
    return "Make extra chai";
  }
  return `Chai order #${size}`;
}

// 4. Structural Prototype Guarding (instanceof)
class KulhadChai {
  server() {
    return "Serving Kulhad Chai";
  }
}
class Cutting {
  server() {
    return "Serving Cutting Chai";
  }
}

function serve(chai: KulhadChai | Cutting) {
  if (chai instanceof KulhadChai) {
    return chai.server(); // Narrows explicitly to the KulhadChai instance domain
  }
  return chai.server();
}

// 5. User-Defined Type Guards & Predicates (x is Y)
type ChaiOrder = {
  type: string;
  sugar: number; // Changed from 'Number' wrapper to primitive 'number'
};

// Return type contract 'obj is ChaiOrder' signals the compiler to trust this assertion if true
function isChaiOrder(obj: any): obj is ChaiOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number" // Removed the leading space from " number"
  );
}

function serveOrder(item: ChaiOrder | string) {
  if (isChaiOrder(item)) {
    return `Serving ${item.type} chai with ${item.sugar} spoon(s) of sugar`;
  }
  return `Serving Custom chai: ${item}`;
}
