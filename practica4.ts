/*
4. Crea un programa que escriba los números de fibonacci. El usuario pedirá cuantos números quiere que se escriban.
   Utiliza recursividad.
*/

function GenerarSecuenciaFiboncci(cantidadDeNumeros: number, cantidadEscrita?: number, paresDeNumeros: number[] = [0,1,0]) {
    if (cantidadEscrita === undefined) {
        GenerarSecuenciaFiboncci(cantidadDeNumeros, 0);
        return;
    }

    if (cantidadDeNumeros === cantidadEscrita) {
        return;
    }

    console.log(paresDeNumeros[0]);
    paresDeNumeros[2] = paresDeNumeros[0]
    paresDeNumeros[0] += paresDeNumeros[1];
    paresDeNumeros[1] = paresDeNumeros[2];
    GenerarSecuenciaFiboncci(cantidadDeNumeros, cantidadEscrita + 1, paresDeNumeros);
}

GenerarSecuenciaFiboncci(10);