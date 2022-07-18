//Given an array, start index and an end index, square the elements in the given range and return the array
function square(arr, start, end) {
    let newArr = [];
    let element = (arr.slice(start, end));
    for (let i of element) {
        newArr.push(i ** 2);
    }
    arr.splice(start, newArr.length, ...newArr);
    return arr;

}
console.log(square([1, 2, 3, 4, 5],
    1, 3));
exports.square = square