function validateRenovation(dateBirth: string, dateIssue: string): any {
    let birth = new Date(dateBirth);
    let timeDiff = birth.getFullYear();
    let month = birth.getMonth;
    let day = birth.getDay;
    let currentYear = birth.getFullYear();
    return timeDiff;   
}


console.log(validateRenovation("24/04/1993", "07/11/2015"));