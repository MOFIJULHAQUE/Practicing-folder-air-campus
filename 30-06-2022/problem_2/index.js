// Take two numbers as input perpendicular and base respectively and write a program to print the hypotenuse of the right angle triangle.
const hypotenuse = (perpendicular, base) => {
    let x = Math.sqrt(perpendicular ** 2 + base ** 2);
    return x;
}
console.log(hypotenuse(3, 4));
exports.hypotenuse = hypotenuse;