const convertToCelsius = function(deg) {
  deg = Math.round((deg-32)*5/9*10)/10;
  return deg;  
};

const convertToFahrenheit = function(deg) {
  deg = Math.round((deg*9/5 + 32)*10)/10;
  return deg;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
