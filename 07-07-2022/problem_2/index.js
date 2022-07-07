// You are given an integer array as function parameters. Find and return the sum of the first and last element of the array.
function sumFirstLast(arr) {
    let x = arr[0];
    let y = arr[arr.length - 1];
    let sum = x + y;
    return sum;
}
console.log(sumFirstLast([1, 2, 3, 4, 5, 6, 7, 8]));
exports.sumFirstLast = sumFirstLast