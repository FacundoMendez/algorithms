/* Encuentra la palabra más larga en una cadena
Devuelve la longitud de la palabra más larga en la oración proporcionada. */


function findLongestWordLength(str) {

    let count = 0
    let maxCount = 0
  
    for (let i = 0 ; i < str.length ; i++){
      if(str[i] === " "){
        count = 0
      }else{
        count++
      }
  
      if(count > maxCount){
        maxCount = count
      }
    }
  
  
    return maxCount;
  }
  
  
  
  console.log(findLongestWordLength("The quick brown fox jumped overrr the lazy dog"))