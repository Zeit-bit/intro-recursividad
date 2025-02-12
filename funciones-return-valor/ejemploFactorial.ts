function RetornarFactorial(numero: number): number {
    return (numero === 1) ? 1 : numero *= RetornarFactorial(numero-1);
}

console.log(RetornarFactorial(4));