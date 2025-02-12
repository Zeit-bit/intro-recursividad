/*
1. Escribe una función recursiva que calcule el resultado de elevar un número a la potencia que pida el usuario.
*/

function ElevarPotencia(numeroAelevar: number, potencia: number): number {
    if (potencia == 1) return numeroAelevar;
    return numeroAelevar *= ElevarPotencia(numeroAelevar, potencia - 1);
}

console.log(ElevarPotencia(2,4));