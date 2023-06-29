"use strict";
var sectors;
(function (sectors) {
    sectors["MARKETING"] = "marketing";
    sectors["SALES"] = "vendas";
    sectors["FINANCIAL"] = "financeiro";
})(sectors || (sectors = {}));
let employees = [
    { name: "Marcos", payroll: 2500, sector: sectors.MARKETING, presencial: true },
    { name: "Maria", payroll: 1500, sector: sectors.SALES, presencial: false },
    { name: "Salete", payroll: 2200, sector: sectors.FINANCIAL, presencial: true },
    { name: "João", payroll: 2800, sector: sectors.MARKETING, presencial: false },
    { name: "Josué", payroll: 5500, sector: sectors.FINANCIAL, presencial: true },
    { name: "Natalia", payroll: 4700, sector: sectors.SALES, presencial: true },
    { name: "Paola", payroll: 3500, sector: sectors.MARKETING, presencial: true }
];
function filterEmployees(employees) {
    return employees.filter(people => people.sector === sectors.MARKETING && people.presencial === true);
}
console.log(filterEmployees(employees));
//# sourceMappingURL=index.js.map