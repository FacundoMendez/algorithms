/* Buscadores de guardianes
Cree una función que mire a través de una matriz arr y devuelve el primer elemento que pasa una 'prueba de verdad'. Esto significa que dado un elemento x, la 'prueba de verdad' se pasa si func(x) es true. Si ningún elemento pasa la prueba, regrese undefined.

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) debería regresar 8.
Esperando:findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) debería regresar undefined

*/


function findElement(arr, func) {
    let num = 0;
  
    for(let i = 0; i < arr.length; i++){
        num = arr[i]
  
      if(func(num)){
        return num
      }
    }
  
    return undefined;
  }
  
  
  console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }))
  
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }))
