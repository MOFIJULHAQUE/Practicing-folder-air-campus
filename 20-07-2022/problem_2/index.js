// Given an integer array, and a number ‘n’. In the range of [1 to n] add all the numbers in the middle of the array.
function addMiddle(arr, n) {
    let new_a = []
    for (let i = 1; i <= n; i++) {
        new_a.push(i);
    }
    let middle = Math.ceil(arr.length / 2);
    arr.splice(middle, 0, ...new_a)
    return arr
}
console.log(addMiddle([1, 2, 3], 5))
exports.addMiddle = addMiddle