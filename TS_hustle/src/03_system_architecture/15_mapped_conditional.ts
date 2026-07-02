// GOAL: Master advanced type transformations using Conditional Type checks and Mapped Type loops.

// ==========================================
// 1. Conditional Types (Type-Level If/Else)
// ==========================================
type NetPayload = { data: string; ip: string };
type LocalPayload = { logFile: string };

// Dynamic routing query: If the generic input extends string, resolve to NetPayload; else fallback.
type PayloadRoute<T> = T extends "network" ? NetPayload : LocalPayload;

// Verification:
let routeA: PayloadRoute<"network"> = { data: "Syncing...", ip: "192.168.1.1" };
let routeB: PayloadRoute<"local"> = { logFile: "app_dump.log" };

// ==========================================
// 2. Mapped Types (Type-Level Loops)
// ==========================================
interface ProjectContract {
  id: string;
  title: string;
  isCompleted: boolean;
}

// Custom transformation loop: Iterate over every key 'K' in 'T' and strip mutability or alter values
type LockAndOptional<T> = {
  readonly [K in keyof T]?: T[K]; // Maps through all keys, adding 'readonly' and making them optional '?'
};

// Application: Creates a read-only, fully optional contract shape derived automatically from ProjectContract
type SecureProject = LockAndOptional<ProjectContract>;

const activeProject: SecureProject = {
  title: "ThinkTrack MVP Engine",
};

// activeProject.title = "New Title";
// ❌ Compile Error: Cannot assign to 'title' because it is a read-only property.
