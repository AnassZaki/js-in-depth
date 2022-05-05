import { getProtein } from "./async.js";

// Micro-tasks/promises - async code
const makeMealFaster = async () => {
  const a = getProtein("fish");
  const b = getProtein("beef");

  const meal = await Promise.all([a, b]);

  return meal;
};

makeMealFaster().then(console.log);

// Callback task/macro-task - asyn code - callback queue
setTimeout(() => {
  console.log("I go last :c");
}, 0);

// Main thread execution context - sync code
console.log("I go first!");

const mealRace = async () => {
  const a = getProtein("fish");
  const b = getProtein("beef");

  const winner = await Promise.race([a, b]);

  return winner;
};

// mealRace().then(console.log);

const proteins = ["beef", "fish", "chicken"];

const proteinLoop = async () => {
  for (const p of proteins) {
    const emoji = await getProtein(p);
    console.log(emoji);
  }
};

// proteinLoop();

const proteinInspection = async () => {
  if ((await getProtein("beef")) === "🥩") {
    console.log("Rip moo cow!");
  }
};

// proteinInspection();
