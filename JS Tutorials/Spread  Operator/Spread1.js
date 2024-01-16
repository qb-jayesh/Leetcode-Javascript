//combining arrays

const fruits = ['apple', 'banana', 'orange'];
const vegetables = ['carrot', 'tomato', 'potato'];

const allProduce = [...fruits, ...vegetables]; // Combinning arrays 
console.log(allProduce); // Output: ["apple", "banana", "orange", "carrot", "tomato", "potato"]
