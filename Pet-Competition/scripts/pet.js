// Author: Will Gunther
// Date: 12/1/2023

window.addEventListener("load", setup);

//Adds event listeners to each of the categories
function setup() {
    kennelSize();
    var form = document.forms[0];
    document.getElementById("weight").addEventListener("change", kennelSize);
    document.getElementById("days").addEventListener("change", daysOfBoarding);
    document.getElementById("boardingFee").addEventListener("change", totalCost);
    document.getElementById("sing").addEventListener("change", totalCost);
    document.getElementById("cute").addEventListener("change", totalCost);
    document.getElementById("trick").addEventListener("change", totalCost);
}

//calculates the kennel size
function kennelSize() {
    var weight = parseFloat(document.getElementById("weight").value);
    //calculate the kennel size
    var size = "";
    if (isNaN(weight)){
        size = "";
    }
    else if (weight <= 4){
        size = "mini";
    }
    else if (weight <= 12){
        size = "small";
    }
    else if (weight <= 50){
        size = "medium";
    }
    else{
        size = "large";
    }
    //return kennel size
    document.getElementById("size").value = size;
}

days
boardingFee

//calculates the boarding fee based on the days of boarding for the pet
function daysOfBoarding() {
    var days = parseInt(document.getElementById("days").value);
    //calculate the fee
    var boardingFee;
    if (isNaN(days)){
        boardingFee = 0;
    }
    else{
        boardingFee = days * 19.99;
    }
    boardingFee = parseFloat(boardingFee.toFixed(2));
    document.getElementById("boardingFee").value = boardingFee;
    totalCost();
}

//calculates the total cost
function totalCost () {
    var registrationCost = 0;
    var events = 0;
    var boardingCost = parseInt(document.getElementById("boardingFee").value);
    var sing = document.getElementById("sing");
    var cute = document.getElementById("cute");
    var trick = document.getElementById("trick");

    

    //calculate the fee
    if (boardingFee == ""){
        boardingCost = 0;
    }
    //adds singing to the pet's description if it applies
    if(sing.checked){
        events++;
        document.getElementById("singAdd").setAttribute("style", "display: block");
    }
    else{
        document.getElementById("singAdd").setAttribute("style", "display: none");
    }

    //adds cut to the pet's description if it applies
    if(cute.checked){
        events++;
        document.getElementById("cuteAdd").setAttribute("style", "display: block");
    }
    else{
        document.getElementById("cuteAdd").setAttribute("style", "display: none");
    }

    //adds trick to the pet's description if it applies
    if(trick.checked){
        events++;
        document.getElementById("trickAdd").setAttribute("style", "display: block");
    }
    else{
        document.getElementById("trickAdd").setAttribute("style", "display: none");
    }

    //adds the registration cost
    registrationCost += (events * 120);

    //calculates the total cost
    var totalCost = boardingCost + registrationCost;

    //formats the fees on the form
    boardingCost = parseFloat(boardingCost.toFixed(2));
    registrationCost = parseFloat(registrationCost.toFixed(2));
    totalCost = parseFloat(totalCost.toFixed(2));

    //updates the cost of the categories with the calculations above
    document.getElementById("boardingCost").value = boardingCost;
    document.getElementById("registrationCost").value = registrationCost;
    document.getElementById("totalCost").value = totalCost;


}