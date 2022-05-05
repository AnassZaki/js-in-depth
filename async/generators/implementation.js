const interator = "Anass"[Symbol.iterator]();

// console.log(interator.next());
// console.log(interator.next());

function makeIterator(array) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < array.length
        ? {
            value: array[nextIndex++],
            done: false,
          }
        : {
            done: true,
          };
    },
  };
}

const it = makeIterator(["yo", "ya"]);

// console.log(it.next()); // value: 'yo'
// console.log(it.next()); // value: 'ya'
// console.log(it.next()); // done: true

function* makeSimpleGenerator(array) {
  let nextIndex = 0;
  while (nextIndex < array.length) {
    yield array[nextIndex++];
  }
}

const gen = makeSimpleGenerator(["yo", "ya"]);

for (const iterator of gen) {
  console.log(iterator);
}

// console.log(gen.next()); // value: 'yo'
// console.log(gen.next()); // value: 'ya'
// console.log(gen.next()); // done: true
