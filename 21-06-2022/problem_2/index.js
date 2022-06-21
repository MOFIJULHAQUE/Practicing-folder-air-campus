// Arrow function
let x sumOfDigits = (num) => {
    let sum = 0;
    while (num != 0) {
        let rem = num % 10;
        sum += rem ** 2;
        num = Math.floor(num / 10);

    }
    return sum;
}
console.log(sumOfDigits(15));