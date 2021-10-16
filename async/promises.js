let arrived = true;

const ride = new Promise((resolve, reject) => {
  if (arrived) {
    debugger;
    resolve("Your ride is here!");
  } else {
    reject("Oh no! Your ride is not here.");
  }
});

// ride.then((value) => console.log(value)).catch((error) => console.log(error));

function say1() {
  console.log(1);
}
function say2() {
  console.log(2);
}
function say3() {
  console.log(3);
  return 3;
}

// Promise.all([say1, say2, say3]).then(([result1, result2, result3]) => {
//   /* use result1, result2 and result3 */
//   console.log(result1(), result2(), result3());
// });

[say1, say2, say3].reduce((p, f) => p.then(f), Promise.resolve());

const applyAsync = (acc, val) => acc.then(val);
const composeAsync =
  (...funcs) =>
  (x) =>
    funcs.reduce(applyAsync, Promise.resolve(x));
