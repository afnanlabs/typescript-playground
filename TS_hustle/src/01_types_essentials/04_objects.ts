// GOAL: Master object structural typing contracts, property mutability controls, and dynamic key constraints.

type User = {
  id: string; // Required property
  name: string; // Required property
  email?: string; // Optional property: Key can be completely absent from the object structure.
  readonly createdAt: Date; // Immutability Modifier: Property value cannot be overwritten after initial assignment.
};

const user1: User = {
  id: "u1",
  name: "Afnan",
  createdAt: new Date(), // Valid: key 'email' is completely omitted.
};

const user2: User = {
  id: "u2",
  name: "Hasina",
  email: "hasina@example.com", // Valid: key 'email' is provided with correct primitive type.
  createdAt: new Date(),
};

// Compile Error: Cannot assign to 'createdAt' because it is a read-only property.
// Note: 'readonly' is a compile-time check only. It does not freeze the object at runtime unless Object.freeze() is used.
// user1.createdAt = new Date();

// Architectural Difference: Optional vs. Explicit Undefined Union
type User2 = { email?: string }; // Key can be omitted entirely: {} or { email: "..." } or { email: undefined }
type User3 = { email: string | undefined }; // Key MUST exist explicitly, but its value can be undefined: { email: undefined }

// Dynamic Object Mapping: Index Signatures vs. Record Utilities

// Index Signature: Represents an open-ended collection of key-value pairs matching a specific type shape.
type Count = { [k: string]: number };
const c1: Count = { whatever: 1, analytics: 42 }; // Allows any arbitrary string key name.

// Record Utility Type: Restricts keys strictly to a predefined union of literal values.
type Count1 = Record<"likes" | "views" | "shares", number>;
const c2: Count1 = {
  likes: 3,
  views: 2,
  shares: 2,
}; // Exact match required. Adding any other key name or omitting a key will trigger a compiler error.
