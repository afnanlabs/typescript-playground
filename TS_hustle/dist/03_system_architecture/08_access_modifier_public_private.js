// GOAL: Master Object-Oriented Encapsulation using compile-time 'private' constraints and runtime native '#' fields.
class BankAccount {
    // 'public' is the default visibility—accessible from anywhere outside or inside the class
    owner;
    // 'private' blocks outside access during compilation, but compiles to a standard JS property
    balance = 0;
    // '#' creates a hard runtime-enforced private field native to modern JavaScript engines
    #otp = 12345;
    constructor(owner) {
        this.owner = owner;
    }
    deposit(amt) {
        if (amt <= 0)
            throw new Error("Amount must be positive");
        this.balance += amt;
    }
    getBalance() {
        return this.balance;
    }
    verifyOtp(code) {
        return this.#otp === code; // Permitted: internal methods can read runtime private fields
    }
}
// Runtime Verification
const acc = new BankAccount("Afnan");
acc.deposit(10000);
console.log("Account Balance:", acc.getBalance()); // Output: 10000
console.log("OTP Verification:", acc.verifyOtp(12345)); // Output: true
export {};
// acc.balance = 500000;
// ❌ Compile Error: Property 'balance' is private and only accessible within class 'BankAccount'.
// acc.#otp
// ❌ Compile Error: Property '#otp' is not accessible outside class 'BankAccount' because it has a private identifier.
