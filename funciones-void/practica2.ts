/*
2. Modifica el problema para ahora escribir los números en un rango que vaya de N a M, o sea
   el primer número no necesariamente será 1
*/

function EscribirNumeros(numeroInicial: number, numeroFinal: number, cantidadEscrita?: number): void {
    if (cantidadEscrita === undefined) {
        EscribirNumeros(numeroInicial, numeroFinal, 0);
        return;
    }

    let esCreciente = numeroFinal > numeroInicial;

    if ((numeroFinal - numeroInicial) * (esCreciente ? 1 : -1) + 1 === cantidadEscrita) {
        return;
    }

    console.log(esCreciente ? numeroInicial + cantidadEscrita : numeroInicial - cantidadEscrita);
    EscribirNumeros(numeroInicial, numeroFinal, cantidadEscrita + 1);
}

EscribirNumeros(5,10);
console.log("******")
EscribirNumeros(10,5);