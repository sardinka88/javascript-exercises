const repeatString = function(word, numTimes) {
    let string = "";
    if (numTimes < 0) return "ERROR";
    for (i = 0; i < numTimes; i++) {
        string += word;
    }
    return string;
};


// Do not edit below this line
module.exports = repeatString;
