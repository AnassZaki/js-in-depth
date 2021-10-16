function longest(...args) {
  let longest = "";
  args.forEach((el) => {
    if (el.length > longest.length) {
      longest = el;
    }
  });
  return longest;
}

function shortest(...args) {
  return args.reduce((prev, curr) =>
    prev.length <= curr.length ? prev : curr
  );
}

console.log(longest("fefefe", "fef", "f", "fefef", "fewfewfwef", "ffefe"));
console.log(shortest("fefefe", "fef", "f", "fefef", "fewfewfwef", "ffefe"));
