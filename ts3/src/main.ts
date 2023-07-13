// run in live server : http://localhost:5500/ts3/build/
// array & object

// let strArr: string[]
let strArr = ['One', 'Two', 'Three'];
// let guitars: (string | number)[]
let guitars = ['Strat', 'Les Paul', 5432];
// let mixedData: (string | number | boolean)[]
let mixedData = ['EVH', 1984, true];
// let test: any[]
let test = [];

// Type 'number' is not assignable to type 'string'.ts(2322)
// strArr[0] = 42;
strArr[0] = 'John';
strArr.push('Wey!');

guitars[0] = 1996;
guitars.unshift('Zoe');


//   Type '(string | number)[]' is not assignable to type 'string[]'.
//   Type 'string | number' is not assignable to type 'string'.
//   Type 'number' is not assignable to type 'string'.ts(2322)
// strArr = guitars
guitars = strArr 
mixedData = guitars

let bands: string[] = [];
bands.push('Van Halen');

// Tuple
let myTuple: [string, number, boolean] = ['Dave', 42, true];
let mixed = ['John', 1, false];
// mixed possible 
mixed = myTuple;
//   Type '(string | number | boolean)[]' is not assignable to type '[string, number, boolean]'.
//   Target requires 3 element(s) but source may have fewer.ts(2322)
// myTuple = mixed;

myTuple[1] = 42;

let myObj: object
myObj = []
console.log(typeof myObj); // object
myObj = bands
myObj = {}

const exampleObj = {
    prop1: 'Dave',
    prop2: true,
}

// Type 'boolean' is not assignable to type 'string'.ts(2322)
// exampleObj.prop1 = true
exampleObj.prop1 = 'true'

// when to use type and interface , interface to define class -> method

type Guitarist = {
    name: string,
    active?: boolean, // how to make prop optional - (property) active?: boolean | undefined
    albums: (string | number)[]
}

interface Guitarist2 {
    name: string,
    active?: boolean, // how to make prop optional - (property) active?: boolean | undefined
    albums: (string | number)[]
}

// Property 'active' is missing in type '{ name: string; albums: (string | number)[]; }' but required in type 'Guitarist'.ts(2741)
let evh: Guitarist = {
    name: 'Eddie',
    // active: false, // how to solve
    // active: false,
    albums: [1234, 1234, 'OU324']
};

let jp: Guitarist = {
    name: 'Jimmy',
    active: true,
    albums: ["1234", "1234", "OU324"]
};

// same type
evh = jp

const greetGuitarist = (guitarist: Guitarist) => {
    return `Hello ${guitarist.name}!`
};

const greetGuitarist2 = (guitarist: Guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name?.toUpperCase()}!`
    }
    return 'Hallu...'
};


console.log(greetGuitarist(jp));
console.log(greetGuitarist2(evh));

// object
// main.js:71 Hello Jimmy!
// main.js:72 Hello JIMMY! see main.js 87


enum Banks {
    BRI = 1,
    BCA,
    BNI,
    MANDIRI,
}