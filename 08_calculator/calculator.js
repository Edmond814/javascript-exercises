const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  if(arr.length!=0) 
    return arr.reduce((total,nextValue)=>total+nextValue)
  else return 0
};

const multiply = function(arr) {
  return arr.reduce((total,nextValue)=>total*nextValue)
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
	let factorial = 1
  for (let i = 1; i <= a; i++) {
    factorial *= i
  }
  return factorial;
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
