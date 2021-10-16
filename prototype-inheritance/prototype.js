// Prototypes are the mechanism by which JavaScript objects inherit features from one another.
// JavaScript is often described as a prototype-based language —
// to provide inheritance, objects can have a prototype object,
// which acts as a template object that it inherits methods and properties from.

function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last,
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
}

Person.prototype.bio = function () {
  console.log(
    this.name.first + " " + this.name.last + " is " + this.age + " years old. "
  );
};

Person.prototype.greeting = function () {
  console.log("Hi! I'm " + this.name.first + ".");
};

Person.prototype.farewell = function () {
  console.log(this.name.first + " has left the building. Bye for now!");
};

function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);

  this.subject = subject;
}

// Create a new object and make it the value of Teacher.prototype.
// The new object has Person.prototype as its prototype and will therefore inherit,
// if and when needed, all the methods available on Person.prototype.
Teacher.prototype = Object.create(Person.prototype);

/**
 * the constructor property of Teacher.prototype is now equal to Person(),
 * because we just set Teacher.prototype to reference an object that inherits its properties from Person.prototype!
 */
Object.defineProperty(Teacher.prototype, "constructor", {
  value: Teacher,
  enumerable: false, // so that it does not appear in 'for in' loop
  writable: true,
});

Teacher.prototype.greeting = function () {
  let prefix;
  const mister = ["male", "Male", "m", "M"];
  const miss = ["female", "Female", "f", "F"];

  if (mister.indexOf(this.gender) !== -1) {
    prefix = "Mr.";
  } else if (miss.indexOf(this.gender) !== -1) {
    prefix = "Ms.";
  } else {
    prefix = "Mx.";
  }

  console.log(
    "Hello. My name is " +
      prefix +
      " " +
      this.name.last +
      ", and I teach " +
      this.subject +
      "."
  );
};

let person1 = new Person("Tammi", "Smith", 17, "female", [
  "music",
  "skiing",
  "kickboxing",
]);

const teacher1 = new Teacher(
  "Khobza",
  "Smith",
  32,
  "f",
  ["music", "skiing", "kickboxing"],
  "khbiza"
);

person1.greeting.call(teacher1);

teacher1.greeting();

// console.log(Teacher.prototype.constructor, teacher1);
