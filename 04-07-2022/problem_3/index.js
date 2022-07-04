function pattern(n) {
    let sum = 0;
    for (let i = n; i >= 1; i--) {
        // let stars = '';
        for (let j = i; j <= n; j++) {
            sum += j;

        }


    }
    return sum;
}
console.log(pattern(5));
exports.pattern = pattern


