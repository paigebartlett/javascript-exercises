const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1)|| !Number.isInteger(num2)) return "ERROR";
    let sum = 0;
    let lowestNumber = (num1 < num2) ? num1 : num2;
    let highestNumber = (num2 > num1) ? num2 : num1;
    for (i = lowestNumber; i <= highestNumber; i++) {
        sum += i
    }
    return sum
};
// Do not edit below this line
module.exports = sumAll;
