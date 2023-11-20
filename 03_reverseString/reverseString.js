const reverseString = function(word) {
    let letters = [];
    let reversed = ""
    
    for (let i = 0; i < word.length; i++) {
        letters.push(word[i]);
    }
    
    for (let j = word.length - 1; j>=0; j--) {
        reversed += word[j];
    }
    return reversed;
}

// Do not edit below this line
module.exports = reverseString;
