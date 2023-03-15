const reverseString = function(inputString) {
    let array = inputString.split("");
    array.reverse();
    let outputString = ''
    for (const character of array) {
        outputString += character;
    }
    return outputString
};

// Do not edit below this line
module.exports = reverseString;
