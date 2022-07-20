//Given an integer array, find all the elements which are divisible by the index position in which they are present. Consider the index of array starts from 1
function count_all_divisions(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % (i + 1) == 0) {
            count += 1;
            // console.log(count);
        }
    }
    return count;
}
console.log(count_all_divisions([1, 5, 7, 8]));
exports.count_all_divisions = count_all_divisions