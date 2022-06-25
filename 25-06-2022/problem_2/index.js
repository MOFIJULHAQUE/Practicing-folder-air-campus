// Given two numbers return the largest number.
function largest(num1, num2) {
  // write your code here

  // return the answer
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(largest(475, 78));
exports.largest = largest;
