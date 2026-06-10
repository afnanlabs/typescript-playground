// GOAL: Master Literal Types, Type Widening mechanics, and mutability override using const assertions.
function move(d) {
    console.log(d);
}
// Case 1: Constant Assignment (No Type Widening)
// Because 'd1' is declared with 'const' and assigned a primitive string string literal directly,
// TypeScript assigns it the exact narrow literal type "left". It cannot be mutated.
const d1 = "left";
move(d1); // Valid: "left" satisfies the Direction type definition.
// Case 2: Variable Assignment (Type Widening)
// Because 'd2' is declared with 'let', TypeScript assumes it will be reassigned later.
// The compiler automatically "widens" the type from the literal "left" to the general 'string' primitive type.
let d2 = "left";
// move(d2); // Compile Error: Argument of type 'string' is not assignable to parameter of type 'Direction'.
// Case 3: Explicit Annotation Override
// By explicitly applying the 'Direction' type annotation, we prevent the default let-widening behavior.
let d3 = "left";
move(d3); // Valid: Explicit constraint satisfies the parameter contract.
// Case 4: Const Assertion ('as const')
// The 'as const' syntax acts as a deep immutability modifier for the type system.
// It instructs the compiler to treat the value as an unchangeable, read-only literal type, bypassing let-widening completely.
let d4 = "left";
move(d4); // Valid: Type is locked down directly at the value level to the literal "left".
export {};
