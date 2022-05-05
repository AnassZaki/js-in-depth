/**
 * Resize will try to call our draw millions of times
 * we want to limit that rate by throttling the calls.
 */
const throttle = (callback, delay) => {
  let timeout;
  let storedEvent;

  return function throttleEventHdandler(event) {
    storedEvent = event;

    if (!timeout) {
      callback(storedEvent);

      storedEvent = null;

      timeout = setTimeout(() => {
        timeout = null;
        if (storedEvent) {
          throttleEventHdandler(storedEvent);
        }
      }, delay);
    }
  };
};

function draw() {
  const div = document.createElement("div");
  body.appendChild(div);
}

const drawThrottle = throttle(draw, 2000);

window.addEventListener("resize", drawThrottle);
