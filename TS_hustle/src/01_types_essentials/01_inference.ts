// goal -> understand when to let TypeScript infer types
// ts -> js very well
// when ts will wirte the types / ur going to write

let count = 0; // ts sees number
const site = "Afnan Khan"; // ts sees the exact literal "Afnan Khan"
const scors = [10, 20, 30];

// over annotation isn't bad -> just noisy

export function add(a: number, b: number): number {
  return a + b;
}
// you should also annotate when the type is not obvious

// This below code is somthing new for me basically
let maybe: string | number;
maybe = Math.random() > 0.5 ? "test" : 10;

/* Here is out a larger code block returning the same result would be - A function simulating a database fetch

01 - example 
function getUserIdentifier(userId: number): string | number {
    if (userId === 1) {
        return "test"; // Dynamic string ID
    } else {
        return 10;     // Legacy number ID
    }
}
let maybe: string | number;
maybe = getUserIdentifier(1); // The compiler allows this because the function returns string | number

02 - example
let maybe: string | number;
 Let's assume this variable comes from an HTML input field or user configuration
let isPremiumUser: boolean = true; 

if (isPremiumUser) {
    maybe = "test";
} else {
    maybe = 10;
}
 */

// Output
// Type Inference: TS automatically figures out the type based on the assigned value.
let test = "hello"; // TS infers this is a string automatically
console.log(test);
console.log(maybe);
