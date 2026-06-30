// GOAL: Master Advanced Meta-Programming Type Utilities to infer properties dynamically from executable structures.
// 1. Function Utility Types (ReturnType & Parameters)
function extractUserInfo(id, isExtraInfo = false) {
    return {
        id,
        name: "Afnan",
        log: isExtraInfo ? "details" : undefined,
    };
}
const argsInfo = ["u1", true];
const funcResult = extractUserInfo(...argsInfo);
// 2. Class Utility Types (InstanceType & ConstructorParameters)
class PersonN1 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hi I am this -> ${this.name}`; // Fixed template literal string evaluation syntax
    }
}
// Fixed reassignment collision, applied correct parameter tuple type matching
const ctorArgs = ["Afnan", 21];
const abc = new PersonN1(...ctorArgs);
console.log(abc.greet()); // Output: Hi I am this -> Afnan
export {};
