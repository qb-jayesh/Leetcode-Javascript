//Handling function return values

function getCoordinates() {
    return [40, 74];
  }
  
  const [latitude, longitude] = getCoordinates(); // destructuring return values in variables
  
  console.log(latitude, longitude); // Output: 40,74
  