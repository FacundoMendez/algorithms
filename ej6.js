/* Repita una cuerda Repita una cuerda
Repita una cadena dada str ( primer argumento ) para num veces ( segundo argumento ). Devuelve una cadena vacía si num No es un número positivo. Para el propósito de este desafío, haz no usa el incorporado .repeat() método. */

function repeatStringNumTimes(str, num) {
    let strLimpio = str
    if(num > 0){
      for( let i = 0 ; i < num -1 ; i++){
        str += strLimpio
      }
      return str;
    }else{
        return "";
    }
  
  }
  console.log(repeatStringNumTimes("abc", 4))