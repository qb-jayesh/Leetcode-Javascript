let numbers = [1,2,3,4,5,6,7,8,9]

// Filtering
const evenNumbers = numbers.filter(number => number % 2 === 0);

// Mapping
const squaredNumbers = numbers.map(number => number * number);

// Reducing
const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);

console.log(evenNumbers)
console.log(squaredNumbers)
console.log(sum)