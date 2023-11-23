// DEBOUNCING
// use case: search bar and autocomplete
const debounce = function (fn, delay) {
  let timeoutId;
  return function (...args) {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn();
    }, delay);
  };
};

// document.getElementById("debounceBtn").addEventListener("click", () => {
//   console.log("Clicked");
// });

document.getElementById("debounceBtn").addEventListener(
  "click",
  debounce(() => {
    console.log("Debounced");
  }, 2000)
);

// THROTTLING
// use case: resize and scroll
const throttle = function (fn, delay) {
  let last = 0;
  return function (...args) {
    let now = new Date().getTime();
    const diff = now - last;
    if (diff < delay) return;
    last = now;
    return fn(...args);
  };
};
// document.getElementById("throttleBtn").addEventListener("click", () => {
//   console.log("clicked");
// });
document.getElementById("throttleBtn").addEventListener(
  "click",
  throttle(() => {
    console.log("Throttled");
  }, 3000)
);
// A debounced function may starve but a throttled function would never.
// Sometimes in throttling, the final function call may not happen
// whereas it would happen for debouncing.
// Eg Consider the situation of search bar, where on typing a key an API call is fired.
// Let the duration for throttling / debouncing be 3sec and say we are just searching
// string AI . In this case if the second key press (which in our case is key I )
// is within 3 sec, then the search event won't be fired in Throttling whereas
// in Deboucing the search will be fired after 3 sec with AI as the string in the API call .
