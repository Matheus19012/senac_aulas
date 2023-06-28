function type(parameter: any): any {
    const any: any = typeof(parameter);

    return any;
}

console.log(type(25));
console.log(type("Olá"));
console.log(type(true));
