/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

//Buttons
const convertBtn = document.getElementById("convert-btn")
const clearBtn = document.getElementById("clear-btn")

let inputNumber = document.getElementById("number-input-box")
let metersToFeet = document.getElementById("m-to-ft")
let feetToMeters = document.getElementById("ft-to-m")
let litersToGal = document.getElementById("liters-to-gal")
let galToLiters = document.getElementById("gal-to-liters")
let kgToPounds = document.getElementById("kg-to-lbs")
let poundsToKg = document.getElementById("lbs-to-kg")


//Base Values
function unitValues(){
    metersToFeet.innerHTML = `1 m = 3.281 ft`
    feetToMeters.innerHTML = `1 ft = 0.305 m`
    litersToGal.innerHTML = `1 L = 0.264 gal`
    galToLiters.innerHTML = `1 gal = 3.78 L`
    kgToPounds.innerHTML = `1 kg = 2.205 lbs`
    poundsToKg.innerHTML = `1 lb = 0.453 kg`
}

//Clear Function
clearBtn.addEventListener ('click', function(){
    inputNumber.value = ""
    unitValues()
})


//Input Function
convertBtn.addEventListener ('click', function() {
    if (Number(inputNumber.value) === 1) {
        unitValues()
    } else {
        returnConversions()
    }
})


//Math Functions
function convertMetersToFeet() {
    let finalNumber = Number(inputNumber.value) * 3.281
    return finalNumber.toFixed(3)
}

function convertFeetToMeters() {
    let finalNumber = Number(inputNumber.value) * 0.305
    return finalNumber.toFixed(3)
}

function convertLitersToGal() {
    let finalNumber = Number(inputNumber.value) * 0.264
    return finalNumber.toFixed(3)
}

function convertGalToLiters() {
    let finalNumber = Number(inputNumber.value) * 3.78
    return finalNumber.toFixed(3)
}

function convertKgToPounds() {
    let finalNumber = Number(inputNumber.value) * 2.205
    return finalNumber.toFixed(3)
}

function convertPoundsToKg() {
    let finalNumber = Number(inputNumber.value) * 0.453
    return finalNumber.toFixed(3)
}

function returnConversions() {
    metersToFeet.innerHTML = `${inputNumber.value} meters = ${convertMetersToFeet()} ft`
    feetToMeters.innerHTML = `${inputNumber.value} ft = ${convertFeetToMeters()} m`
    litersToGal.innerHTML = `${inputNumber.value} L = ${convertLitersToGal()} gal`
    galToLiters.innerHTML = `${inputNumber.value} gal = ${convertGalToLiters()} L`
    kgToPounds.innerHTML = `${inputNumber.value} kg = ${convertKgToPounds()} lbs`
    poundsToKg.innerHTML = `${inputNumber.value} lbs = ${convertPoundsToKg()} kg`
}