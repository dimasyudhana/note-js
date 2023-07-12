// Scope var, let, and const

// var x = 1;
// var x = 2;

// console.log(x);

// // let y = 1;
// // let y = 2;

// // console.log(y);

// // const z = 1;
// // z = 2;
// // console.log(z)

// var i = 1;
// let j = 2;
// const k = 3;

// console.log(i);

// //local scpoe
// {
//     let a = 4
//     console.log(a);
// }

// // local scope
// function myFunc() {
//     const b = 5;
//     console.log(b);

//     //local scpoe
//     if (true) {
//         let a = 10;
//         console.log(a);
//     }
// };

// // console.log(b);
// // console.log(i);

// myFunc();

//global scope;
var a = 1; // function scoped
let b = 2; // block scoped
const c = 3; // block scoped

console.log(`global: ${a}`);
console.log(`global: ${b}`);
console.log(`global: ${c}`);


function myFunc() {
    var a = 10;
    const b = 5; 
    // console.log(`function: ${a}`);
    // console.log(`function: ${b}`);
    // console.log(`function: ${c}`);

    {
        var a = 20; // function scope
        const c = 15; 
        console.log(`block: ${a}`);
        console.log(`block: ${b}`);
        console.log(`block: ${c}`);
    }

    console.log(`function: ${a}`);
    console.log(`function: ${b}`);
    console.log(`function: ${c}`);

}

myFunc();