class Animal {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}

const dog = new Animal("Tommy");

console.log(dog.getName());