// GOAL: Master object structural typing contracts, property mutability controls, and dynamic key constraints.
const user1 = {
    id: "u1",
    name: "Afnan",
    createdAt: new Date(), // Valid: key 'email' is completely omitted.
};
const user2 = {
    id: "u2",
    name: "Hasina",
    email: "hasina@example.com", // Valid: key 'email' is provided with correct primitive type.
    createdAt: new Date(),
};
const c1 = { whatever: 1, analytics: 42 }; // Allows any arbitrary string key name.
const c2 = {
    likes: 3,
    views: 2,
    shares: 2,
}; // Exact match required. Adding any other key name or omitting a key will trigger a compiler error.
export {};
