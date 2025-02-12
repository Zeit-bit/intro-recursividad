/*
2. Escribe una función recursiva a la que le pasas una cadena de texto y la devuelva invertida,
   para luego imprimirla en la consola.
*/

function InvertirCadena (cadenaAinvertir: string, caracteresEnCadena: string[] = cadenaAinvertir.split(""), caracteresInvertidos: number = 0): string {
    if (Math.floor(cadenaAinvertir.length/2) === caracteresInvertidos) return caracteresEnCadena.join("");

    let temp: string = caracteresEnCadena[caracteresInvertidos];
    caracteresEnCadena[caracteresInvertidos] = caracteresEnCadena[caracteresEnCadena.length-1-caracteresInvertidos];
    caracteresEnCadena[caracteresEnCadena.length-1-caracteresInvertidos] = temp;
    
    return InvertirCadena(cadenaAinvertir, caracteresEnCadena, caracteresInvertidos + 1);
}

console.log(InvertirCadena("recursividad"));