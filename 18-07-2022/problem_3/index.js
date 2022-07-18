//Unlce Ben decides to give chocolates to kids in his neighbourhood. He predecides the number of chocolates he wants to give each kid and arranges them in a bag. Now he wants to give 2 more chocolates to kids who less than 5 and reduce 1 chocolate who got more than 10.
function more_choclates(arr) {
    let newArr = [];
    for (let i of arr) {
        if (i < 5) {
            newArr.push(i + 2);
        } else if (i > 10) {
            newArr.push(i - 1);
        } else {
            newArr.push(i);
        }
    }
    return newArr
}
console.log(more_choclates([1, 6, 7, 11]));
exports.more_choclates = more_choclates