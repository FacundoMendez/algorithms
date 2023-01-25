/* Devuelva una matriz que consta del mayor número de cada submatriz proporcionada. Por simplicidad, la matriz proporcionada contendrá exactamente 4 sub-arrays.

Recuerde, puede iterar a través de una matriz con un bucle simple y acceder a cada miembro con sintaxis de matriz arr[i]. */

function largestOfFour(arr) {
    const results = [];

    for (let i = 0; i < arr.length; i++) {
      let largestNumber = arr[i][0];
      
      for (let j = 1; j < arr[i].length; j++) {
        if (arr[i][j] > largestNumber) {
          largestNumber = arr[i][j];
        }
      }

      results[i] = largestNumber;
    }
  
    return results;
  }