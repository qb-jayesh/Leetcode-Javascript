var filter = function(arr, fn) {
    const output = [];
    
    for(let i = 0; i < arr.length; i++){
        var filterValue = fn(arr[i],i)
            if (filterValue){
                output.push(arr[i])
            }
        
    }
    return output;
};