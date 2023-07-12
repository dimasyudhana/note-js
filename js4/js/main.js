// Loops
// let myNumbers = 0;
// while (myNumbers < 50) {
//     // myNumbers++;
//     myNumbers += 2;
//     console.log(myNumbers);
// }
// don't create an endless loop taht will receive run out of memory.

// let myNumbers = 50
// do {
//     console.log(myNumbers);
// } while (myNumbers<50);

// for (let i = 0;i <= 10; i++) {
//     console.log(i);
// }

// let nama = "Dave";
// for (let i = 0;i <= nama.length; i++) {
//     console.log(nama.charAt(i));
// }

// let nama = "Dave";
// let counter = 0;
// let myLetter;
// while (true) {
//     myLetter = nama[counter];
//     console.log(myLetter);
//     if (myLetter === "v") break;
//     counter++
// }

let nama = "Dave";
let counter = 0;
let myLetter;
while (counter <= 3) {
    myLetter = nama[counter];
    console.log(myLetter);
    if (counter === 1) {
        counter += 2;
        continue;
    }
    if (myLetter === "v") break;
    counter++
}
console.log(counter);