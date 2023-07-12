// Javascript Classes
// class Pizza {
//   constructor(pizzaSize,pizzaType) {
//     this.type = pizzaType;
//     this.size = pizzaSize;
//     this.crust = "original";
//   }
//   get pizzaCrust() {
//     return this.crust;
//   }
//   set pizzaCrust(pizzaCrust) {
//     this.crust = pizzaCrust
//   }
//   bake() {
//     console.log(
//       `Baking a ${this.size} ${this.crust} ${this.type} crust pizza.`
//       );
//   }
// }

// const myPizza = new Pizza("small","pepperoni");
// myPizza.pizzaCrust = "thin";
// myPizza.bake();
// console.log(myPizza.pizzaCrust);

// class Pizza {
//   constructor(pizzaSize,pizzaType) {
//     this.type = pizzaType;
//     this.size = pizzaSize;
//     this.crust = "original";
//     this.toppings = [];
//   }
//   // more readable on coding
//   getCrust() {
//     return this.crust;
//   }
//   setCrust(pizzaCrust) {
//     this.crust = pizzaCrust
//   }
//   getToppings() {
//     return this.toppings;
//   }
//   setToppings(topping) {
//     this.toppings.push(topping);
//   }
//   bake() {
//     console.log(
//       `Baking a ${this.size} ${this.crust} ${this.type} crust pizza.`
//       );
//   }
// }

// const myPizza = new Pizza("small","pepperoni");
// myPizza.setCrust("thin");
// myPizza.bake();
// myPizza.setToppings("sausage");
// myPizza.setToppings("olives");
// console.log(myPizza.getToppings());
// console.log(myPizza.getCrust());


// _ mean intended to be private
class Pizza {
  crust = "original";
  #sauce = "traditional";
  #size;
  constructor(pizzaSize) {
    this.#size = pizzaSize;
  }
  // more readable on coding
  getCrust() {
    return this.crust;
  }
  setCrust(pizzaCrust) {
    this.crust = pizzaCrust
  }
  hereYouGo() {
    console.log(
      `Here you ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`
    );
  }
}

// class SpecialtyPizza extends Pizza {
//   constructor(pizzaSize) {
//     super(pizzaSize);
//     this.type = "The Works";
//   }
//   slice(){
//     console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`)
//   }
// }

// const mySpecialty = new SpecialtyPizza("medium");
// mySpecialty.slice();

// Naming convention

// Factory Function
// function pizzaFactory(pizzaSize) {
//   const crust = "original";
//   const size = pizzaSize;
//   return {
//     bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`)
//   };
// }

// const myPizza = pizzaFactory("small");
// myPizza.bake();

const myPizza = new Pizza("large");
myPizza.hereYouGo();
console.log(myPizza.crust);
console.log(myPizza.getCrust());
console.log(myPizza.crust); // public field
console.log(myPizza.sauce); // get undifined due to private field 