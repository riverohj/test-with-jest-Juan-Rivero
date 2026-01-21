// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
};

// Solo un registro en consola para nosotros
console.log(sum(7,3));

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum };

let oneEuroIs = {
  "JPY": 156.5,
  "USD": 1.07,
  "GBP": 0.87
};

function fromEuroToDollar(euros) {
  return euros * oneEuroIs.USD;
}

const fromDollarToYen = (dollars) => dollars * oneEuroIs.JPY / oneEuroIs.USD;

const fromYenToPound = (yen) => yen * oneEuroIs.GBP / oneEuroIs.JPY;

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};

console.log("1 EUR -> USD =", fromEuroToDollar(1));
console.log("1 USD -> JPY =", fromDollarToYen(1));
console.log("1 JPY -> GBP =", fromYenToPound(1));