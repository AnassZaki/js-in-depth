// Global Context invocation
// `this` refers to the global object (Window in browser).
// the value of `this` is determined by how a function is called (runtime binding)
// console.log(this);

// Function Context invocation
// `this` value depends on how the function was called.
function getThis() {
  return this;
}

// console.log(getThis());

// Invoking Functions using `call` or `apply`
// An object can be passed as the first argument to call or apply and this will be bound to it.
var obj = { a: "Custom" };

// We declare a variable and the variable is assigned to the global window as its property.
var a = "Global";

function whatsThis() {
  return this.a; // The value of this is dependent on how the function is called
}

// console.log(whatsThis()); // 'Global' as this in the function isn't set, so it defaults to the global/window object
// console.log(whatsThis.call(obj)); // 'Custom' as this in the function is set to obj
// console.log(whatsThis.apply(obj)); // 'Custom' as this in the function is set to obj

// Class Context Invocation
class Example {
  constructor() {
    const proto = Object.getPrototypeOf(this);
    console.log(this);
    console.log(Object.getOwnPropertyNames(proto));
  }
  first() {}
  second() {}
  static third() {}
}

// new Example(); // ['constructor', 'first', 'second']

class Rectangle {
  constructor(height, width) {
    this.name = "Rectangle";
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log("Hi, I am a ", this.name + ".");
  }
  get area() {
    return this.height * this.width;
  }
  set area(value) {
    this._area = value;
  }
}

class Square extends Rectangle {
  constructor(length) {
    this.height; // ReferenceError, super needs to be called first!

    // Here, it calls the parent class's constructor with lengths
    // provided for the Rectangle's width and height
    super(length, length);

    // Note: In derived classes, super() must be called before you
    // can use 'this'. Leaving this out will cause a reference error.
    this.name = "Square";
  }
}

// const square = new Square(20);
// console.log(square);

function sayHelloTo(lastName) {
  return this.firstName + " " + lastName;
}

// console.log(sayHelloTo("Zaki")); // {this} is undefined
// console.log(sayHelloTo.call({ firstName: "Anass" }, "Zaki")); // {this} is { firstName: "Anass" }
// console.log(sayHelloTo.apply({ firstName: "Anass" }, ["Zaki"])); // {this} is { firstName: "Anass" }

// if the value passed as {this} is not an object, an attempt will be made to convert it to an object.
function bar() {
  console.log(Object.prototype.toString.call(this));
}

// bar.call(7); // [object Number]
// bar.call("foo"); // [object String]
// bar.call(undefined); // [object global]

const objWithMethods = {
  name: "anass",
  getGlobalThis: () => this,
  getScopedThis: function () {
    return () => this;
  },
};

// console.log(objWithMethods.getScopedThis()());
