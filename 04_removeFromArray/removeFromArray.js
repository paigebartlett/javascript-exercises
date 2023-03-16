
const removeFromArray = function(array, ...numbers) {
    for (let j = 0; j < numbers.length; j++)
        for (let i = 0; i < array.length; i++){
            if (array[i] === numbers[j]) {
                array.splice(i, 1);
            }
        }
    return array;
}


// Do not edit below this line
module.exports = removeFromArray;
