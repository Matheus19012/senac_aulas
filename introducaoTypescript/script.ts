// declaração de variaveis
const company: string = "Senac";
let age: number = 20;
let isCorrect: boolean = true;


// Declaração de array
const arr: Array<number> = [1, 2, 3];
const array: number[] = [1, 2, 3];


// Declaração de objeto
const person: {
    name: string,
    age: number
} = {
    name: "senac",
    age: 30
}


// Declaração do tipo any
let result: any;
result = "result";
result = 1983;
result = true;


// declaração de função tipada
function sum(n1:number, n2:number): number {
    return n1 + n2;
}

function resultSum(n1: number, n2: number): string {
    let result = n1 + n2;
    return `Resultado é ${result}.`;
}


// Declaração de função void
function sayHello(name?: string): void {
    console.log("hello, ", name || "world");
    
}