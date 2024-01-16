const palindromes = function (inputString) {
    let processedString = inputString.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "").toLowerCase();
    return processedString === processedString.split('').reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
