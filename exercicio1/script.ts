function checkTriangle(a: number, b: number, c: number): string {
    if (a !== b && b !== c) {
        return "escalmo";
    } else if (a === b && b === c ) {
        return "equilátero";
    } else {
        return "isóceles";
    }
}