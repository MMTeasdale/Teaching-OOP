// The Animal class is an abstract class, which means that it cannot be directly instantiated. 
// It has a constructor that takes a name parameter and stores it in a protected property, and it has two methods: an abstract method called makeNoise and a concrete method called move.

//The Dog and Cat classes are both concrete subclasses of the Animal class, and they both provide an implementation for the makeNoise method.

abstract class Animal {
    constructor(protected name: string) {}
  
    public abstract makeNoise(): void;
    public move(): void {
      console.log(`${this.name} is moving.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name: string) {
      super(name);
    }
  
    public makeNoise(): void {
      console.log("Woof!");
    }
  }
  
  class Cat extends Animal {
    constructor(name: string) {
      super(name);
    }
  
    public makeNoise(): void {
      console.log("Meow!");
    }
  }
  
  const animals: Animal[] = [new Dog("Fido"), new Cat("Fluffy")];
  
  for (const animal of animals) {
    animal.makeNoise();
    animal.move();
  }
  
// Polymorphism is demonstrated in this example when the animals array is iterated over and the makeNoise and move methods are called on each element, without having to know the specific type of the object. 
// This helps to promote code reuse, flexibility, and maintainability by allowing developers to write code that can operate on multiple types of objects in a uniform way.