var monitorsListArray = ["Apple", "Peach", "Berry"];
var monitorsList = [];

function myMonitorsFunction (arr){
    var newMonitorsList = [...arr];

    for (let i = 0; i < newMonitorsList.length; i++) {

        var array = [];
        array.push(monitorsListArray[i]);
        array.push(i+1);

        monitorsList.push(array);
    }
     return monitorsList;

}

console.log(myMonitorsFunction(monitorsListArray));
module.exports = myMonitorsFunction;