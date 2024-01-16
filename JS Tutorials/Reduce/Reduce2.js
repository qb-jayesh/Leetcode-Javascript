//Concatenating strings

const words = ["Hello", " ", "world!", " "];
const sentence = words.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sentence); // Output: "Hello world!"
