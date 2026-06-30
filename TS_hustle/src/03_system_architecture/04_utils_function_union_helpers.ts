// GOAL: Master Advanced Meta-Programming Type Utilities to infer properties dynamically from executable structures.

// 1. Function Utility Types (ReturnType & Parameters)

function extractUserInfo(id: string, isExtraInfo = false) {
  return {
    id,
    name: "Afnan",
    log: isExtraInfo ? "details" : (undefined as string | undefined),
  };
}

// Dynamically extracts what the function yields on execution
type GetUserReturnInfo = ReturnType<typeof extractUserInfo>;

// Dynamically extracts the arguments array signature as a strict Tuple type
type GetUserParamsInfo = Parameters<typeof extractUserInfo>;

const argsInfo: GetUserParamsInfo = ["u1", true];
const funcResult: GetUserReturnInfo = extractUserInfo(...argsInfo);

// 2. Class Utility Types (InstanceType & ConstructorParameters)

class PersonN1 {
  constructor(
    public name: string,
    public age: number,
  ) {}

  greet() {
    return `Hi I am this -> ${this.name}`; // Fixed template literal string evaluation syntax
  }
}

// Extracts the structural contract produced when instantiating this class via 'new'
type PersonInstanceN1 = InstanceType<typeof PersonN1>;

// Extracts the arguments array shape required by the class constructor method
type PersonCtorArgsN1 = ConstructorParameters<typeof PersonN1>;

// Fixed reassignment collision, applied correct parameter tuple type matching
const ctorArgs: PersonCtorArgsN1 = ["Afnan", 21];
const abc: PersonInstanceN1 = new PersonN1(...ctorArgs);

console.log(abc.greet()); // Output: Hi I am this -> Afnan
