// Functions

// Methods = Built-in functions!

"Dave".toLowerCase();
Math.random();

// Function Declaration Syntax:

function sum() {
    return 2 + 2;
}

console.log(sum());
console.log(typeof(sum()));

function sum(num1, num2) {
    console.log(num1);
    console.log(num2);
    if (num1 === undefined && num2 === undefined) {
        return 0;
    } else if (num2 === undefined) {
        return num1 + num1;
    }
    return num1 + num2;
}

console.log(sum(5,10));

// 2
// main.js:19 undefined
// main.js:23 NaN

// function getUserNameFromEmail(email) {
//     return email.slice(0, email.indexOf("@"));
// };

// console.log(getUserNameFromEmail("playerOne@someRandomEmail.com"));
// console.log(getUserNameFromEmail("user@Github.com"));

// const getUserNameFromEmail = function (email) {
//     return email.slice(0, email.indexOf("@"));
// };

// console.log(getUserNameFromEmail("playerOne@someRandomEmail.com"));
// console.log(getUserNameFromEmail("user@Github.com"));

// const getUserNameFromEmail = (email) => {
//     return email.slice(0, email.indexOf("@"));
// };

// console.log(getUserNameFromEmail("user@example.com"));

const toProperCase = (nama) => {
    return nama.charAt(0).toUpperCase() + nama.slice(1).toLowerCase();
};

console.log(toProperCase("dAvE"));
console.log(toProperCase("september"));

// Function = useable 