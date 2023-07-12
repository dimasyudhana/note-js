// JavaScript Errors and Error Handling
"use strict";
// const variable = "Dave";
// console.log(variable);

// const makeError = () => {
//   try {
//     // const nama = "Dave";
//     // nama = "Zoe";
//     throw new customError("This is a custom error")
//   } catch (err) {
//     // console.log(err);
//     // console.error(err);
//     // console.warn(err);
//     // console.table(err);

//     console.error(err.nama);
//     console.error(err.message);
//     console.error(err.stack);
//   }
// };

// makeError();

// function customError(message) {
//   this.message = message;
//   this.nama = "custom error";
//   this.stack = `${this.nama}: ${this.message}`;
// }

const makeError = () => {
  let i = 1;
  while (i <= 5) {
    try {
      if (i % 2 !== 0) {
        throw new Error("Odd number!");
      }
      console.log("Even number!");
    } catch (err) {
      // console.error(err.nama);
      // console.error(err.message);
      console.error(err.stack);
    } finally {
      console.log("...finally");
      i++;
    }
  }
};

makeError();

