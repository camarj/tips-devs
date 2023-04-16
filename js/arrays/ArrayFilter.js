/* ¿Quieres filtrar los nulls de un array en #JavaScript? 🤔 ¡El método filter es justo lo que necesitas! 🚀 Utilízalo con una simple función de callback y listo el pollo tendrás un nuevo array sin elementos nulos. 💪💻
 */

let frutas = ['Banana', 'Mango', 'Manzana', null, null, 'Pera'];

frutas = frutas.filter(fruta => {
  return fruta;
});

console.log(frutas);
