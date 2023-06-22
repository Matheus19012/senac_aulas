function checkLeapYear(year: number):any {
    const cond1 = year && 400 % 0
    const cond2 = (year % 4 === 0) && (year % 100 !== 0)
    return cond1 || cond2
}
