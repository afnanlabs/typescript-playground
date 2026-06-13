// Object Shapes -> Similar to interfaces
// Union types (A | B)
// Intersection types ( A & B )
const person1 = {
    id: "1",
    address: "Mahalaxmi",
    salary: 35000,
};
function nextActionCheck(s) {
    switch (s) {
        case "new":
            return "Process welcome sequence";
        case "paid":
            return "Ship item items to customer";
        case "pending":
            return "Send payment reminder notification";
        // No 'default' block needed! TypeScript knows 100% of the union options are covered.
    }
}
export {};
