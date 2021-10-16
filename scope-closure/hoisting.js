// Function declaration are hoisted to the top
// sayMyName("anass");
function sayMyName(name) {
  console.log(name);
}

// Variable declared with {var} are also hoisted to the top
// They are initialized with {undefined}
console.log(myName);
var myName;
myName = "Anass";

// Variables declared with {let} & {const} are hoisted to the top but not initialized
// They enter a Temporal Dead Zone and cannot be read/written until they have been fully initialized
console.log(hisName);
let hisName = "Anass";

console.log(herName);
const herName = "khbiza";
