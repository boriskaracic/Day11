var temps = [
    [31, 32, 19, 37],
    [29, 27, 55, 36],
    [17, 27, 42, 46],
    [29, 52, 21, 64],
    [91, 27, 31, 61]
];

function myArrayFunction(arr){

    var newTemps = [...arr];
    var averageDayTemp = [];

    var sum = 0;
    for (let i = 0; i < newTemps.length; i++) {
        
        for (let ii = 0; ii < newTemps[i].length; ii++) {
            
            sum += newTemps[i][ii];
        }

    average = sum / newTemps[i].length;
    sum = 0;
    averageDayTemp.push(average);
    }
    return averageDayTemp;
}

console.log(myArrayFunction(temps));
module.exports = myArrayFunction;




