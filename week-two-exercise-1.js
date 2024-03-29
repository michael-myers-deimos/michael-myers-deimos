//Calculate Tip
function calculateTip() {
    var bill = document.getElementById("billamt").value;
    var service = document.getElementById("serviceQual").value;
    var numOfPeople = document.getElementById("peopleamt").value;

    //validate input
    if (bill === "" || service == 0) {
        alert("Please enter values");
        return;
    }
    //Check to see if this input is empty or less than or equal to 1
    if (numOfPeople === "" || numOfPeople <= 1) {
        numOfPeople = 1;
    }

    //Calculate tip
    var total = (bill * service) / numOfPeople;
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    //Display tip
    document.getElementById("tip").innerHTML = total;

}

//click to call function
document.getElementById("calculate").onclick = function() {
    calculateTip();

};