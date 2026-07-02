// GOAL: Master 'protected' visibility rules to share internal state securely down subclass prototype chains.
class Animal {
    // 'protected' means accessible within this class and any subclasses, but strictly blocked from outside instances.
    energy = 23;
    eat(amount) {
        this.energy = Math.min(100, this.energy + amount); // Allowed: local mutation
    }
}
class Dog extends Animal {
    run() {
        this.energy -= 10; // Allowed: Subclasses can directly access and mutate protected properties
    }
    status() {
        return this.energy; // Allowed: Reading internal inherited state
    }
}
// Runtime Execution & Verification
const d = new Dog();
d.eat(10);
d.run();
console.log("Dog Energy Status:", d.status()); // Output: 23 + 10 - 10 = 23
export {};
// d.energy;
// ❌ Compile Error: Property 'energy' is protected and only accessible within class 'Animal' and its subclasses.
