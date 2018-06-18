
class Person {
  constructor(name, age = 30) {
    this.name = name
    this.age = age
  }
  getGreeting() {
    return `Hi! I'm ${this.name}`
  }
  getDescription() {
    return `${this.name} is ${this.age}`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age); // super calls parent constructor
    this.major = major
  }
  hasMajor() {
    return !!this.major
  }
  getDescription() {
    let description = super.getDescription()
    if (this.hasMajor()) {
      description += ` Thier major is ${this.major}`
    }
    return description
  }
}

class Travelor extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation
  }
  getGreeting() {
    let greeting = super.getGreeting()
    if (this.homeLocation) {
      greeting += ` I'm visiting from ${this.homeLocation}`
    }
    return greeting
  }
}

const me = new Travelor('Mark Tice', 15, 'Melbourne')
console.log(me.getGreeting());

const other = new Student('Ruuuuuuegen')
console.log(other.getDescription());