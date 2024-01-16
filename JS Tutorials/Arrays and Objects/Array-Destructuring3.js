//Retrieving function arguments

function add(x, y) {
    return x + y;
  }
  
  const [num1, num2] = [5, 3]; //destructuring in variables
  const result = add(num1, num2); // Passing destructured values
  console.log(result); // Output: 8
  