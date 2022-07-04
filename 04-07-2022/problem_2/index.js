
function aircampus(n) {
    let temp = n, count = 0, sum = 0;
    // Calculate the number of digits
    while (n != 0) {

        n = Math.floor(n / 10);
        count++;
    }

    while (n > 0) {
        let digit = n % 10;
        sum += digit ** count;
        n = Math.floor(n / 10);
    }

    return temp === sum ? 'aircampus' : 'no';
}
console.log(aircampus(145));

exports.aircampus = aircampus