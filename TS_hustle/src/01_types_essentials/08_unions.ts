// Value -> this OR that

// Primitive Unions
function printId(id: string | number) {
  /*  if(typeof id === 'string'){
        id.toLowerCase;
     }else {
        id.toFixed(2)
    } */
}

// Object Unions
type Admin = { role: "Admin"; permission: string[] };
type Customer = { role: "Customer"; loyaltyPoints: number };

function describeUser(u: Admin | Customer) {
  if (u.role == "Admin") {
    console.log(u.permission);
  } else {
    console.log(u.loyaltyPoints);
  }
}

// In Operators
function describeUserWithInOperator(u: Admin | Customer) {
  if ("permission" in u) {
    console.log(u.role, "Admin User");
  } else {
    console.log(u.loyaltyPoints, "Customer User");
  }
}

// Array of Unions and Unions of arrays
const arrOfUnion: (string | number)[] = ["a", 1, "b", "2"];

const unionOfArray: string[] | number[] =
  Math.random() > 0.1 ? ["x", "y"] : [1, 2];

// unionOfArray.push("z")
