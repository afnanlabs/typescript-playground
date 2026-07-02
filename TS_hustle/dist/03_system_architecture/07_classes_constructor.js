// GOAL: Master Class Property Initialization rules and strict constructor assignment constraints.
// 1. Correct Structural Class Architecture
class UserN15 {
    id;
    name;
    email;
    createdAt = new Date(); // Initialized at declaration baseline -> OK
    constructor(id, name, email) {
        // Strict requirement: All non-optional, uninitialized fields must be mapped here
        this.id = id;
        this.name = name;
        if (email)
            this.email = email;
    }
}
const result4 = new UserN15("1", "afnan");
const result5 = new UserN15("2", "affu", "affu@gmail.com");
console.log("User 4:", result4);
console.log("User 5:", result5);
// 2. Strict Compiler Enforcement
class Bad {
}
export {};
