enum sectors {
    MARKETING = "marketing",
    SALES = "vendas",
    FINANCIAL = "financeiro"
}


let employees = [
	{ name: "Marcos", payroll: 2500, sector: sectors.MARKETING, presencial: true },
	{ name: "Maria" ,payroll: 1500, sector: sectors.SALES, presencial: false},
	{ name: "Salete" ,payroll: 2200, sector: sectors.FINANCIAL, presencial: true},
	{ name: "João" ,payroll: 2800, sector: sectors.MARKETING, presencial: false},
	{ name: "Josué" ,payroll: 5500, sector: sectors.FINANCIAL, presencial: true},
	{ name: "Natalia" ,payroll: 4700, sector: sectors.SALES, presencial: true},
	{ name: "Paola" ,payroll: 3500, sector: sectors.MARKETING, presencial: true }
]


type people = {
    name: string,
    payroll: number,
    sector: string,
    presencial: boolean;
}

function filterEmployees(employees: people[]): people[] {
    
    
    return employees.filter(people => people.sector === sectors.MARKETING && people.presencial === true);
}

console.log(filterEmployees(employees));
