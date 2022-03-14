// Kata: https://www.codewars.com/kata/554e4a2f232cdd87d9000038

// La universidad de Michichuguin nos ha pedido un software que calcula el secuencia ADN complementaría a otra
// A<-->T C<--->G . El complementario de A es T y viceversa. El complementario de C es G y viceversa.

function DNAStrand(dna){
  //Hacer que cada una de las letras sea la pareja de su complementaria
  let sequence = {
    "A": "T",
    "T": "A",
    "G": "C",
    "C": "G"
  }
  //Remplazar las letras por su complementaria 
  return dna.replace(/A|T|G|C/g, function(matched){
    return sequence[matched];
  });
}

console.log(DNAStrand("AAAA")); //TTTT
console.log(DNAStrand("ATTGC"));  //TAACG
console.log(DNAStrand("GTAT")); //CATA

/* Corrección Clase
function DNAStrandV2(dna) {
  // Creamos un objeto llamado "secuencia" que contiene todas las combinaciones.
  let secuencia = {
      A: "T",
      T: "A",
      G: "C",
      C: "G"
  }

  let dnaComplementary = "";
  let siguienteLetra;

  for (let index = 0; index < dna.length; index++) {
      siguienteLetra = dna[index];
      dnaComplementary = dnaComplementary + secuencia[siguienteLetra];
  }

  return dnaComplementary;
}

console.log(DNAStrandV2("AAAA")); // "TTTT"
console.log(DNAStrandV2("ATTGC")); // "TAACG"
console.log(DNAStrandV2("GTAT")) // "CATA" */