function countAllPaarl(regNumbersString) {
    const regNumbersArray = regNumbersString.split(',');
    let countAllPaarlRegNumbers = 0;
    for (let i = 0; i < regNumbersArray.length; i++) {
        var regNumber = regNumbersArray[i].trim();
        if (regNumber.startsWith('CJ')) {
            countAllPaarlRegNumbers++;
        }
    }
    return countAllPaarlRegNumbers;
}
const regNumbersString = 'CL 124,CY 567,CJ 345,CJ 456,CL 341';
const count = countAllPaarl(regNumbersString);
console.log(count); 