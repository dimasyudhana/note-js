// Javascript Objects
// Object are one of the core concpets in javascript.
// Javascript variables are containers for data values. Objects arre variables too same as struct on golang, but they can contain may values.
// Think of an object as a list of values that are witten as key:value pairs, with the name and the values separated by colons.
// These values are called properties or attributes.

// Example:

// var person = {
//   name: "Zalai", Age: 15,
//   favColor: "green", height : 183
// };

// Object Properties
// you can access object properties in two ways.
// objectName.propertyName
// obejctName['propertyName']

// This example demontrates how to access the age of our person object.
// var person = {
//   name: "John", age: 15,
//   favColor: "blue", height: 183
// };
// var x = person.age;
// var y = person['age'];

// document.writeln(x);
// document.writeln(y);

// Javacript built-in length prop is used to count the number of characters in a prop or string.
// var course = {name: "JS", lessons: 41};
// document.writeln(course.name.length);

// Object Methods
// Methods are functions that are stored as object properties.
// An object method is a property that contains a funxtion definition.
// Use the following symtax to access an object method.

// objectName.methodName()
// document.writeln("This is some text");

// The given class represents a coboid (rectangular prism) that contains the prop of length, width, and height.
// Complete the volume of the given cuboid to the console.
// To calculate the volume of cuboid use length*width*height formula

// var cuboid = {
//   length: 25,
//   width: 50,
//   height: 200
// };

// var a = cuboid.length;
// var b = cuboid.width;
// var c = cuboid.height;
// // var a = cuboid['length'];
// // var b = cuboid['width'];
// // var c = cuboid['height'];

// document.writeln(a*b*c);
// document.write(cuboid.length*cuboid.width*cuboid.height)

// console.log(a*b*c);
// console.log(cuboid.length*cuboid.width*cuboid.height)

// The object constructor
// In the previous lesson, we created an object using the object literal (or initializer) syntax.

var person = {
  name: "John", age: "42", favColor: "red"
}

// keyword this allows you to create only a single object.
// sometimes, we need to set an "object type" is to use an object constructor function.
// the this keyword refers to the current object.
// Note that this is not a variable.
// Its a keyword, and its value cannot be changed.

function person(name, age, color) {
  this.name = name;
  this.age = age;
  this.favColor = color;
}

// Creating Objects
// once you have an object constructor, you can use the new kayword to create new objects of the same type.

var Person1 = new person("Zalai", 15, "blue");
var Person2 = new person("Richard", 27, "red");

document.writeln(Person1.age);
document.writeln(Person2.favColor);

function person (name, age) {
  this.name = name;
  this.age = age;
}
var John = new person("John", 25);
var James = new person("James", 21);

document.write(John.age);

// Creating Your Own Objects
// Bob was hired as an airport information officer and needs to generate status messages for each flight․ Let’s help him!
// Complete the given program by fixing the constructor, making a flight object, and assign it to the given variable to correctly execute the corresponding message.
// Flight ID and the flight status(landed, on time, delayed, etc.) are taken as input.
// Example Input
// NGT 929
// landed
// Example Output
// Flight NGT 929 has landed



// key-values pairs in curly braces
// const myObj = {nama:"Dave"};
// const anotherObj = {
//   // create some properties name
//   alive: true,
//   answer: 42,
//   hobbies: ["Eat","Sleep","Code"],
//   beverage: {
//     morning: "Coffee",
//     afternoon: "Iced tea",
//   },
//   // create method using anonimous func
//   // action: function() {
//   //   return "Hey!";
//   // }
//   action: function() {
//     return `Time for ${this.beverage.morning}`;
//   }
// };

// console.log(myObj.nama);
// console.log(anotherObj);
// console.log(anotherObj.alive); // true
// // without dot notation
// console.log(anotherObj["alive"]); // true
// console.log(anotherObj["beverage"]);
// console.log(anotherObj.beverage.afternoon)
// console.log(anotherObj.hobbies);
// console.log(anotherObj.hobbies[0]);
// console.log(anotherObj.action);
// console.log(anotherObj.action());

// const vehicle = {
//   wheels: 4,
//   engine: function() {
//     return "Vrrrommm!";
//   }
// }

// const truck = Object.create(vehicle);
// truck.doors = 2
// console.log(truck);
// console.log(truck.wheels); //inheritance
// console.log(truck.engine());

// const car = Object.create(vehicle);
// car.doors = 4;
// car.engine = function() {
//   return "Whoosh!";
// };
// console.log(car.engine());
// console.log(car.wheels);
// const tesla = Object.create(car);
// console.log(tesla.wheels);
// console.log(tesla.engine());
// tesla.engine = function() {
//   return "Shuush...";
// };
// console.log(tesla.engine());


const band = {
  vocals: "Robert Plant",
  guitars: "Jimmy Page",
  bass: "Jhon Paul Jones",
  drums: "John Bonham"
};

// band.start = function
// delete band.bass;
// console.log(band.hasOwnProperty("bass"));
// console.log(Object.keys(band));
// console.log(Object.values(band));

// for (let job in band) {
//   console.log(`On ${job}, it's ${band[job]}!`);
// }

// // destructuring objects
// const { guitars: myVariable, drums: myDrumer } = band;
// console.log(myVariable);
// console.log(myDrumer);

const { vocals, guitars, bass, drums} = band;
console.log(vocals);
console.log(guitars);

function sings({ vocals }) { return `${vocals} sing!`};
console.log(sings(band));

