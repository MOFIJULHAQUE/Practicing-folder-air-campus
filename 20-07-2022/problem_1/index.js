// Given two arrays. Check if both arrays are equal or not.
function isArray(arr1, arr2) {

    let newArr = arr2.sort();
    // console.log(newArr);
    return arr1.toString() === newArr.toString();

}
console.log(isArray([1, 8, 7, 8],
    [5, 8, 7, 1]));
exports.isArray = isArray