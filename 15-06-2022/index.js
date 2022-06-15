// Take two numbers as input perpendicular and base respectively and write a program to print the hypotenuse of the right angle triangle.
const hypotenuse = (perpendicular, base) => {
    let x = Math.sqrt(perpendicular ** 2 + base ** 2);
    return x;
}
console.log(hypotenuse(3, 4));
exports.hypotenuse = hypotenuse;





//   Write a program to print the area of a circle by taking the radius as input.
const calculateArea = (radius) => {
    let x = Math.PI * radius ** 2;
    return x;
}
console.log(calculateArea(37));
exports.calculateArea = calculateArea





//   Write a program to print the no. of digits
const numberOfDigits = (num) => {
    let count = 0;
    while (num != 0) {
        num = Math.floor(num / 10);
        ++count;
    }
    return count;

}
console.log(numberOfDigits(18515484547855));
exports.numberOfDigits = numberOfDigits;








//   Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are given.
const area = (a, b, c) => {
    let x = (a + b + c) / 2;
    let area = Math.sqrt(x * (x - a) * (x - b) * (x - c));
    return area;

}
console.log(area(3, 4, 5));
exports.area = area;







//   Write a JavaScript program to get the difference between a given number and 13.
const difference = (num) => {

    if (num > 13 || num < 13) {
        return num - 13;
    }
    else (num == 0){
        return 0;
    }
    // else{
    //   return ;
    // }

}
console.log(difference(7));
exports.difference = difference










//   Take input a as a number and b as percentage. Write a program to calculate the percentage of a number.
function percent(num, percentage) {



    return (num / 100) * percentage;



}
console.log(percent(20, 5));
exports.percent = percent









//    Write a program to print the sum of area and perimeter of the circle.
function sumAreaPerimeter(num) {
    let area = Math.PI * num ** 2;
    let perimeter = 2 * Math.PI * num;
    let sum = area + perimeter;
    return sum;
}
console.log(sumAreaPerimeter(25));
exports.sumAreaPerimeter = sumAreaPerimeter