declare function require(modulo: string);
const fs = require("fs");
CrearArchivoSoluciones();

function EightQueens(
  posicionReina: number[] = [0, 0],
  tablero: number[][] = CrearTablero(),
  nSoluciones: number[] = [0]
): boolean {
  while (EstaSiendoAtacada(posicionReina, tablero)) {
    posicionReina[1]++;
    if (posicionReina[1] > 7) {
      return false;
    }
  }

  tablero[posicionReina[0]][posicionReina[1]] = 1;

  if (posicionReina[0] === 7) {
    for (let i = 0; i < 8; i++) {
      if (tablero[7][i] === 1) {
        nSoluciones[0]++;
        console.log(`Solucion #${nSoluciones[0]}`);
        console.log(tablero);
        GuardarSolucionesEnArchivo(tablero, nSoluciones);

        if (nSoluciones[0] === 92) {
          return true;
        } else {
          tablero[posicionReina[0]][posicionReina[1]] = 0;
        }

        return false;
      }
    }
  }

  while (!EightQueens([posicionReina[0] + 1, 0], tablero, nSoluciones)) {
    tablero[posicionReina[0]][posicionReina[1]] = 0;
    if (posicionReina[1] >= 7) {
      return false;
    }
    if (posicionReina[1] != 7) posicionReina[1]++;
    while (EstaSiendoAtacada(posicionReina, tablero)) {
      posicionReina[1]++;
      if (posicionReina[1] > 7) {
        return false;
      }
    }
    tablero[posicionReina[0]][posicionReina[1]] = 1;
  }
  return true;
}

function EstaSiendoAtacada(posicionReina: number[], tablero: number[][]) {
  // Recorre la recta de la columna en la que se encuentra la reina
  for (let i = 0; i < 8; i++) {
    if (tablero[i][posicionReina[1]] === 1 && i != posicionReina[0]) {
      return true;
    }
  }

  // Recorre la diagonal superior izquierda con respecto a la posicion de la reina
  for (let i = 0; posicionReina[0] - i >= 0 && posicionReina[1] - i >= 0; i++) {
    if (tablero[posicionReina[0] - i][posicionReina[1] - i] === 1) {
      return true;
    }
  }

  // Recorre la diagonal superior derecha con respecto a la posicion de la reina
  for (let i = 0; posicionReina[0] - i >= 0 && posicionReina[1] + i >= 0; i++) {
    if (tablero[posicionReina[0] - i][posicionReina[1] + i] === 1) {
      return true;
    }
  }

  return false;
}

function CrearTablero() {
  let tablero: number[][] = [];
  for (let i: number = 0; i < 8; i++) {
    tablero.push([]);
  }
  for (let i: number = 0; i < 8; i++) {
    for (let j: number = 0; j < 8; j++) {
      tablero[i].push(0);
    }
  }
  return tablero;
}

function GuardarSolucionesEnArchivo(
  tablero: number[][],
  nSoluciones: number[]
) {
  for (let i: number = -1; i <= tablero[0].length; i++) {
    let impresion: string = "";
    if (i === -1) {
      impresion = `Solucion #${nSoluciones[0]}\n----------\n`;
    } else if (i === tablero[0].length) {
      impresion = `\n`;
    } else {
      impresion = tablero[i].toString() + "\n";
    }
    fs.appendFileSync("soluciones.txt", impresion);
  }
}

function CrearArchivoSoluciones() {
  fs.writeFileSync("soluciones.txt", "");
}

EightQueens();
