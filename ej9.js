/* Boo quien
Compruebe si un valor se clasifica como primitivo booleano. Devolución true o false.

Las primitivas booleanas son true y false. 

booWho(true) debería regresar true.
Esperando:booWho(false) debería regresar true.
Esperando:booWho([1, 2, 3]) debería regresar false.
Esperando:booWho([].slice) debería regresar false.
Esperando:booWho({ "a": 1 }) debería regresar false.
Esperando:booWho(1) debería regresar false.
Esperando:booWho(NaN) debería regresar false.
Esperando:booWho("a") debería regresar false.
Esperando:booWho("true") debería regresar false.
Esperando:booWho("false") debería regresar false.
*/


function booWho(bool) {

    return typeof bool === "boolean";
  }
  
 console.log(booWho([1, 2, 3])) 