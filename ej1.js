/* Escribir una función en JavaScript llamada "removeConsecutiveChars" que reciba un parámetro "str" de tipo string y un parámetro "num" de tipo integer.
La función debe iterar sobre el string "str" y eliminar los caracteres consecutivos que se repitan más de "num" veces.
La función debe devolver el string resultante.
Ejemplo:

removeConsecutiveChars("aaabbbccc", 2) => "abc"
removeConsecutiveChars("abcabcabc", 1) => "abc"
removeConsecutiveChars("abcabcabc", 2) => "abcabc"
 */


const removeConsecutiveChars = (str, num) => {

    let newStr = ""
    let actStr = ""
    let count = 0

    for( let i = 0 ; i < str.length ; i++){
        if(str[i] !== actStr){
            actStr = str[i]
            newStr += actStr
            count = 1
        }else{
            if(count < num){
                newStr += actStr
                count++
            }
        }


    }

    return newStr
}

console.log(removeConsecutiveChars("dddddddevvvvFrrrrrrrroontt", 1))