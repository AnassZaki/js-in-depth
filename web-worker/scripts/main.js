const worker = new Worker("../web-worker/workers/index.js");

// listen to message event of worker
// worker.addEventListener("message", function (event) {
//   var div = document.getElementById("result");
//   div.innerHTML = "message received => " + event.data;
//   console.log("message received from worker => ", event.data);
// });

// // listen to error event of worker
// worker.addEventListener("error", function (event) {
//   console.error("error received from workerFor => ", event);
// });

// // load results from web worker
// function loadResult() {
//   // add loading text until `message` event listener replaces it
//   const div = document.getElementById("result");
//   div.innerHTML = "loading...";
//   // emit message event to worker
//   worker.postMessage(null); // we don't need payload here
// }

const blob = new ArrayBuffer(100);
const blobObj = { img1: new ArrayBuffer(100), img2: new ArrayBuffer(300) };
const blobArr = [new ArrayBuffer(100), new ArrayBuffer(200)];

// listen to message event of worker
worker.onmessage = function (event) {
  console.log("[onmessage] blob = ", blob);
};

// load results from web worker
function loadResult() {
  console.log("[loadResult] blob = ", blob);
  worker.postMessage(blob, [blob]);
  worker.postMessage(blobObj, [blobObj.img1]); // transfer only blobObj.img1
  worker.postMessage(blobArr, [blobArr[1]]); // transfer only blobObj[1]
}
