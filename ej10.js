//ConsignaEscribí una función que reciba dos parámetros: un stringSy un integerR.La función debe devolver un string donde los caracteres consecutivos deSno serepitan más queRveces.Tiene que devolver un string con el texto limpio y la cantidad de caracteres repetidoscorrecta.Ejemplos:Ej: "AAAAAFFFFOOOA", 2 => "AAFFOOA"Ej: "111223333344", 1 => "1234"Ej: "AABB", 1 => "AB//

let S  = "FAAAACCCUFROONNNNT";
let R  = 1;
  
const stringsRepetidos = (S, R) => {
  let cleanList= "";        //nueva lista de strings
  let sActual= "";          //string actual 
  let countRepetido = 0;    //numero de veces que se repite el string
  
  for( let i = 0 ; i < S.length ; i++){
    if( S[i] !== sActual){
      sActual = S[i];
      cleanList += sActual;      //se agrega a la nueva lista el string actual
      countRepetido = 1;         //se reinicia el contador en 1 si no se repite
    }else{
      if(countRepetido < R){   //Si se repite menos de "R" veces se agrega, si se repite más, se descarta y no se agrega al string limpio
        cleanList += sActual;
        countRepetido++;       

      }
    }
   
  }

  console.log(`Lista de Strings Original: ${S} `    + '\n' + 
              `Lista de Strings nueva: ${cleanList}`+ '\n' + 
              `Numero de veces que se puede repetir el string: ${R}`);
   
};

stringsRepetidos(S, R);
