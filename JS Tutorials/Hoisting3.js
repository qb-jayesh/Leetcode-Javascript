//this will throw an error because now getName will act like a variable thus having undefined placeholder in memory

getName();

var getName = () => {
    console.log("Javascript")
}