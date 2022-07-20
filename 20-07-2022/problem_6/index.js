//Mary wants to distribute pens to all the kids in her neighbourhood. Can you help her by creating an array where all the kids except her neighbour get 'm' number of pens and her neighbour kids get 'm+5'. Please note she doesn't have a kid.
function neighbours(m, n, pos) {
    let newArr = [];
    for (let i = 0; i < n; i++) {
        if (i == pos) newArr[i] = 0
        else if (i == pos - 1 || i == pos + 1) newArr[i] = m + 5
        else newArr[i] = m
    }
    return newArr
}
console.log(neighbours(5, 10, 2));
exports.neighbours = neighbours