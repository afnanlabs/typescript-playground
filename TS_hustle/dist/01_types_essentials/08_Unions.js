// GOAL: Master Union Types, Control Flow Type Narrowing using Discriminators/In Operators, and isolate Array Union behaviors.
// 1. Primitive Unions & Narrowing
function printId(id) {
    // Within a union, you can only safely access methods common to BOTH types until you narrow down the specific type path.
    if (typeof id === "string") {
        // TypeScript automatically narrows the type to 'string' inside this block.
        console.log(id.toLowerCase());
    }
    else {
        // TypeScript knows with absolute certainty that 'id' must be a 'number' here.
        console.log(id.toFixed(2));
    }
}
function describeUser(u) {
    if (u.role === "Admin") {
        // Discriminant narrowing allows safe access to specific properties.
        console.log(u.permission);
    }
    else {
        console.log(u.loyaltyPoints);
    }
}
// 3. Structural Evaluation: The 'in' Operator Guard
function describeUserWithInOperator(u) {
    // Checks if the property key string literal structurally exists within the object instance at runtime.
    if ("permission" in u) {
        console.log(u.permission, "Admin User"); // Safe: narrow validation verified
    }
    else {
        console.log(u.loyaltyPoints, "Customer User"); // Safe: isolated to alternative structural block
    }
}
// 4. Collections: Array of Unions vs. Union of Arrays
// Array of Unions: A single collection structure that can freely hold a mix of strings or numbers.
const arrOfUnion = ["a", 1, "b", 2];
// Union of Arrays: The collection is strictly EITHER an array entirely filled with strings, OR entirely filled with numbers.
const unionOfArray = Math.random() > 0.1 ? ["x", "y"] : [1, 2];
export {};
// Compile Error: Mutant mutation is blocked.
// Because 'unionOfArray' might be a number[] at runtime, pushing a string is highly unsafe.
// unionOfArray.push("z");
