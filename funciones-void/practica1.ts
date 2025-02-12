/*
1. Toma el código del ejemplo y modifícalo para escribir los numeros de N a 1
*/
function EscribirNumeros (cantidadDeNumeros: number, cantidadEscrita?: number): void {
    if (cantidadEscrita === undefined) {
        EscribirNumeros(cantidadDeNumeros, 0);
        return;
    }

    if (cantidadDeNumeros === cantidadEscrita)
    {
        return;
    }
        
    console.log(cantidadDeNumeros - cantidadEscrita);
    EscribirNumeros(cantidadDeNumeros, cantidadEscrita + 1);
}

EscribirNumeros(10);