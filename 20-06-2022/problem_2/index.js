// Write a code to take temperature in Fahrenheit and convert it to Celsius.
function temperature(temp){
    let x = (temp - 32) * 5/9;
    return x;
  }
  console.log(temperature(122));
  exports.temperature = temperature