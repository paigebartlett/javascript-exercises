const convertToCelsius = function(farenheit) {
  let celsius = 
  (farenheit - 32) * (5/9);
  celsius = celsius.toFixed(1);
  return +celsius
};

const convertToFahrenheit = function(celcius) {
  let farenheit = (celcius * (9/5)) + 32;
  farenheit = farenheit.toFixed(1);
  return +farenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
