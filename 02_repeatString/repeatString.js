const repeatString = function(word, times) {
    if (times < 0) return "ERROR";
    let new_str= "";

    for (let i = 0; i < times; i++) {
        new_str += word;
    }

    return new_str;
};

// Do not edit below this line
module.exports = repeatString;
