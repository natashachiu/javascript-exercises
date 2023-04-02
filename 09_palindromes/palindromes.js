const palindromes = function (str) {
    str = removeParts(str);

    return (str === str.split('').reverse().join(''));
    // split into array of string letters, reverse array, join
    // back into a single string 
};


function removeParts(str){
    const reg = /[\W_]/g; // regular expression removes punc + spaces

    return str.toLowerCase().replace(reg, '');
}


// Do not edit below this line
module.exports = palindromes;
