// Arrays
// const myArray = [];
// const myArray = ['A','B','C','D','E','F'];

// add element to an array
// myArray[0] = "Dave"
// myArray[1] = 101;
// myArray[2] = false;

// // refer to an array
// console.log(myArray);

// // length property
// console.log(myArray.length);

// // last element in an array
// console.log(myArray[myArray.length - 1]);
// console.log(myArray[1]);

// // append something to array
// myArray.push("school");
// console.log(myArray);

// // remove somthing from array
// const lastItem = myArray.pop();


// // add velue to array from front of array
// console.log(lastItem);
// myArray.unshift(42);
// myArray.shift();

// const firstItem = myArray.shift();
// console.log(firstItem);
// console.log(myArray);
// console.log(myArray[1]);
// console.log(myArray[2]);

// delete myArray[1];
// myArray.splice(1,1, 42); // replace first velue using splice
// console.log(myArray);
// console.log(myArray[1]);
// (3) ['Dave', empty, false]

// const newArray = myArray.slice(2, 5);
// console.log(newArray);

// myArray.reverse();
// console.log(myArray);

// const newString = myArray.join();
// const newArray = newString.split(",");
// console.log(newString);
// console.log(newArray);

// const myArrayA = ['A','B','C'];
// const myArrayB = ['D','E','F'];
// const newArray = myArrayB.concat(myArrayA);
// const newArrayAgain = [...myArrayA,...myArrayB] // using spread operator
// const newArrayNested = [myArrayA,myArrayB]
// console.log(newArray);
// console.log(newArrayAgain);
// console.log(newArrayNested);

const equipShelfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf balls", "tennis balls"];
const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

console.log(equipShelfA[1]);
console.log(clothesShelfB[0]);
const equipDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];
console.log(equipDept);
console.log(equipDept[0][1]);
console.log(clothesDept);
console.log(clothesDept[1][0]);

const sportStore = [equipDept, clothesDept];
console.log(sportStore);
console.log(sportStore[0][0][1]);
console.log(sportStore[1][1][0]);


 