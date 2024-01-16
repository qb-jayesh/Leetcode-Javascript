//here closure is maintained in which the c can be accessed inside funct b

function a(){
    var c = 10;

    function b(){
        console.log(c);
    }
    b();
}

a();