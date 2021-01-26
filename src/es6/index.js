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
