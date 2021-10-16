class Person {
  constructor(first, last, age, gender, interests) {
    this.name = [first, last];
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {
    console.log(
      `Hi! My name is ${this.name[0]} ${this.name[1]} and I'm ${this.age} years old.`
    );
  }
}

let han = new Person("Han", "Solo", 25, "male", ["Smuggling"]);
// han.greeting();

class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject, grade) {
    super(first, last, age, gender, interests);
    this.subject = subject;
    this.grade = grade;
  }

  get subject() {
    return this._subject;
  }

  set subject(newSubject) {
    this._subject = newSubject;
  }
}

const teacher = new Teacher(
  "Severus",
  "Snape",
  58,
  "male",
  ["Potions"],
  "Dark arts",
  5
);

teacher.subject = "Maths";

class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    console.log(this.sides * this.sideLength);
  }
}

class Square extends Shape {
  constructor(sideLength) {
    super("square", 4, sideLength);
  }

  calcArea() {
    // debugger;
    console.log(this.sideLength * this.sideLength);
  }
}

const newSquare = new Square(10);

newSquare.calcArea();

// newSquare.calcPerimeter();
// newSquare.calcArea();

class SmallSquare extends Square {
  constructor() {
    super(5);
  }
}

const smallSquare = new SmallSquare();

// Test if the prototype property of a constructor appears anywhere in the prototype chain of an object.
console.log(smallSquare.constructor.prototype === SmallSquare.prototype);
console.log(smallSquare instanceof Square); // ⛓ smallSquare.constructor.prototype === SmallSquare.prototype
console.log(smallSquare instanceof Shape); // ⛓ SmallSquare.constructor.prototype === Square.prototype
console.log(smallSquare instanceof Object); // ⛓ Square.constructor.prototype === Shape.prototype
console.log(smallSquare instanceof Person);
