function countAllFromTown(regNumbersString, townCode) {
    const regNumbersArray = regNumbersString.split(',');
    let countAllFromTownRegNumbers = 0;
    for (let i = 0; i < regNumbersArray.length; i++) {
        var regNumber = regNumbersArray[i].trim();
        if (regNumber.startsWith(townCode)) {
            countAllFromTownRegNumbers++;
        }
    }
    return countAllFromTownRegNumbers;
}