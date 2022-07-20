//Given an integer array, and a number ‘n’, please return the sum of integers at odd position and sum of integers at even position
function odd_even_position(arr) {
    let even = 0;
    let odd = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            even += arr[i];
            // console.log(sum)

        }
        else {
            odd += arr[i];
            // console.log(sum);
        }
    }
    return [odd, even]
}
console.log(odd_even_position([1, 5, 7, 8]));
exports.odd_even_position = odd_even_position