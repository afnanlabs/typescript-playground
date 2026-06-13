// GOAL: Master standard interface modeling, optional fields, immutability contracts, single inheritance extensions, and multiple composition paths.

// 1. Core Object Shape Schema
interface User333 {
  id: string;
  name: string;
  email?: string; // Optional field
  readonly createdAt: Date; // Immutable post-initialization
}

const user333: User333 = {
  id: "1",
  name: "Afnan",
  createdAt: new Date(),
  email: "afnankhan11@gmail.com",
};

// 2. Single Inheritance (Extending a Base Contract)
interface Admin333 extends User333 {
  permission: string[];
}

const admin333: Admin333 = {
  id: "1",
  name: "Boss",
  createdAt: new Date(),
  email: "boss01@gmail.com",
  permission: ["admin"],
};

// 3. Multiple Interface Composition
interface WithMeta1 {
  meta: {
    active: boolean;
  };
}

// Corrected: Formed a clean composite type contract signature by merging both interfaces
interface AdminWithMeta extends Admin333, WithMeta1 {}

// Instantiated the actual variable object adhering to the composite interface rules
const adminWithMeta: AdminWithMeta = {
  id: "1",
  name: "Boss",
  createdAt: new Date(),
  email: "boss01@gmail.com",
  permission: ["admin"],
  meta: {
    active: true,
  },
};
