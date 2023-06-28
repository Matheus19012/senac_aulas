// Função que recebe string com nome, outra string com data ("26/06/2023").
// Retornar string no formato:
// `Olá me chamo ${nome}, nasci no dia ${dia} do mes ${mes} do ano de ${ano}`;

function apresentation(name: string, dateBirth: string): void {
   const nameApresentation: string = name;
   let splitDate = dateBirth.split('/')
   let phrase = console.log(`Olá me chamo ${nameApresentation}, 
   nasci no dia ${splitDate[0]} do mes ${splitDate[1]}
    do ano de ${splitDate[2]}`);
    
    return phrase;
}

apresentation('soares', '12/03/2022')