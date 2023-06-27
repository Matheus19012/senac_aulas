// Criar função que recebe o primeiro e o 
// sobrenome, O sobrenome pode ser nulo, exibir nome completo

function fullName(firstName: string, surname: string): string {
    let name : string | null = `${firstName}  ${surname}`;

    return name;
}

console.log(fullName('Matheus', 'Araujo'));
