// You are given two arrays, arr and moves. moves is a 2D array containing two values. The first value is present in arr and 2nd value is not present in arr. Replace the value of first element in arr with 2nd value from moves. Return the changed array.
function changeArray(arr, moves) {
    for (let i = 0; i < moves.length; i++) {
        if (arr.includes(moves[i][0])) {
            let index = arr.indexOf(moves[i][0]);
            arr[index] = moves[i][1];
        }
    }
    return arr;
}

changeArray([1, 5, 7, 8], [[1, 3], [7, 9]])
exports.changeArray = changeArray