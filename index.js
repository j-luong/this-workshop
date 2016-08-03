// function Person() {
//   // What is the value of `this` at this point in the program?
//   // What other variable in the program has the same value?
//   //this at this point contains the object Person{}
//   console.log(this);
// };
//
// var person = new Person();
// console.log(person);

// function Person() {
//   // What is the value of `this` at this point in the program? Why?
//   //this does not refer to Person{} anymore, but a different object (index.js?, browser?)
//   console.log(this);
// };
//
// // In this version, the programmer has forgotten to put `new` before
// // `Person()`
// var person = Person();
// console.log(person);

// function Person() {
//   this.count = 5;
//   //count property is now stored in any object of the Person() function.
//   //if no object is created, it will be stored in the Global object by default
//   console.log(this);
//   // On what object is the `count` property now stored?
// };
//
// // Oh no! Accidentally left out `new` AGAIN!
// new Person();
// console.log(Person());
// // Bonus question: on what object is the `Person` function
// // stored?
// // The person function is stored in 'the global object, same as count'

// function Person() {
//   this.name = "Mary";
// };
//
// Person.prototype = {
//   exclaimName: function() {
//     // What is the value of `this` the first time `exclaimName` is run?
//     // What about the second time?
//     // Research project: Why?
//     // becasue exclaimName on ln 54 has no visibility on the Person() constructor.
//     // person.exclaimName only sees the exclaimName function.
//
//     return this.name + "!";
//   }
// };
//
// var person = new Person();
// console.log(person.exclaimName()); //returns "Mary!"
// //'this' now refers to person.
//
// var exclaimName = person.exclaimName;
// console.log(exclaimName()); //returns '!'
// //'this' now refers to the global object
//
// function Person() {
//   this.name = "Mary";
// };

// function exclaimName() {
//   // What is the value of `this` the first time `exclaimName` is run?
//   // What about the second time?
//   // Research project: Why?
//
//   return this.name + "!";
// };
//
// console.log(exclaimName());
//
// var person = new Person();
// person.exclaimName = exclaimName;
// //person.exclaimName, creates an attribute in person
// //= exclaimName assigns a value to the property person.exclaimName
// // exclaimName = person.exclaimName;
// console.log(person.exclaimName()); //'this' is bound to person

// // What value does `this` have here?
// this; //the window object

// function exclaimName() {
//   // What is the value of `this` the first time `exclaimName` is run?
//   // What about the second time?
//   // What about the third time?
//   // Research project: what's the difference between call and apply?
//
//   return this.name + "!";
// };
//
// console.log(exclaimName()); //!
//
// var exclaimMary = exclaimName.call({ name: "Mary" }); //Mary!
// console.log(exclaimMary);
//
// var exclaimIsla = exclaimName.apply({ name: "Isla" }); //Isla!
// console.log(exclaimIsla);


//Can you list the rules that govern the value of `this`?
//1. 'this' is defined when CALLING a function
//2. 'this' depends on HOW you call a function

//4 ways of calling functions in JS
//1. Constructor patterns
// e.g. var cat = new Cat();
// 'this' === new object

//2. Function
// e.g. cat = Cat();
// 'this' === global object

//3. Method
// e.g. cat.meow();
// 'this' === obect calling the method (cat in the above e.g.)

//4. apply
// e.g. var cat = meow.apply();
// 'this' === first arugment called
