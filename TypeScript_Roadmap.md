# TypeScript Roadmap

### Must do

🟢 = Mandatory (must know, used constantly in real projects)
🟡 = Important (learn after the mandatory ones)
⚪ = Optional / Advanced (useful but not essential early on)

🟢 Variables & Constants
🟢 Arrays
🟢 Objects
🟢 Functions
🟢 Arrow Functions
🟢 Imports & Exports
🟢 Type Annotations
🟢 Function Return Types
🟢 Optional Properties
🟡 JSON Storage / Serialization
🟢 Interfaces
🟡 Interface Extension (extends)
🟢 Type Aliases (type)
🟢 String Literal Union Types
🟢 Classes
🟢 Access Modifiers (private, readonly)
🟡 Constructor Parameter Properties
🟡 Encapsulation
🟢 Async / Await
🟢 Promises
🟢 Typed Collections (Array, Set, Record)
🟡 Utility Types (Record, Partial)
🟢 Union Types
🟢 unknown
🟢 Control Flow Narrowing
🟢 User-Defined Type Guards
🟡 Type Predicates (x is Y)
🟡 Runtime Validation
🟢 Generics (Usage)
🟡 Type Assertions (as)
⚪ Intersection Types (&)
⚪ typeof Type Queries
⚪ Structural Typing
🟢 Optional Chaining (?.)
🟡 Readonly Arrays
🟢 Strict Mode
🟢 Null Safety (strictNullChecks)

🟢 Mandatory: 24 topics
🟡 Important: 10 topics
⚪ Optional/Advanced: 3 topics

---

🟡 Enums
⚪ Decorators
⚪ Namespaces
🟡 Abstract Classes
🟡 implements
🟡 Custom Generic Types
🟡 Generic Classes
🟡 Function Overloads
🟢 Discriminated Unions
🟡 Tuple Types
🟢 Conditional Types
🟢 Mapped Types
🟢 keyof
🟡 never
🟢 any (know it, but avoid overusing it)

---

🟢 Advanced Conditional Types
🟢 Complex Mapped Types
🟢 Template Literal Types
⚪ Variance/Inference Internals
⚪ Declaration Merging
⚪ Module Augmentation
🟢 Advanced Generic Patterns
⚪ Type-Level Programming Tricks

---

Summary
🟢 Mandatory: 8 topics
🟡 Important: 7 topics
⚪ Optional/Niche: 8 topics

---

### **The TypeScript Structured Learning Path**

| Topic Name                                         | YouTube Video Title                          | Channel Name          | Video Length | YouTube Link                                                                                                                                | Why Chosen / Timestamp Location                                                     |
| -------------------------------------------------- | -------------------------------------------- | --------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| **🟢 Variables & Constants**                       | TypeScript Crash Course                      | Traversy Media        | ~30 mins     | [Watch Video](https://www.youtube.com/watch?v=BCg4U1FzODs)                                                                                  | Perfect introduction to compilation, primitive types, and basic declarations.       |
| **🟢 Arrays**                                      | TypeScript Crash Course                      | Traversy Media        | ~30 mins     | [Watch Video](https://www.youtube.com/watch?v=BCg4U1FzODs)                                                                                  | Covers array type declarations and tuples seamlessly alongside basic primitives.    |
| **🟢 Objects**                                     | Learn TypeScript – Full Tutorial             | freeCodeCamp          | ~4 hours     | [Watch Video](https://www.youtube.com/watch?v=30LWjhZ8vK4)                                                                                  | Fast-forward to **00:23:15** for a deep dive into typing structured objects.        |
| **🟢 Functions**                                   | TypeScript Course for Beginners              | Net Ninja             | ~15 mins     | [Watch Video](https://www.youtube.com/watch?v=2pUvG38b8tU)                                                                                  | Focuses purely on signature structures and argument expectations.                   |
| **🟢 Arrow Functions**                             | TypeScript Course for Beginners              | Net Ninja             | ~15 mins     | [Watch Video](https://www.youtube.com/watch?v=2pUvG38b8tU)                                                                                  | Highlights the minor syntactic differences when typing inline arrow declarations.   |
| **🟢 Imports & Exports**                           | TypeScript Modules Tutorial                  | Codevolution          | ~12 mins     | [Watch Video](https://www.youtube.com/watch?v=eJn7Hn96HwY)                                                                                  | Focuses directly on how namespaces, imports, and exports handle types.              |
| **🟢 Type Annotations**                            | TypeScript Tutorial for Beginners            | Programming with Mosh | ~30 mins     | [Watch Video](https://www.youtube.com/watch?v=d56mG7DezGs)                                                                                  | Mosh explains implicit vs. explicit type annotations clearly for clean code.        |
| **🟢 Function Return Types**                       | Learn TypeScript In 15 Minutes               | Web Dev Simplified    | ~15 mins     | [Watch Video](https://www.youtube.com/watch?v=zQnBQ4tB3ZA)                                                                                  | Explains strict type inferences for regular and `void`/`never` return types.        |
| **🟢 Optional Properties**                         | TypeScript Objects and Optional Properties   | Codevolution          | ~8 mins      | [Watch Video](https://www.youtube.com/watch?v=F2JCgS6D090) \| Short, focused look at the `?` modifier on object properties.                 |
| **🟡 JSON Storage / Serialization**                | TypeScript Deep Dive: JSON                   | Total TypeScript      | Short        | [Watch Video](https://www.youtube.com/watch?v=EU0TB_8KHpY) \| Explains typing return payloads from `JSON.parse` securely.                   |
| **🟢 Interfaces**                                  | TypeScript Interfaces                        | Web Dev Simplified    | ~10 mins     | [Watch Video](https://www.youtube.com/watch?v=F2JCgS6D090)                                                                                  | Gives a concise, real-world layout on defining structural contracts.                |
| \| **🟡 Interface Extension (`extends`)**          | Interfaces vs Types in TypeScript            | Matt Pocock           | ~21 mins     | [Watch Video](https://www.youtube.com/watch?v=zQnBQ4tB3ZA)                                                                                  | Deeply covers extending interfaces and compares them directly with intersections.   |
| \| **🟢 Type Aliases (`type`)**                    | Types vs Interfaces                          | Matt Pocock           | ~21 mins     | [Watch Video](https://www.youtube.com/watch?v=zQnBQ4tB3ZA)                                                                                  | Explains custom types, combinations, and structural design choices.                 |
| **🟢 String Literal Union Types**                  | Literal Types in TypeScript                  | Codevolution          | ~7 mins      | [Watch Video](https://www.youtube.com/watch?v=eJn7Hn96HwY)                                                                                  | Shows how to constrain string values down to precise code design options.           |
| **🟢 Classes**                                     | TypeScript Classes Tutorial                  | Programming with Mosh | ~25 mins     | [Watch Video](https://www.youtube.com/watch?v=d56mG7DezGs)                                                                                  | Teaches OOP implementations, instances, and syntax rules within TS.                 |
| \| **🟢 Access Modifiers (`private`, `readonly`)** | Access Modifiers in TypeScript               | Net Ninja             | ~11 mins     | [Watch Video](https://www.youtube.com/watch?v=2pUvG38b8tU) \| Demonstrates data hiding patterns using `public`, `private`, and `protected`. |
| **🟡 Constructor Parameter Properties**            | TS Classes Shorthand syntax                  | Programming with Mosh | ~8 mins      | [Watch Video](https://www.youtube.com/watch?v=d56mG7DezGs)                                                                                  | Jump to class parameter properties section to clean up bulky boilerplate code.      |
| **🟡 Encapsulation**                               | Object Oriented Programming TypeScript       | Academind             | ~30 mins     | [Watch Video](https://www.youtube.com/watch?v=30LWjhZ8vK4)                                                                                  | Shows how to properly structure getters, setters, and hide class states safely.     |
| **🟢 Async / Await**                               | Async/Await with TypeScript Types            | Fireship              | ~12 mins     | [Watch Video](https://www.youtube.com/watch?v=BCg4U1FzODs)                                                                                  | Quick, high-speed demonstration of handling asynchronous code safely.               |
| **🟢 Promises**                                    | Strongly Typing Promises in TS               | Web Dev Simplified    | ~14 mins     | [Watch Video](https://www.youtube.com/watch?v=zQnBQ4tB3ZA)                                                                                  | Explains typing resolution values explicitly inside Promise instances.              |
| **🟢 Typed Collections (Array, Set, Record)**      | Maps, Sets, and Records                      | Total TypeScript      | ~10 mins     | [Watch Video](https://www.youtube.com/watch?v=EU0TB_8KHpY)                                                                                  | Quick layout on modern key-value collections and custom set rules.                  |
| **🟡 Utility Types (Record, Partial)**             | TypeScript's Utility Types... Blazing fast   | Matt Pocock           | ~3 mins      | [Watch Video](https://www.youtube.com/watch?v=EU0TB_8KHpY)                                                                                  | Blazing fast walkthrough of mapping structural utilities efficiently.               |
| **🟢 Union Types**                                 | Union Types Explained                        | Codevolution          | ~8 mins      | [Watch Video](https://www.youtube.com/watch?v=F2JCgS6D090) \| Teaches the core mechanics of pipe symbols (`                                 | `) allowing dual states.                                                            |
| **🟢 unknown**                                     | The Unknown Type Guide                       | Matt Pocock           | ~8 mins      | [Watch Video](https://www.youtube.com/watch?v=dLPgQRbVquo) \| Explains why `unknown` is the safer, production-ready alternative to `any`.   |
| **🟢 Control Flow Narrowing**                      | TypeScript Narrowing & Type Guards           | Net Ninja             | ~15 mins     | [Watch Video](https://www.youtube.com/watch?v=2pUvG38b8tU) \| Shows how the compiler dynamically reads `if` statements to filter types.     |
| **🟢 User-Defined Type Guards**                    | Custom Type Guards Tutorial                  | Total TypeScript      | Short        | [Watch Video](https://www.youtube.com/watch?v=EU0TB_8KHpY)                                                                                  | Shows how to pass complex object structural checks through custom runtime blocks.   |
| \| **🟡 Type Predicates (`x is Y`)**               | Master Type Predicates                       | Matt Pocock           | ~12 mins     | [Watch Video](https://www.youtube.com/watch?v=dLPgQRbVquo)                                                                                  | Shows how to explicitly override code paths using custom assertion functions.       |
| **🟡 Runtime Validation**                          | Stop relying on types alone (Zod validation) | Fireship              | ~11 mins     | [Watch Video](https://www.youtube.com/watch?v=BCg4U1FzODs)                                                                                  | Bridges the gap between static compilation checks and external live API data.       |
| **🟢 Generics (Usage)**                            | Learn TypeScript Generics In 13 Minutes      | Web Dev Simplified    | ~13 mins     | [Watch Video](https://www.youtube.com/watch?v=EcCTIExsqmI)                                                                                  | Incredible breakdown on writing highly reusable, variable-driven dynamic types.     |
| \| **🟡 Type Assertions (`as`)**                   | Type Assertions: The 'as' Keyword            | Programming with Mosh | ~9 mins      | [Watch Video](https://www.youtube.com/watch?v=d56mG7DezGs)                                                                                  | Teaches how to override compiler defaults safely when querying DOM nodes.           |
| \| **⚪ Intersection Types (`&`)**                 | Intersection Types Tutorial                  | Codevolution          | ~8 mins      | [Watch Video](https://www.youtube.com/watch?v=eJn7Hn96HwY)                                                                                  | Shows how to structurally combine distinct type properties into single units.       |
| **⚪ typeof Type Queries**                         | TypeScript 'typeof' operator secrets         | Matt Pocock           | ~10 mins     | [Watch Video](https://www.youtube.com/watch?v=dLPgQRbVquo)                                                                                  | Shows how to instantly extract clean types directly from live JS data values.       |
| **⚪ Structural Typing**                           | How Structural Typing Works                  | Total TypeScript      | ~8 mins      | [Watch Video](https://www.youtube.com/watch?v=EU0TB_8KHpY)                                                                                  | Explains TS "duck typing" mechanics and why shapes matter over names.               |
| \| **🟢 Optional Chaining (`?.`)**                 | JavaScript & TypeScript Optional Chaining    | Web Dev Simplified    | ~8 mins      | [Watch Video](https://www.youtube.com/watch?v=zQnBQ4tB3ZA)                                                                                  | Explains avoiding property crashes on uninitialized structural properties.          |
| **🟡 Readonly Arrays**                             | Immutable Arrays in TypeScript               | Matt Pocock           | ~7 mins      | [Watch Video](https://www.youtube.com/watch?v=EU0TB_8KHpY) \| Focuses on stopping side-effect mutations on state records using `readonly`.  |
| **🟢 Strict Mode**                                 | Strict TypeScript Isn't Enough Anymore       | Web Dev Simplified    | ~13 mins     | [Watch Video](https://www.youtube.com/watch?v=zQnBQ4tB3ZA)                                                                                  | Deep configuration video focused on initializing structural project security rules. |
| \| **🟢 Null Safety (`strictNullChecks`)**         | Mastering strictNullChecks                   | Total TypeScript      | ~10 mins     | [Watch Video](https://www.youtube.com/watch?v=EU0TB_8KHpY)                                                                                  | Shows how to force explicit declaration safety handling on empty conditions. \|     |

---

### **Learning Path Phases Summary**

#### **Phase 1: Fundamentals**

- **Focus:** Variables, Constants, Arrays, Objects, Functions, Arrow Functions, Imports/Exports, Type Annotations, Return Types, Optional Properties, Interfaces, and Basic Type Aliases.
- **Core Goal:** Transitioning smoothly from regular JavaScript syntax to structured, explicit static types.

#### **Phase 2: Intermediate TypeScript**

- **Focus:** String Literal Unions, Classes, Access Modifiers, Constructor Parameters, Encapsulation, Promises, Async/Await, Typed Collections, Basic Utility Types, and Union Types.
- **Core Goal:** Designing solid object-oriented application code, handling network flows safely, and utilizing basic structural alterations.

#### **Phase 3: Advanced TypeScript**

- **Focus:** Unknown, Control Flow Narrowing, Type Guards, Type Predicates, Runtime Validation (Zod), Generics, Assertions, Intersections, Type Queries (`typeof`), Structural Typing, Optional Chaining, Immutable Arrays, and Strict Mode configs.
- **Core Goal:** Achieving complete architectural type safety, handling dynamic logic patterns, and verifying third-party data rules.
- **Total Estimated Watch Time:** ~6.5 Hours (when skipping directly to targeted topic chapters inside the longer foundational videos).

---

For an excellent deep dive into intermediate type architecture, [Interfaces vs Types in TypeScript](https://www.youtube.com/watch?v=zQnBQ4tB3ZA) by Matt Pocock provides brilliant technical insights contrasting extensions and type aliases.
