const fibonacci = function(num) {
    if (num < 0) return "OOPS";

    let a = 0, b = 1;
    for (let start = 1; start < num; start++) {
        const temp = b;
        b = a + b;
        a = temp;
    }
    return b;

};

// Do not edit below this line
module.exports = fibonacci;
