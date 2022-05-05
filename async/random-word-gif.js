const RANDOM_WORD_URL = "https://random-word-api.herokuapp.com/word?number=1";
const GIPHY_URL = "https://api.giphy.com/v1/gifs/search?q=";
const GIPHY_PARAMS =
  "&api_key=CZIPrpfiPltwp0isbollFWSJJL5IeVRn&limit=25&offset=0&rating=g&lang=en";

const button = document.getElementById("test");

const setWordInDiv = (word) => {
  const wordSpan = document.getElementById("word");
  wordSpan.innerHTML = word;
};

const setGifinImg = (gif) => {
  const gifImg = document.createElement("img");

  gifImg.setAttribute("src", gif);

  document.getElementById("gif").appendChild(gifImg);
};

const getWordGif = async () => {
  try {
    const wordRes = await fetch(RANDOM_WORD_URL);
    const wordJson = await wordRes.json();
    const gifRes = await fetch(GIPHY_URL + wordJson[0] + GIPHY_PARAMS);
    const gifJson = await gifRes.json();

    return {
      word: wordJson[0],
      gif: gifJson.data[0].images["fixed_height_small"].url,
    };
  } catch (error) {
    console.log(error);
    return {
      word: "404",
      gif: "",
    };
  }
};

button.addEventListener("click", () => {
  Promise.resolve().then(() => console.log("Microtask 1"));
  console.log("listener 1");
});

button.addEventListener("click", () => {
  getWordGif().then((results) => {
    setWordInDiv(results.word);
    setGifinImg(results.gif);
  });
});

// button.click();

// getWordGif().then((results) => {
//   setWordInDiv(results.word);
//   setGifinImg(results.gif);
// });
