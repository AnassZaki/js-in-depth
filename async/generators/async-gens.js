const promiseGenResolver = (generator) => {
  const iterator = generator();

  function iterate(iteration) {
    if (iteration.done) return iteration.value;

    const promise = iteration.value;

    return promise.then((value) => iterate(iterator.next(value)));
  }

  return iterate(iterator.next());
};

promiseGenResolver(function* generatorGetWord() {
  const url = "https://random-word-api.herokuapp.com/word?number=1";
  const response = yield fetch(url);
  const wordJson = yield response.json();

  const gifRes = yield fetch(GIPHY_URL + wordJson[0] + GIPHY_PARAMS);
  const gifJson = yield gifRes.json();

  return {
    word: wordJson[0],
    gif: gifJson.data[0].images["fixed_height_small"].url,
  };
}).then(console.log);
