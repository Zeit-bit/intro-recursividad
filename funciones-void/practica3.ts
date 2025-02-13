/*
3. Crea un programa que cree un triangulo de * con la base siendo el número de * deseados.
   Utiliza recursividad para hacerlo. Por ejemplo, si pido que la base sea de 3*, el programa
   deberia imprimir algo como esto:
   *
   * *
   * * *
*/

function CrearTriangulo(numeroDeAsteriscosDeLaBase: number, asteriscosEscritos?: number, outputDePiramide: string = "", saltosDePiso: number[] = EncontrarSaltosDePiso(numeroDeAsteriscosDeLaBase)): void {
    // Si se utiliza la función sin el parametro opcional de los asteriscosEscritos, se vuelve a llamar a la función pero pasando el valor de 0
    if (asteriscosEscritos === undefined) {
        CrearTriangulo(numeroDeAsteriscosDeLaBase, 0);
        return;
    }

    // Formula para calcular el total de asteriscos en el triangulo
    let asteriscosTotales: number = numeroDeAsteriscosDeLaBase / 2 * (numeroDeAsteriscosDeLaBase + 1);

    // Codigo para salir de la recursion (ya se escribieron todos los asteriscos)
    if (asteriscosTotales === asteriscosEscritos) {
        console.log(outputDePiramide);
        return;
    }

    // Se toma un string al que se le suma la cantidad de asteriscos en el triangulo
    outputDePiramide += "* ";

    // Verifica si hay los suficientes asteriscos para hacer un salto de piso
    if (asteriscosEscritos + 1 === saltosDePiso[0]) {
        outputDePiramide += "\n";
        saltosDePiso.shift();
    }

    // La funcion vuelve a llamarse a si misma hasta que se ejecute el codigo de salida
    CrearTriangulo(numeroDeAsteriscosDeLaBase, asteriscosEscritos + 1, outputDePiramide, saltosDePiso);
}

function EncontrarSaltosDePiso(numeroDeAsteriscosDeLaBase: number): number[] {
    let saltosDePiso: number[] = [];

    // Formula para hallar la cantidad de asteriscos que tiene que tener el triangulo para hacer cada salto de piso (cada valor lo agrega a un array de numeros)
    for (let i = 1, j = 0; i < numeroDeAsteriscosDeLaBase; i++) {
        j = i + j;
        saltosDePiso.push(j);
    }

    return saltosDePiso;
}

// Misma funcion que EncontrarSaltosDePiso(), pero escrita como una función recursiva. 
function Saltos(numeroDePisosDelTriangulo: number, saltosDePiso: number[] = [], iteradorDePisos: number = 1, cantidadDeAsteriscosParaSalto: number = 0): number[] {
    if (iteradorDePisos === numeroDePisosDelTriangulo) {
        return saltosDePiso;
    }

    cantidadDeAsteriscosParaSalto += iteradorDePisos;
    saltosDePiso.push(cantidadDeAsteriscosParaSalto);
    return Saltos(numeroDePisosDelTriangulo, saltosDePiso, iteradorDePisos + 1, cantidadDeAsteriscosParaSalto);
}

CrearTriangulo(5);