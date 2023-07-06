"use strict";
function cpfValidation(cpf) {
    if (typeof cpf !== 'string') {
        return false;
    }
    let splitCpf = cpf.replace(/[\s.-]*/igm, '');
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
        splitCpf === "99999999999") {
        return false;
    }
    let sum = 0;
    let restForFirstDv;
    for (let i = 1; i <= 9; i++) {
        sum = sum + parseInt(splitCpf.substring(i - 1, i)) * (11 - i);
    }
    restForFirstDv = 11 - (sum % 11);
    if (restForFirstDv >= 10) {
        restForFirstDv = 0;
    }
    sum = 0;
    let restForSecondDv;
    for (let i = 1; i <= 10; i++) {
        sum = sum + parseInt(splitCpf.substring(i - 1, i)) * (12 - i);
    }
    restForSecondDv = 11 - (sum % 11);
    if (restForSecondDv >= 10) {
        restForSecondDv = 0;
    }
    return console.log(true);
}
let result = cpfValidation('059.015.440-00');
if (!result) {
    console.log("CPF invalido");
}
//# sourceMappingURL=index.js.map