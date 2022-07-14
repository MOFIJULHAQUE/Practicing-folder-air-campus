// Given an array, delete the last element of the array
function removeEnd(arr) {
    let a = arr.pop();
    return arr;
}
console.log(removeEnd([1, 2, 3]));
exports.removeEnd = removeEnd