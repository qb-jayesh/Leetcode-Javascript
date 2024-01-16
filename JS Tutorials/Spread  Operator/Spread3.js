//passing arguments to function

function sum(a, b, c) {
    return a + b + c;
  }
  
  const numbers = [1, 2, 3];
 
  const ans = sum(...numbers); // Spreads elements as arguments
  
  console.log(ans);