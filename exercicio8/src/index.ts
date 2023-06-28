// Criar função que recebe o primeiro e o 
// sobrenome, O sobrenome pode ser nulo, exibir nome completo

function fullName(firstName: string, lastName?: string): void {
        console.log(firstName, lastName || "");
}

fullName('Matheus')