const removeFromArray = function(arr) {

    for (let i = 1; i < arguments.length; i++) {
        let val = arguments[i];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === val) arr.splice(i,1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
