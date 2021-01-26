const array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

// devulvelve matriz con otra matriz aplanada
// metodo flat(el parametro es la profundidad a la que se quiere llegar)
console.log(array.flat(2));

// flatMap
const array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap((value) => [value, value * 2]));

// eliminar los espacios del texto

const hello = "                 hello word";
const helloSpaceToEnd = "hello word                 ";
console.log(hello);
console.log(hello.trimStart());

console.log(helloSpaceToEnd);
console.log(helloSpaceToEnd.trimEnd());

// optional catch binding

// cant don't use the param error in the catch-Promise
// and not mind if these don't have use

// entries
const entries = [
  ["name", "Juan"],
  ["age", 20],
];
console.log(Object.fromEntries(entries));

// Symbol in description
const mySymbol = `My Symbol`;
const symbol = Symbol(mySymbol);
console.log(symbol.description);
