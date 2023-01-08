//The Vehicle class has a constructor that takes a make and a model parameter and stores them in protected properties. 
//It also has two methods, start and stop, that perform some action related to starting and stopping a vehicle.


class Vehicle {
    constructor(protected make: string, protected model: string) {}
  
    public start(): void {
      console.log("Starting the vehicle...");
    }
  
    public stop(): void {
      console.log("Stopping the vehicle...");
    }
  }
  //In addition to the inherited methods, the Car class has a drive method and the Motorcycle class has a ride method, which are specific to their respective types of vehicles.
    class Car extends Vehicle {
    constructor(make: string, model: string) {
      super(make, model);
    }
  
    public drive(): void {
      console.log("Driving the car...");
    }
  }
// The Car and Motorcycle classes are both subclasses of the Vehicle class, and they both have their own constructors that call the constructor of the Vehicle class using the super keyword. 
// This allows them to inherit the make and model properties from the Vehicle class.
    class Motorcycle extends Vehicle {
    constructor(make: string, model: string) {
      super(make, model);
    }
  
    public ride(): void {
      console.log("Riding the motorcycle...");
    }
  }
  
// Inheritance is a fundamental principle of object-oriented programming, and it allows developers to create a new class that is a modified version of an existing class. 
// This helps to promote code reuse, flexibility, and maintainability by allowing developers to create a new class that is based on an existing class, but that has additional or modified behavior.