// Given a number determine if it positive or negative.
function is_positive(number) {
  // write your code here

  // return the answer
  if (number > 0) {
    return "positive";
  } else {
    return "negative";
  }
}
console.log(is_positive(-121));
exports.is_positive = is_positive;
