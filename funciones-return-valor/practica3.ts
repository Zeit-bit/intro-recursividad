/*
3. Escribe una función recursiva que me devuelva si una palabra esta ordenada alfabeticamente.
*/

function EstaOrdenadaAlfabeticamente(cadenaAevaluar: string, indiceActual: number = cadenaAevaluar.length-1): boolean {
    if (cadenaAevaluar[indiceActual] < cadenaAevaluar[indiceActual - 1]) {
        return false;
    }

    if (indiceActual > 1) {
        return EstaOrdenadaAlfabeticamente(cadenaAevaluar, indiceActual - 1);
    }

    return true;
}

let cadenaOrdenada: string = "abcdefg";
let cadenaDesordenada: string = "abcHdefg";

console.log(`La cadena ${cadenaOrdenada} esta ordenada? -> ${EstaOrdenadaAlfabeticamente(cadenaOrdenada)}`);
console.log(`La cadena ${cadenaDesordenada} esta ordenada? -> ${EstaOrdenadaAlfabeticamente(cadenaDesordenada)}`);

/*
Representacion visual

a,b,c -> indices[0,1,2]
indiceActual = [2]
c < b = false
2 > 1 = true -> return {
                    a,b,c
                    indiceActual = [1]
                    b < a == false
                    1 > 1 == false -> return [true] -> Esta ordenada
                }

                
d,b,c -> indices[0,1,2]
indiceActual = [2]
c < b = false
2 > 1 = true -> return {
                    d,b,c
                    indiceActual = [1]
                    b < d == true -> return [false] -> No esta ordenada
                }
*/