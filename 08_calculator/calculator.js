const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
  let total = 0
	array.map(element => {
    total += element
  });
  
  return total
};

const multiply = function(array) {
  let total = 1
  array.map(num => {
    total *= num
  })

  return total
};

const power = function(a, b) {
	let total = 1

  for (let i = 0; i < b; i++) {
    total *= a
  }

  return total
};

const factorial = function(x) {
	if (x == 0) {
    return 1
  }

  let total = 1;

  for (let i = x; i > 0; i--) {
    total *= i
  }

  return total
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
