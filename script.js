// var:

// (function displayNumber() {
//   for (var i = 1; i <= 10; ++i) {
//     // In Function var = i (Default) if suppose, let=i means its change to block scope
//     if (true) {
//       var msg = "Hello";
//     }
//     console.log(`Value of Number is : ${i}`);
//   }
//   console.log(i);
//   console.log(msg);
// })();

//let:

(function displayNumber() {
  for (let i = 1; i <= 10; ++i) {
    // In Function var = i (Default) if suppose, let=i means its change to block scope
    if (true) {
      let msg = "Hello";
      console.log(msg);
    }
    console.log(`Value of Number is : ${i}`);
    console.log(i);
  }
})();
