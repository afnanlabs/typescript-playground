// Protected -> classes, subclasses but not outside classes
class Animal {
    energy = 23;
    eat(amount) {
        this.energy = Math.min(100, this.energy + amount);
    }
}
class Dog extends Animal {
    run() {
        this.energy -= 10;
    }
    status() {
        return this.energy;
    }
}
const d = new Dog();
d.eat(10);
d.run();
d.status();
export {};
// d.energy() // Can't
