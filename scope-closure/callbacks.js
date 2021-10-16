const addTwo = (num) => num + 2;

function map(array, callback) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
}

// console.log(map([1, 2, 3], addTwo));

function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

// let alphabet = "";
// forEach([1, 2, 3], (num) => (alphabet += num));
// console.log(alphabet);

function mapWith(array, callback) {
  let newArr = [];
  forEach(array, (el) => newArr.push(callback(el)));
  return newArr;
}

// console.log(mapWith([1, 2, 3], addTwo));

function filter(array, callback) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// console.log(filter([1, 2, 3], (el) => el === 1));

Array.prototype.myFilter = function (callback) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

// console.log([1, 2, 3].myFilter((el) => el === 1));

function reduce(array, callback, initialValue) {
  let previousValue = initialValue;
  for (let i = 0; i < array.length; i++) {
    if (previousValue) {
      previousValue = callback(previousValue, array[i], i);
    } else {
      previousValue = array[i];
    }
  }
  return previousValue;
}

// console.log(reduce([2, 3, 4], (a, b) => a + b));

// Challenge 7
function intersection(...arrays) {
  return reduce(arrays, (prev, curr) => {
    return filter(prev, (el) => curr.includes(el));
  });
}

// console.log(
//   intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])
// );

// Challenge 8
function union(...arrays) {
  const flattenedArr = reduce(arrays, (prev, curr) => {
    return prev.concat(curr);
  });

  return reduce(
    flattenedArr,
    (prev, curr, i) => {
      if (prev.indexOf(curr) === -1) prev.push(curr);
      return prev;
    },
    []
  );
}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

// Challenge 9
function objOfMatches(array1, array2, callback) {
  let objOfMatches = {};

  array1.forEach((el, i) => {
    if (callback(el) === array2[i]) {
      objOfMatches[el] = callback(el);
    }
  });

  return objOfMatches;
}

// console.log(
//   objOfMatches(
//     ["hi", "howdy", "bye", "later", "hello"],
//     ["HI", "Howdy", "BYE", "LATER", "hello"],
//     function (str) {
//       return str.toUpperCase();
//     }
//   )
// );
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

// Challenge 10
function multiMap(arrVals, arrCallbacks) {
  let obj = {};

  forEach(arrVals, (el) => {
    obj[el] = map(arrCallbacks, (callback) => callback(el));
  });

  return obj;
}

// console.log(
//   multiMap(
//     ["catfood", "glue", "beer"],
//     [
//       function (str) {
//         return str.toUpperCase();
//       },
//       function (str) {
//         return str[0].toUpperCase() + str.slice(1).toLowerCase();
//       },
//       function (str) {
//         return str + str;
//       },
//     ]
//   )
// );
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

// Challenge 11
function objectFilter(obj, callback) {
  let filteredObj = {};

  for (const key in obj) {
    if (obj[key] === callback(obj[key])) {
      filteredObj[key] = obj[key];
    }
  }

  return filteredObj;
}

// const cities = {
//   London: "LONDON",
//   LA: "Los Angeles",
//   Paris: "PARIS",
// };
// console.log(objectFilter(cities, (city) => city.toUpperCase())); // Should log { London: 'LONDON', Paris: 'PARIS'}

// Challenge 12
function majority(array, callback) {
  const filteredArr = array.filter((el) => callback(el));
  if (filteredArr.length > array.length / 2) {
    return true;
  } else {
    return false;
  }
}

// /*** Uncomment these to check your work! ***/
// const isOdd = function (num) {
//   return num % 2 === 1;
// };
// console.log(majority([1, 2, 3, 4, 5, 6, 7, 8, 9], isOdd)); // should log: true
// console.log(majority([2, 3, 4, 5], isOdd)); // should log: false

// Challenge 13
function prioritize(array, callback) {
  const prioArr = array.reduce((prev, curr) => {
    if (callback(curr)) prev.push(curr);

    return prev;
  }, []);

  return prioArr.concat(array.filter((el) => !callback(el)));
}

// /*** Uncomment these to check your work! ***/
// const startsWithS = function (str) {
//   return str[0] === "s" || str[0] === "S";
// };
// console.log(
//   prioritize(
//     ["curb", "rickandmorty", "seinfeld", "sunny", "friends"],
//     startsWithS
//   )
// ); // should log: ["seinfeld", "sunny", "curb", "rickandmorty", "friends"];

// Challenge 14
function countBy(array, callback) {
  return array.reduce((prev, curr) => {
    if (callback(curr) in prev) {
      prev[callback(curr)]++;
    } else {
      prev[callback(curr)] = 1;
    }
    return prev;
  }, {});
}

// /*** Uncomment these to check your work! ***/
// console.log(
//   countBy([1, 2, 3, 4, 5], function (num) {
//     if (num % 2 === 0) return "even";
//     else return "odd";
//   })
// ); // should log: { odd: 3, even: 2 }

// Challenge 15
function groupBy(array, callback) {
  return array.reduce((prev, curr) => {
    prev[callback(curr)] = [...(prev[callback(curr)] || []), curr];

    return prev;
  }, {});
}

// /*** Uncomment these to check your work! ***/
// const decimals = [1.3, 2.1, 2.4];
// const floored = function (num) {
//   return Math.floor(num);
// };
// console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }
