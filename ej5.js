/* Verifique si una cadena ( primer argumento, str) termina con la cadena de destino dada ( segundo argumento, target).

Este desafío puede ser resuelto con el .endsWith() método, que se introdujo en ES2015. Pero para el propósito de este desafío, nos gustaría que usara uno de los métodos de subcadena de JavaScript. */


function confirmEnding(str, target) {

    if (str.slice(str.length - target.length ) === target){
      return true
    }else{
      return false
    }
  
  }
  
  console.log(confirmEnding("Bastian", "n"))