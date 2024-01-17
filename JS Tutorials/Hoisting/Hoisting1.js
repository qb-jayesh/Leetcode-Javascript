//the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code
// we are trying to access the variable and function even before initializing it
//we can access it because of the memory allocation of variables and functions

console.log(x);
getName();

var x = 10;

function getName(){
    console.log("Javascript");
}