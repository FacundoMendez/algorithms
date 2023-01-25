/* En este kata, se requiere que, dada una cadena, reemplace cada letra con su posición en el alfabeto.

Si algo en el texto no es una carta, ignóralo y no lo devuelvas.

"a" = 1, "b" = 2, etc

Ejemplo
alphabetPosition("The sunset sets at twelve o' clock.")
Debería regresar "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"(como una cadena) */


function alphabetPosition(text) {
    let dicc = "abcdefghijklmnopqrstuvwxyz";
 
   
    let newText = ""
     
    for( let i = 0 ; i < text.length ; i++){
       for( let j = 0 ;  j < dicc.length ; j++){
          if(text[i].toLowerCase() === dicc[j] ){
            newText += (j + 1) + " "
            break
          }
       }
     
    }
   
   
   return newText.slice(0 ,-1);
 }