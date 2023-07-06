function cpfValidation(cpf: string): any {
    if (typeof cpf !== 'string') {
        return false;
    }
    //.replace(/\./g,'') é regex
    // let splitCpf: any = cpf.replace('-', '.').replace(/\./g,'').split('') 

    let splitCpf = cpf.replace(/[\s.-]*/igm, '');

    // console.log(splitCpf);
    // console.log(typeof splitCpf);

    if (!splitCpf ||
        splitCpf.length !== 11 ||
        splitCpf === "00000000000" ||
        splitCpf === "11111111111" ||
        splitCpf === "22222222222" ||
        splitCpf === "33333333333" ||
        splitCpf === "44444444444" ||
        splitCpf === "55555555555" ||
        splitCpf === "66666666666" ||
        splitCpf === "77777777777" ||
        splitCpf === "88888888888" ||
        splitCpf === "99999999999"
        ) {
        return false;
    }

    let sum = 0;
    let restForFirstDv: number;
    // calculo do 1° DC
    for(let i: number = 1; i <= 9; i++) {
        sum = sum + parseInt(splitCpf.substring(i - 1, i)) * (11 - i);
    }
    // console.log(sum); // 185
    restForFirstDv = 11 - (sum % 11);
    // restForFirstDv = 11 - restForFirstDv;
    // console.log(restForFirstDv);
    
    if (restForFirstDv >= 10) {
        restForFirstDv = 0; // este é o penultimo DV [9]
    }
    
    // Calculo do 2° DV
    sum = 0;
    let restForSecondDv: number;
    for(let i: number = 1; i <= 10; i++) {
        sum = sum + parseInt(splitCpf.substring(i - 1, i)) * (12 - i);
    }
    restForSecondDv = 11 - (sum % 11)

    if (restForSecondDv >= 10) {
        restForSecondDv = 0; // este é o ultimo DV [10]
    }


    return console.log(true);
}

// let result = cpfValidation('029.954.966-85');
let result = cpfValidation('059.015.440-05');

if (!result) {
    console.log("CPF invalido");
    
}