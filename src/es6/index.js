// Without Default Params - ECMAScript6
function initialFun(name, age, country) {
  var name = name || "Juan";
  var age = age || 20;
  var country = country || "CO";

  console.log(name, age, country);
}

// With Default Params - ECMAScript6
function initialFun2(name = "Juan", age = 20, country = "CO") {
  console.log(name, age, country);
}

// initialFun()
initialFun2();
initialFun2("Ricardo", 24, "MX");

// Without Template Literals - ECMAScript6
let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

// With Template Literals - ECMAScript6

let epicPhrase2 = `${hello}, ${world}!`;
console.log(epicPhrase2);

// LET AND CONST, MULTILINE, SPREAD OPERATOR AND DESESTRUCTURING

let lorem = "lorem lorem asd data mine timming \n" + "other text line wherever";
console.log(lorem);

// with es6
let lorem2 = `this is frist line that code
now this is the second line of variable`;

console.log(lorem2);

// Without Desestructuring of elements
let person = {
  firstName: "Juan",
  age: 20,
  country: "CO",
};
console.log(person.firstName, person.age);

// With Desestructuring of elements
let { firstName } = person;
console.log(firstName);

// Spread Operator
let team1 = ["Juan", "Oscar", "Ricardo"];
let team2 = ["Valeria", "Yessica", "Camila"];

let education = ["David", ...team1, ...team2];
console.log(education);

// var, let, const
{
  var globalVar = "Global Var";
}
{
  let globalLet = "Global Let";
  console.log(globalLet);
}
console.log(globalVar);

// dont has reassigned
const a = "b";
console.log(a);

let firstName = "Juan";
let age = 20;

// Without Params In Object || es5
const obj = { firstName: firstName, age: age };
console.log(obj);

// With Params In Object || es6
const obj2 = { firstName, age };
console.log(obj2);

// Arrow Functions
const names = [
  { firstName, age },
  { firstName: "Oscar", age: 34 },
];

// es5
const listOfNames = names.map(function (item) {
  console.log(item);
});

// es6 - ArrowFunctions
const listOfNames2 = names.map((item) => console.log(item));

const listOfNames3 = (firstName, age) => {
  console.log(firstName, age);
};

const listofNames4 = (firstName) => {
  console.log(firstName);
};

const square = (num) => num * num;
console.log(listOfNames3("Juan", 20), listOfNames4("Juan"), square(3));

// Promise in es5
let booleanData = false;
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (booleanData) {
      resolve("Hey, this is true!");
    } else {
      reject("Ups!!");
    }
  });
};
helloPromise()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
