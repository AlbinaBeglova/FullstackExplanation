// // const test = {
// //   prop: 42,
// //   func: function() {
// //     return this.prop;
// //   },
// // };

// // console.log(test.func());

// function f1() {
//   return this;
// }

// // у браузері:

// f1() == window;

// // у Node:

// f1() == global;


// function Employee() {
//   sayhello = "hello";
// }

// var fred = new Employee;

// fred.__proto__();

// fred.__proto__ === Employee.prototype; //true

// // fred.створено_на_основі === конструктор функції Employee


// const obj1 = {};
// const protoObj = {x: 10, y: 20};

// obj1.__proto__ = protoObj;

// console.log(obj1.x);
// console.log(obj1.y);

// //---------------------

// function Example() {}
// Example.prototype = { z: 30, q: 40 };

// const obj2 = new Example;

// const obj3 = new Example;

// console.log(obj2.z);

// console.log(obj3.q);

// const animal = {
//   name: "Барсик",
//   sound: function(soundType) {
//     console.log(`${this.name} видає звук: ${soundType}`);
//   }
// };

// const cat= {
//   name: "Муся"
// };

// animal.sound.call(cat, 'Мяу');

// const animal = {
//   name: "Рекс",
//   sound: function(soundType1, soundType2) {
//     console.log(`${this.name} видає звуки: ${soundType1} та ${soundType2}`);
//   }
// };

// const dog ={
//   name: "Жучка"
// };


// animal.sound.apply(dog, ["Гав","Гав-гав"]);

// class Person {

//   constructor(name,phone,mail) {
//     this.name = name;
//     this.phone=phone;
//     this.mail=mail;
//   }

//   constructor(name,phone) {
//     this.name = name;
//     this.phone=phone;
//   }

//   introduce() {
//     console.log(`Привіт, мене звати ${this.name}`);
//   }


// }

// const mango = new Person("Манго");

// mango.introduce();

// const cheeseburger = new Burger();
// cheeseburger.addbun()
// cheeseburger.addcheese()

// constructor(bun,cheese, null, null ,null )




function myFunc(theObject) {
  theObject.make = "Toyota";
}

var mycar = { make: "Honda", model: "Accord", year: 1998 };
var x,y;

x = mycar.make; // x = "Honda"

myFunc(mycar);

y = mycar.make; //y = "Toyota"

console.log(x);
console.log(y);

