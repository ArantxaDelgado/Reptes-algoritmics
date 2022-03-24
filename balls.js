// https://www.codewars.com/kata/53f0f358b9cb376eca001079/

/**
 * Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"
 */

class Ball {
    constructor(type = "regular"){
        this.ballType = type;
    }    
};

// ambos valores deben ser iguales para dar por bueno el juego de pruebas

// Esto es lo mismo que
// let bola = new Ball();
// console.log(bola.ballType); 

console.log(new Ball().ballType, "regular");
console.log(new Ball("super").ballType, "super");
