/**
 * 
 * @param {*} palabraSecreta 
 * @param {*} posicion
 * 
 * Devuelve:
 * -1: Si la letra NO está en la palabra secreta
 * 0: Si la letra está en la palabra secreta PERO en una posición diferente
 * 1: Si la letra está en la palabra secreta Y está en la posición correcta 
 */


 function rightOrder(palabraSecreta, palabraIntroducida) {
    // array para guardar resultados
    let resultados = [];
    // for para comprobar cada carácter del string introducido
    for (let i = 0; i < palabraIntroducida.length; i++) {
        // comprobamos si se encuentra el mismo carácter en la palabra secreta 
        if (palabraIntroducida[i] == palabraSecreta[i]) {
            resultados.push(1);
            //comprobamos si la palabra secreta contiene el carácter sin importar la posición
        } else if (palabraSecreta.includes(palabraIntroducida[i])) {
            resultados.push(0);
            //no contiene el carácter asi que lo valoramos con -1
        } else {
            resultados.push(-1);
        }
    }//devolvemos array con los datos
    return resultados;
}

let palabraSecreta = "SAUNA"

console.log(palabraSecreta);
console.log("ERROR:", rightOrder(palabraSecreta, "ERROR"));
console.log("SUEÑA:", rightOrder(palabraSecreta, "SUEÑA"));
console.log("SALTA:", rightOrder(palabraSecreta, "SALTA"));
console.log("SAUNA:", rightOrder(palabraSecreta, "SAUNA"));
