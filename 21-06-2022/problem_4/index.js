// JavaScript Anonymous Functions
let x = (function (num) {
    let sum = 0;
    while (num != 0) {
        let rem = num % 10;
        sum += rem ** 2;
        num = Math.floor(num / 10);
    }
})(49);