// declaramos una funcion con el mismo nombre "formEuroToDollar"

// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = (eur) => {
    let dollar = eur * oneEuroIs.USD;
    return dollar;
}

const fromDollarToYen = (usd) => {
    let yen = (usd / oneEuroIs.USD) * oneEuroIs.JPY;
    return yen;
    
}

const fromYenToPound = (jpy) => {
    let pound = (jpy / oneEuroIs.JPY) * oneEuroIs.GBP;
    return pound;
}
console.log(fromDollarToYen(100));
console.log(fromYenToPound(10000));

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };