"use strict";
// run in live server : http://localhost:5500/ts3/build/
// type assertions : sometimes you will have information about the type of a value that ts can not know about.
// convert to more or less specific
let a = 'hallu...';
let b = a; // less specific type
let c = a; // more specific type
// this can not be used on react
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// be carefull TS sees no prob - but a string is returned
let nextVal = addOrConcat(2, 2, 'concat');
// Conversion of type 'number' to type 'string' may be a mistake because 
// neither type sufficiently overlaps with the other. If this was intentional, 
// convert the expression to 'unknown' first.ts(2352)
// 10 as string
10;
// The DOM 
const img = document.querySelector('img');
// const img = document.querySelector('#myId')
const img2 = document.querySelector('img');
const myImg = document.getElementById('#img');
// nextImg can not work on react
const nextImg = document.getElementById('#img');
// 'image' is possibly 'null'.ts(18047)
img.src;
img2.src;
myImg.src;
