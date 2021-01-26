const data = {
  frontend: "Juan",
  backend: "Isabel",
  design: "Ana",
};

// Object-Entries
const entriesData = Object.entries(data);
console.log(entriesData, entriesData.length);

// Object-Values
const valuesData = Object.values(data);
console.log(valuesData);

// padding
const stringHello = "hello";
console.log(stringHello.padStart(8, "hi "));
console.log(stringHello.padEnd(11, " world"));

console.log("hello".padEnd("11", " -----"));
console.log("food".padEnd("10", " -----"));

// Promise in es6 - with Async-Await
let dataBoolean = true;
const helloPromise = () =>
  new Promise((resolve, reject) => {
    dataBoolean
      ? setTimeout(() => resolve("Hey, Whats Up?!"), 3000)
      : reject(new Error("Test Error"));
  });

const helloAsyncAwait = async () => {
  try {
    const response = await helloPromise();
    return console.log(response);
  } catch (error) {
    return console.log(error);
  }
};

helloAsyncAwait();
