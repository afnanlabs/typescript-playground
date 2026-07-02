// GOAL: Eliminate class declaration boilerplate using TypeScript Parameter Properties.
// 1. Traditional Verbose Class Architecture
class VerboseDeveloper {
    name;
    techStack;
    constructor(name, techStack) {
        this.name = name;
        this.techStack = techStack;
        // Bulky boilerplate: written out 3 separate times!
    }
}
// 2. Optimized Parameter Properties Shorthand
class SmartDeveloper {
    name;
    techStack;
    joinedYear;
    // Declaring access modifiers inside parameters instantly creates, types, and assigns the fields!
    constructor(name, techStack, joinedYear) {
        this.name = name;
        this.techStack = techStack;
        this.joinedYear = joinedYear;
        // No explicit body assignments needed!
        // TypeScript auto-generates: this.name = name, this.techStack = techStack, etc.
        console.log(`Initialization complete for worker: ${this.name}`);
    }
    logStack() {
        // Private parameter property is cleanly accessible inside class methods
        console.log(`${this.name} builds with: ${this.techStack.join(", ")}`);
    }
}
// Runtime Verification
const dev = new SmartDeveloper("Afnan Khan", ["TypeScript", "Node.js", "MySQL"], 2026);
dev.logStack(); // Output: Afnan Khan builds with: TypeScript, Node.js, MySQL
console.log("Joined:", dev.joinedYear); // Output: 2026
export {};
// dev.techStack;
// ❌ Compile Error: Property 'techStack' is private and only accessible within class 'SmartDeveloper'.
// dev.joinedYear = 2029;
// ❌ Compile Error: Cannot assign to 'joinedYear' because it is a read-only property.
