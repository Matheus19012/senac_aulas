"use strict";
function apresentation(name, dateBirth) {
    const nameApresentation = name;
    let splitDate = dateBirth.split('/');
    let phrase = console.log(`Olá me chamo ${nameApresentation}, nasci no dia ${splitDate[0]} do mes ${splitDate[1]} do ano de ${splitDate[2]}`);
    return phrase;
}
apresentation('soares', '12/03/2022');
//# sourceMappingURL=index.js.map