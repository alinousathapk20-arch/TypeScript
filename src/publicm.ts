class Animal {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public makeSound(): void {
    console.log("Some generic animal sound...");
  }

  protected getName(): string {
    return this.name;
  }
}

class Dog extends Animal {
  bark(): void {
    console.log(this.getName() + " says Woof!");
  }
}

const dog = new Dog("Rocky");

dog.makeSound();
dog.bark();