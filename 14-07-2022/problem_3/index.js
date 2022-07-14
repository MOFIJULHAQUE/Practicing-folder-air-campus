// Given an array, delete the first element of the array
function removeBeginning(arr) {
    let a = arr.shift();
    return arr;
}
console.log(removeBeginning([1, 2, 3]));
exports.removeBeginning = removeBeginning