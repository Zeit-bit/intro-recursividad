// Ejemplo de recursividad

function EscribirNumeros (cantidadDeNumeros: number, cantidadEscrita?: number): void {
    if (cantidadEscrita === undefined) {
        EscribirNumeros(cantidadDeNumeros, 0);
        return;
    }

    if (cantidadDeNumeros === cantidadEscrita)
    {
        return;
    }
        
    console.log(cantidadEscrita + 1);
    EscribirNumeros(cantidadDeNumeros, cantidadEscrita + 1);
}

EscribirNumeros(10);