// GOAL: Master Control Flow Narrowing and custom type predicates to safely filter execution paths.
// 1. Primitive Narrowing (typeof)
function getChai(kind) {
    if (typeof kind === "string") {
        return `Making ${kind} chai ..`; // Fixed quote strings to backticks
    }
    return `Chai order: ${kind}`;
}
// 2. Truthiness & Optional Filtering
function serveChai(msg) {
    if (msg) {
        return `Serving ${msg}`; // Safely filters out undefined/empty states
    }
    return "Serving default masala chai";
}
// 3. Literal & Value Assertions
function orderChai(size) {
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
function serve(chai) {
    if (chai instanceof KulhadChai) {
        return chai.server(); // Narrows explicitly to the KulhadChai instance domain
    }
    return chai.server();
}
// Return type contract 'obj is ChaiOrder' signals the compiler to trust this assertion if true
function isChaiOrder(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number" // Removed the leading space from " number"
    );
}
function serveOrder(item) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} spoon(s) of sugar`;
    }
    return `Serving Custom chai: ${item}`;
}
export {};
