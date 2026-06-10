// GOAL: Master Intersection Types, structural composition, and resolve value-level type collisions.

type Inter1 = { id: string };
type Inter2 = { createdAt: Date };

// Intersection (&): Combines multiple type definitions into a single structure requiring ALL specified properties.
type Entity = Inter1 & Inter2;

const e: Entity = {
  id: "e1",
  createdAt: new Date(),
};

// 📚 HOMEWORK COMPLETED: Creating a multi-type intersection sequence
type BaseUser = { username: string; email: string };
type PremiumStatus = { isPremium: boolean; tier: "Gold" | "Platinum" };

// Intersecting the homework structures together
type PremiumProfile = BaseUser & PremiumStatus;

const activePremiumUser: PremiumProfile = {
  username: "Afnan",
  email: "afnan@example.com",
  isPremium: true,
  tier: "Gold",
};

// Collision Scenario: Property Name Conflict
type NumberHolderUnique = { a: number };
type StringHolderUnique = { a: string };

// When intersecting identical property names with incompatible primitives,
// TypeScript reduces that specific property type to 'never'.
type NumberStringMix = NumberHolderUnique & StringHolderUnique;

// Compile Error: Type 'number' is not assignable to type 'never'.
// No value can ever satisfy being a string and a number simultaneously at runtime.
// const bad: NumberStringMix = { a: 123 };

// Practical Scenario: Modular Feature Composition
type Product = { id: string; title: string };
type Priced = { price: number };

// Combines independent core domain modules into a single compound business entity.
type PricedProduct = Product & Priced;

const cartItem: PricedProduct = {
  id: "p_101",
  title: "Mechanical Keyboard",
  price: 89.99,
};
