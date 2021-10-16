// self.onmessage = function (event) {
//   var x = 0;
//   for (var i = 0; i < 200000000; i++) {
//     x = x + i;
//   }
//   self.postMessage(x);
// };

// addEventListener("message", (event) => {
//   let x = 0;
//   for (let i = 0; i < 200000000; i++) {
//     x += i;
//   }
//   postMessage(x);
// });

onmessage = function (event) {
  console.log("[for.js] blob = ", event.data);
  postMessage("SAMPLE_PROCESSED_DATA");
};
