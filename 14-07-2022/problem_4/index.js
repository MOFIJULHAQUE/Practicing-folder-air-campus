// Given an array and a number, add the number to the end of the array.
function addEnd(arr, number) {
    let a = arr.push(number);
    return arr;
}
console.log(addEnd([2, 5, 14, 10, 7, 5],
    1))
exports.addEnd = addEnd


