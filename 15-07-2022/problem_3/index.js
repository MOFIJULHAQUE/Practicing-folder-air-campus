// A manager wants to increment each of its employees' salaries by Rs.1000. You are given an array with the current salary of each employee. Return the array containing the incremented salary. Use array callback methods.
function goodManager(arr) {
    let incrementedSalary = arr.map(increment => increment + 1000);
    return incrementedSalary;
}
console.log(goodManager([1000, 2000, 3000]));
exports.goodManager = goodManager