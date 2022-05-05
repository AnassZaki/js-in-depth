export const getProtein = async (name) => {
  const proteins = {
    chicken: "🍗",
    beef: "🥩",
    fish: "🐡",
  };

  return proteins[name];
};

// getProtein("chicken").then(console.log);

// Async + Await

export const makeMeal = async () => {
  const a = await getProtein("beef");
  const b = await getProtein("fish");

  return [a, b];
};

// makeMeal().then(console.log);

const makeMeal2 = () => {
  let a;
  return getProtein("beef")
    .then((v) => {
      a = v;
      return getProtein("fish");
    })
    .then((v) => [a, v]);
};

// makeMeal2().then(console.log);
