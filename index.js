/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let userInput=document.getElementById("user-input")
let convertBtn=document.getElementById("convert")
let lengthEl=document.getElementById("length-el")
let volEl=document.getElementById("volume-element")
let mass=document.getElementById("mass-el")
let error=document.getElementById("error")
console.log(mass)
 convertBtn.addEventListener("click", function (){
    userInput2=userInput.value
    if (isNaN(userInput2) ){
       error.innerHTML= "Error! Please type a number"

    }else{
        error.innerHTML=""
    userInput2=Number(userInput.value)
    let feet=userInput2 * 3.281
    let liters=userInput2 * 0.264
    let kilos=userInput2 * 2.204 
    lengthEl.innerHTML=userInput.value + " meters equals " + feet .toFixed(3) + " feet" + "</br>" + 
    feet.toFixed(3) + " feet " + " equals " + userInput.value + " meters."
    // liters
    volEl.innerHTML=userInput.value + " liters equals " + liters .toFixed(3) + " gallons" + "</br>" + 
    liters.toFixed(3) + " gallons " + " equals " + userInput.value + " liters."
    // Mass
    mass.innerHTML=userInput.value + " kilos equals " + kilos.toFixed(3) + " pounds" + "</br>" + 
    kilos.toFixed(3) + " pounds " + " equals " + userInput.value + " kilos."
    }
})




