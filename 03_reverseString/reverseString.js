const reverseString = function(str) {
    let reverseStr = "";
    for (const letter of str) {
        reverseStr = letter + reverseStr;}
    
    return reverseStr;    
};

// Do not edit below this line
module.exports = reverseString;
