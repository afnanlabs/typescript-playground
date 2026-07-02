// Public is default means accessible anywhere
// Private block is assebilbe outside
class BankAccount {
    owner;
    balance = 0;
    #otp = 12345;
    constructor(owner) {
        this.owner = owner;
    }
    deposit(amt) {
        if (amt <= 0)
            throw new Error("amount must be positive");
        this.balance += amt;
    }
    getBalance() {
        return this.balance;
    }
    verifyotp(code) {
        return this.#otp === code; // only accessible inside the class
    }
}
const acc = new BankAccount("Afnan");
acc.deposit(10000);
console.log(acc.getBalance());
export {};
// acc.balance
// acc.#otp
