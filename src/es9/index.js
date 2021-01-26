// Operator repose === operador de reposo
const obj = {
  firstName: "Juan",
  age: 20,
  country: "CO",
};

const { country, ...all } = obj;
console.log(all);

// propagacion

const obj2 = {
  firstName: "Juan",
  age: 20,
};

const obj3 = {
  ...obj2,
  country: "CO",
};

console.log(obj3);

// finally with promise

const helloWorld = () =>
  new Promise((resolve, reject) =>
    true
      ? setTimeout(() => resolve("Hello, World!"), 3000)
      : reject(new Error("Test error"))
  );

helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.lof(error))
  .finally(() => console.log("Finalizated"));

// Regex
// this is the best functionality added in ECMAScript-9
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2021-01-26");
const year = match[1];
const month = match[2];
const day = match[3];

console.log(`Today is ${day} of ${month} from year ${year}`);
