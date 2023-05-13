// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// // solo un registro en consola para nosotros.
// console.log(sum(7,3))

//valor de un euro en distintas divisas
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

//funcion para pasar de euro a dolar
const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}
//funcion para pasar de dolar a yen
const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 127.9;
    return valueInYen
}
//funcion para pasar de yen a pound
const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 0.8
    return valueInPound
}

module.exports = { sum, fromDollarToYen , fromEuroToDollar, fromYenToPound };