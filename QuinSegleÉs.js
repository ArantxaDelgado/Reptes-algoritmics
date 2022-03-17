// Url de la kata: https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

// IMPORTANTE: Plantear con lenguaje natural como resolver el ejercicio, después codificar! "Pues para resolver el algoritmo tengo que coger el año que me pasan y...."

/**
 * Implementa una función que dado un año; devuelva a que siglo pertenece.
 * 
 * @param {number} year Año 
 * @returns {number} Siglo al que pertenece dicho año.
 */

//Crear una letiable 'siglo' donde "guardar" la info
//Tengo que conseguir los 2 primeros digitos del año (substring?)
//si lo divido entre de 100 y hago un math floor me dara los 2 primeros numeros
//Tengo que sumarle 1

function century(year) {
    // Finish this :)
    //Math.ceil te da el siguiente numero entero
    let siglo = Math.floor((year - 1) / 100) + 1;
    //Si no le resto 1 el ultimo año del siglo salta a ser del siguiente siglo
    return siglo
}

console.log(century(1601)); // 17
console.log(century(1705)); // 18
console.log(century(2000)); // 20