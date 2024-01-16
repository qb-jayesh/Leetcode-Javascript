//copying array

const original = [1, 2, 3, 4, 5];
const copy = [...original]; // Creates a new array with the same elements

copy.push(1000); // Modifying the copy won't affect the original
console.log(original); 
console.log(copy);     
