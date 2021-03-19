var nums = [1,3,4,5]
var sum = 0;
var product;

function multipleArrayFunction(myArray){

    var newArray = [...myArray];
    
    for (let i = 0; i < newArray.length; i++) {
        
       sum += newArray[i];
    
    
    }
    console.log(sum);
    
}

console.log(multipleArrayFunction(nums));
module.exports = multipleArrayFunction;