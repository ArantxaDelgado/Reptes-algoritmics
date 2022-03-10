// Kata: https://www.codewars.com/kata/554e4a2f232cdd87d9000038

// La universidad de Michichuguin nos ha pedido un software que calcula el secuencia ADN complementaría a otra
// A<-->T C<--->G . El complementario de A es T y viceversa. El complementario de C es G y viceversa.

function DNAStrand(dna){
  let sequence = {
    "A": "T",
    "T": "A",
    "G": "C",
    "C": "G"
  }
  return dna.replace(/A|T|G|C/g, function(matched){
    return sequence[matched];
  });
}

console.log(DNAStrand("AAAA")); //TTTT
console.log(DNAStrand("ATTGC"));  //TAACG
console.log(DNAStrand("GTAT")); //CATA
