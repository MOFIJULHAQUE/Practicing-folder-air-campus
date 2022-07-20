//Given an integer array, return true if it can be used for binary search else return false
function binary_search(arr) {
    let asc_arr = [...arr]
    let dsc_arr = [...arr]
    asc_arr.sort((a, b) => a - b)
    dsc_arr.sort((a, b) => b - a);
    if (asc_arr.toString() == arr.toString() || dsc_arr.toString() == arr.toString()) return true
    else return false
}
console.log(binary_search([1, 9, 5, 7, 8]));
exports.binary_search = binary_search