//Given an integer array, pos array and element array, change the elements in the integer array based on the pos array and element array.
function change_elements(arr, pos, ele) {
    for (let i = 0; i < pos.length; i++) {
        console.log(arr[pos[i]])
        arr[pos[i]] = ele[i]
    }
    return arr
    // return arr.splice(0,1,4)
}
console.log(change_elements([1, 2, 3], [2, 1], [-1, 5]))
exports.change_elements = change_elements