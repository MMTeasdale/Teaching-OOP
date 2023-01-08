// The constructor method is used to create and initialize an object created from the class.
// In this example, the constructor has a single parameter, initialBalance, which is used to set the balance property of the object.

class BankAccount {
    private balance: number;
  
    constructor(initialBalance: number) {
      this.balance = initialBalance;
    }
// The deposit and withdraw methods are both examples of encapsulation, as they provide a way to modify the balance property of the object while hiding the implementation details of how the modification is done.
    public deposit(amount: number): void {
      this.balance += amount;
    }
  
    public withdraw(amount: number): void {
      this.balance -= amount;
    }
  }
  
  // Encapsulation is a fundamental principle of object-oriented programming, and it helps to promote code reuse, flexibility, and maintainability by allowing developers to change the implementation of a class without affecting code that depends on it.