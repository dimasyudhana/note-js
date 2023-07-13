"use strict";
// run in live server : http://localhost:5500/ts3/build/
// interface, method, function
// Literal types, keep it dry
let username;
username = 'Dave';
// functions
const add = (a, b) => {
    return a + b;
};
// not ot return anything
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hallu...');
logMsg(add(2, 3));
let substract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//     (a: number, b: number): number
// };
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        // 'c' is possibly 'undefined'.ts(18048)
        return a + b + c;
    }
    // Function lacks ending return statement and return type does not include 'undefined'.ts(2366)
    return a + b;
};
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 2, 2));
logMsg(addAll(2, 2));
// if you want to skip first param u need to assign as undefined
// logMsg(sumAll(3))
logMsg(sumAll(undefined, 3));
// rest parameters
const total1 = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
// a is required
const total2 = (a = 10, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total1(1, 2, 3, 4)); // 10
logMsg(total2(undefined, 2, 3, 5)); // 20
logMsg(total2(5, 2, 3, 5)); // 15
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        // dont leave endless loop on your code.
        if (i > 100)
            break;
    }
};
// custom type guard
const isInteger = (value) => {
    return typeof value === 'number'
        ? true : false;
};
const intOrStr = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (typeof value === 'number')
        return 'number';
    //on main 98: ts need explicitely return value string
    return createError('This should never happen!');
};
