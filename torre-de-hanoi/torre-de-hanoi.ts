// Devuelve el ultimo elemento de un array, si no existe devuelve -1
function PeekArray(array: number[]): number {
  return array[array.length - 1] === undefined ? -1 : array[array.length - 1];
}

// Funcion recursiva para popular una torre de Hanoi con n discos
function PopularTorre(
  numeroDeDiscos: number,
  numeroDeDiscosInsertados: number = 0,
  matrizDeTorres: number[][] = [[], [], []]
): number[][] {
  if (PeekArray(matrizDeTorres[0]) === 1) return matrizDeTorres;
  matrizDeTorres[0].push(numeroDeDiscos - numeroDeDiscosInsertados);
  return PopularTorre(
    numeroDeDiscos,
    numeroDeDiscosInsertados + 1,
    matrizDeTorres
  );
}

// Funcion que determina cual es el valor de la torre deseada del disco de encima del actual
function EncontrarTorreDeseadaDelDiscoSuperior(
  torreActual: number,
  torreDeseadaActual: number
): number {
  let posicionesDeTorres: number[] = [0, 1, 2];
  posicionesDeTorres[torreActual] = -1;
  posicionesDeTorres[torreDeseadaActual] = -1;
  let torreDeseadaDelDiscoSuperior: number = -1;
  for (let i: number = 0; i < posicionesDeTorres.length; i++) {
    if (posicionesDeTorres[i] !== -1) {
      torreDeseadaDelDiscoSuperior = posicionesDeTorres[i];
      break;
    }
  }
  return torreDeseadaDelDiscoSuperior;
}

function EncontrarPosicionDelDiscoMenorMasCercanoAlActual(
  numeroDeDiscoActual: number,
  torreDeseada: number,
  matrizDeTorres: number[][]
): number {
  let posicionDelDiscoMenorMasCercanoAlActual: number = -1;
  for (let i: number = 0; i < matrizDeTorres[torreDeseada].length; i++) {
    if (matrizDeTorres[torreDeseada][i] < numeroDeDiscoActual) {
      posicionDelDiscoMenorMasCercanoAlActual = i;
      break;
    }
  }
  return posicionDelDiscoMenorMasCercanoAlActual;
}

// Funcion principal para resolver torres de hanoi de n discos
function ResolverTorreDeHanoi(
  discosTotales: number,
  discoAmover: number = discosTotales,
  matrizDeTorres: number[][] = PopularTorre(discosTotales),
  posicionActual: number[] = [0, 0],
  torreDeseada: number = 2
): number[][] {
  // Impresion Inicial de la matriz, solo se imprime una vez
  if (
    matrizDeTorres[0][discosTotales - 1] === 1 &&
    discoAmover === discosTotales
  ) {
    console.log(matrizDeTorres);
  }

  // Asigna un valor para determinar cual es la torre a la que quiere ir el disco encima del actual a mover
  let torreDeseadaDelDiscoSuperior: number =
    EncontrarTorreDeseadaDelDiscoSuperior(posicionActual[0], torreDeseada);

  // Hay mas de una ocasion en la que se presentan bloqueos para que un bloque pueda pasar a otro, para ello se encierran las condiciones en
  // un while para que esten controladas las instancias recursivas y solo se pueda mover el discoActual cuando corresponde
  while (
    discoAmover !== PeekArray(matrizDeTorres[posicionActual[0]]) ||
    (discoAmover > PeekArray(matrizDeTorres[torreDeseada]) &&
      PeekArray(matrizDeTorres[torreDeseada]) !== -1)
  ) {
    // Si el disco actual a mover no es el ultimo elemento del array, la funcion se llama a si misma, pero con los valores del disco de encima
    if (discoAmover !== PeekArray(matrizDeTorres[posicionActual[0]])) {
      matrizDeTorres = ResolverTorreDeHanoi(
        discosTotales,
        matrizDeTorres[posicionActual[0]][posicionActual[1] + 1],
        matrizDeTorres,
        [posicionActual[0], posicionActual[1] + 1],
        torreDeseadaDelDiscoSuperior
      );
    }

    // Si el disco actual a mover es mas grande que el que existe en la torre deseada (mientras que exista un disco ahi),
    // la funcion se llama a si misma, pero con los valores del primer disco mas pequeño que el actual en la torre deseada
    if (
      discoAmover > PeekArray(matrizDeTorres[torreDeseada]) &&
      PeekArray(matrizDeTorres[torreDeseada]) !== -1
    ) {
      matrizDeTorres = ResolverTorreDeHanoi(
        discosTotales,
        matrizDeTorres[torreDeseada][
          EncontrarPosicionDelDiscoMenorMasCercanoAlActual(
            discoAmover,
            torreDeseada,
            matrizDeTorres
          )
        ],
        matrizDeTorres,
        [
          torreDeseada,
          EncontrarPosicionDelDiscoMenorMasCercanoAlActual(
            discoAmover,
            torreDeseada,
            matrizDeTorres
          ),
        ],
        torreDeseadaDelDiscoSuperior
      );
    }
  }

  // Si llega a este punto, es porque es posible mover el disco actual a mover a la torre deseada
  matrizDeTorres[torreDeseada].push(
    matrizDeTorres[posicionActual[0]].pop() as number
  );

  // Aqui se imprime en consola, la nueva configuracion de la matrizDeTorres (cada movimiento)
  console.log(
    `Mover la pieza ${discoAmover} de la torre ${
      posicionActual[0] + 1
    } a la torre ${torreDeseada + 1}`
  );
  console.log(matrizDeTorres);

  // Condicion para determinar si ya se ha completado la torre de hanoi
  if (matrizDeTorres[2][discosTotales - 1] === 1) {
    console.log("Se ha completado la torre de hanoi");
    return matrizDeTorres;
  }

  // Condicion que detecta cada vez que se logra colocar un disco a la torra final en su posicion correcta
  // Una vez lo haya hecho, cambia el valor de la posicion de la nueva torre que quedo.
  if (matrizDeTorres[2][discosTotales - discoAmover] === discoAmover) {
    let nuevaPosicionTorre: number = posicionActual[0] % 2 === 0 ? 1 : 0;
    matrizDeTorres = ResolverTorreDeHanoi(
      discosTotales,
      matrizDeTorres[nuevaPosicionTorre][0],
      matrizDeTorres,
      [nuevaPosicionTorre, 0]
    );
  }

  // Retorna la matriz para aquellas instancias que la requieren.
  return matrizDeTorres;
}

ResolverTorreDeHanoi(5);
