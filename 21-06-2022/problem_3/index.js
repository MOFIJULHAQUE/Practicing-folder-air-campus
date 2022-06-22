// // IIFE
// let x = (function sumOfDigits(num) {
//     let sum = 0;
//     while (num != 0) {
//         let rem = num % 10;
//         sum += rem ** 2;
//         num = Math.floor(num / 10);
//     }

// })(49);

// console.log(sumOfDigits(x));





function a(){
    return "hello";
}
function b(a){
    return a()
}
console.log(b(a));