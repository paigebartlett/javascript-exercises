const repeatString = function(string, num) {
    let storeString = '';
    if (num < 0) {
        storeString = 'ERROR'
    }
    else {
        for (i = 0; i < num; i++) {
            storeString += string
        }
    }
return storeString;
};

// Do not edit below this line
module.exports = repeatString;
