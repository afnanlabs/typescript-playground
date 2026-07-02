// GOAL: Master Class Property Initialization rules and strict constructor assignment constraints.

// 1. Correct Structural Class Architecture
class UserN15 {
  id: string;
  name: string;
  email?: string;
  createdAt: Date = new Date(); // Initialized at declaration baseline -> OK

  constructor(id: string, name: string, email?: string) {
    // Strict requirement: All non-optional, uninitialized fields must be mapped here
    this.id = id;
    this.name = name;
    if (email) this.email = email;
  }
}

const result4 = new UserN15("1", "afnan");
const result5 = new UserN15("2", "affu", "affu@gmail.com");

console.log("User 4:", result4);
console.log("User 5:", result5);

// 2. Strict Compiler Enforcement
class Bad {
  //   a: string;
  // ❌ Compile Error: Property 'a' has no initializer and is not definitely assigned in the constructor.
  // To fix this, you must either:
  // 1. Assign it right away: a: string = "default"
  // 2. Make it optional: a?: string
  // 3. Define it in a constructor: constructor(val: string) { this.a = val; }
}
