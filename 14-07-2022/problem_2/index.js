// Given an array and a number, add the number to the beginning of the array.
function addBeginning(arr, num) {
    let a = arr.unshift(num);
    return arr;
}
console.log(addBeginning([1, 2, 3],
    5));
exports.addBeginning = addBeginning