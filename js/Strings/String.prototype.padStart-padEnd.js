/* padStart() y padEnd(): Estos métodos permiten agregar caracteres al inicio o al final de un string hasta alcanzar la longitud deseada.  */

//*Por Ejemplo:
//* Son útiles para formatear números, fechas, códigos de facturas o códigos de clientes.

const str = '42';
console.log(str.padStart(5, '0'));
console.log(str.padEnd(5, '0'));
