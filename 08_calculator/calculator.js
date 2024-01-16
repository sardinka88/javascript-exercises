const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	let sum = 0;
  array.forEach(element => {
  sum += element;
  })
  return sum;
};

const multiply = function(array) {
  let result = 1;
  array.forEach(element => result *= element);
  return result;
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(factorial) {
  let result = 1;
	for (let i=1; i<= factorial; i++) {
    result *= i;
  }
  return result;
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
