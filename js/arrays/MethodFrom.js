


/* Método Array.from crea una nueva instancia de un 
arreglo a partir de un objeto iterable */

console.log(Array.from('javascript'));

/*   El método 'Array.from()' acepta una función de devolución de llamada que le permite 
  ejecutar la función de mapeo en cada elemento de la matriz que se está creando. */

function SumaUno() {
  return Array.from(arguments, x => x + 1);
}
console.log(SumaUno(1, 2, 3));







function arrayFromArgs() {
  return Array.from(arguments);
}

console.log(arrayFromArgs('javascript', 'node'));
