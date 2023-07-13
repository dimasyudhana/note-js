// run in live server : http://localhost:5500/ts3/build/
// terminology


// implicite
let myName = 'Dave';

// explicite
let myNama: string = 'Dave';
let meaningOfLife: number;
let isLoading: boolean;
let album: any;
let coupon: string | number; // union type
let isActive: number | boolean | string; // not limited to 2 type


// Type 'number' is not assignable to type 'string'.ts(2322)
// myName = 42;
myNama = 'John';
meaningOfLife = 42;
isLoading = true;
album = 'John';
album = 42;
album = true; 

//Parameter 'b' implicitly has an 'any' type.ts(7006)
const sum = (a: number, b: any) => {
    return a + b;
}

// still completely legal in js 
console.log(sum(42, 'John'));

let re1 = /\w+/g;
let re2: RegExp = /\w+/g;