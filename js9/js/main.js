// Objects
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