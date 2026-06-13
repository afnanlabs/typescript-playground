// Object Shapes -> Similar to interfaces
// Union types (A | B)
// Intersection types ( A & B )

type Person1 = {
  id: string;
  address: string;
  salary: number;
};

const person1: Person1 = {
  id: "1",
  address: "Mahalaxmi",
  salary: 35000,
};

type Status = "new" | "paid" | "pending";

function nextActionCheck(s: Status): string {
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

//
type ToMerge1 = { price: number };
type ToMerge2 = { stock: number };

type MergedProductInfo = Person1 & ToMerge1 & ToMerge2;
