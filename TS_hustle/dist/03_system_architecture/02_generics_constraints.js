// GOAL: Master Generics Constraints using 'extends' and the 'keyof' operator to create safe, predictable type boundaries.
// 1. Structural Constraints (The Shape Guarantee)
// By forcing T to extend { length: number }, we tell the compiler:
// "T can be any type you want, as long as it has a numeric .length property."
function lenN4(xN4) {
    return xN4.length; // 100% safe because of the structural constraint
}
console.log(lenN4("HELLO")); // Output: 5 (Strings have length)
console.log(lenN4([1, 2, 3])); // Output: 3 (Arrays have length)
console.log(lenN4({ length: 10, tag: "ok" })); // Output: 10 (Object has literal length property)
function userN6Extract(arrN4, keyN4) {
    return arrN4.map((item) => item[keyN4]);
}
const userrN6 = [
    { id: "1", name: "name1", age: 22 },
    { id: "2", name: "name2" }, // Fixed matching object name key sequence
];
console.log(userN6Extract(userrN6, "id")); // Output: [ '1', '2' ]
console.log(userN6Extract(userrN6, "age")); // Output: [ 22, undefined ]
export {};
// console.log(userN6Extract(userrN6, 'email'));
// ❌ Compile Error: Argument of type '"email"' is not assignable to parameter of type '"id" | "name" | "age"'.
