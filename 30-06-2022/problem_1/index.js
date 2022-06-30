// Given a number return its sum of square and cube.
function sum(num) {
    // write your code here

    // return the answer
    let x = num ** 2;
    let y = num * num * num;
    let z = x + y;
    return z;
}
console.log(sum(25));
exports.sum = sum