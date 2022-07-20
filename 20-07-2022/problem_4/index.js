// Unlce Ben is giving choclates to all the kids. He wants to find out which kid has got the highest number of choclates and which kid got least number of choclates
function find_min_max(arr) {
    let index1 = arr.indexOf(Math.max(...arr)) + 1;
    let index2 = arr.indexOf(Math.min(...arr)) + 1;
    let add = [index1, index2]
    return add;
}
console.log(find_min_max([2, 3, 1, 5, 7]))
exports.find_min_max = find_min_max
