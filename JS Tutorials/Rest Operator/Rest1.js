//Handling Variable Numbers of Function Arguments

function sum(...numbers) {
    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
  
  console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));
  console.log(sum(5, 6, 11)); 