//The PaymentProcessor class is an abstract class, which means that it cannot be directly instantiated. 
//It has a constructor that takes an apiKey parameter and stores it in a protected property, which means that it can be accessed by subclasses but not by external code.
abstract class PaymentProcessor {
    constructor(protected apiKey: string) {}
// The charge and refund methods are both abstract methods, which means that they do not have an implementation in the abstract class. 
//Instead, they are meant to be implemented by concrete subclasses of the PaymentProcessor class.
    abstract charge(amount: number): Promise<void>;
    abstract refund(amount: number): Promise<void>;
  }
// The StripeProcessor class is a concrete subclass of the PaymentProcessor class, and it provides an implementation for the charge and refund methods.
  class StripeProcessor extends PaymentProcessor {
    constructor(apiKey: string) {
      super(apiKey);
    }
  
    async charge(amount: number): Promise<void> {
      // implementation goes here
    }
  
    async refund(amount: number): Promise<void> {
      // implementation goes here
    }
  }


  //Abstraction is a fundamental principle of object-oriented programming, and it allows developers to define the interface of a class without specifying the implementation details. 
  //This helps to promote code reuse, flexibility, and maintainability by allowing developers to change the implementation of a class without affecting code that depends on it.