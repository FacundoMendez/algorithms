/* Truncar una cuerda
Trunque una cadena ( primer argumento ) si es más larga que la longitud máxima de cadena dada ( segundo argumento ). Devuelve la cuerda truncada con un ... final. */

function truncateString(str, num) {

    if(str.length > num){
       return str = str.slice(0, num) + "...";
    }else{
        return str = str.slice(0, num)
    }
  
  }
  
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length))
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length +2))
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))
  
  console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11))