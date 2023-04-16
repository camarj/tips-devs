/* Array.prototype.flat(): Este método crea una nueva matriz aplanando las submatrices en el array original hasta una profundidad especificada. */

//*Por ejemplo, si quieres convertir un array multidimensional en un array unidimensional
const arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newArr = arr.flat();
console.log(newArr);
