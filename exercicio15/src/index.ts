function validateRenovation(dateBirth: string, dateIssue: string): any {
    // formata a data em 'string' para formato padrão JS
    let formatDateBirth = new Date(dateBirth);
    // pega o ano da data formatada
    let dateBirthYear = formatDateBirth.getFullYear();

/* para data local
    let date = new Date();
    console.log(date.toLocateDateString('pt-br')); */
    
    let today = new Date();
    let currentYear = today.getFullYear();

    let formatDateIssue = new Date (dateIssue);
    let dateIssueYear = formatDateIssue.getFullYear();

    let age = currentYear - formatDateIssue.getFullYear();
    let issueYear = currentYear - dateIssueYear;

    let result: boolean = false;

    // console.log(age, issueYear);

    if (age <= 20 && issueYear >= 5) {
        result = true;
    } else if (age > 20 && age <= 50 && issueYear >= 10) {
        result = true;
    } else if (age > 50 && issueYear >= 15) {
        result = true;
    }

    return result;
}


console.log(validateRenovation("24/04/1993", "07/11/2015"));