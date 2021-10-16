/** Scope in JS's thread of execution */

// var vs let vs const

(function updateKhobza() {
  var khobza = "batota";
  //   console.log(khobza);
})();

console.log(khobza);

// arguments objects / rest operator / variadic functions
class Animal {
  constructor(type, environment) {
    this.type = type;
    this.environment = environment;
  }

  numberOfAnimals() {
    return;
  }
}

Animal.prototype.cry = function cry() {
  console.log("waaah!");
};
