const add = function(a, b) {
  return (a + b);
};

const subtract = function(a, b) {
	return (a - b);
};

const sum = function(arr) {
  const total = arr.reduce((sum, number) => (sum + number), 0);

  return total;
};

const multiply = function(arr) {
  const total = arr.reduce((prod, num) => (prod * num), 1);

  return total;
};

const power = function(a, b) {
	return (a ** b);
};

const factorial = function(a) {
  let total = 1;
	for (let i = a; i > 0; i--) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
