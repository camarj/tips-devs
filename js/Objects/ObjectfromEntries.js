// * Object.fromEntries(): Este método realiza la operación inversa a Object.entries(), convirtiendo un array de pares clave-valor en un objeto

const entries = [
  ['a', 1],
  ['b', 2],
  ['c', 3],
];
const obj = Object.fromEntries(entries);
console.log(obj);
