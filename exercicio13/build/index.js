"use strict";
let users = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
];
function getNegativeAmount(users) {
    calculateDepts();
    return users.filter(clients => {
        return clients.saldoTotal < 0;
    });
}
function calculateDepts() {
    return users.map(user => {
        const sumDepts = user.debitos.reduce((acumalator, value) => value ? acumalator += value : 0, 0);
        user.saldoTotal = user.saldoTotal - sumDepts;
        user.debitos = [];
    });
}
console.log(getNegativeAmount(users));
//# sourceMappingURL=index.js.map