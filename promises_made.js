let x = 0;
let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 2000);
});

console.log("Before calling promise");
myPromise.then((successMessage) => {
  console.log("From Callback " + successMessage);
});

console.log("After calling promise");
//
