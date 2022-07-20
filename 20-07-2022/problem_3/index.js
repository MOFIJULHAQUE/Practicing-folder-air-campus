// Given an array, the array has elements and operation to be performed. The operations are ADD_END’, REM_END’, ‘ADD_BEG’,’REM_BEG’. Create a new array by performing the given operations after each element. Return the resulting array.
function operations(arr) {



    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'ADD_BEG') {
            newArr.unshift(arr[i - 1]);
        } else if (arr[i] == 'REM_BEG') {
            newArr.shift();
        } else if (arr[i] == 'ADD_END') {
            newArr.push(arr[i - 1]);

        } else if (arr[i] == 'REM_END') {
            newArr.pop();

        }
    }
    return newArr;

}
console.log(operations([2, 'ADD_BEG', 3, 'ADD_BEG', 'REM_BEG', 4, 'ADD_END']));
exports.operations = operations