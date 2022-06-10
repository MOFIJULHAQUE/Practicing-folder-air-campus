// Question 10
// Take two numbers and find product of all numbers between them that satisfy following condition (inclusive range):
// -> Numbers should be even
// -> Second last digit of number is 4

// Constraints:
// Input:
// Two lines of input each containing a single integer.
// Output:
// A single integer which is the product of all such numbers which follow the above mentioned conditions.

// Example:

// Case 1:
// Input:
// 10
// 20
// Output:
// 0

// Case 2:
// 30
// 40
// Output:
// 40






const readline = require("readline");
// readline ek library hoti hai. Input lene me help karti hai

const code = readline.createInterface({
    input: process.stdin
});

const userInput = [];

code.on("line", (data) => {
    userInput.push(data);
});

// neglect code above it
code.on("close", () => {


    let a = parseInt(userInput[0]);
    let b = parseInt(userInput[1]);
    let x = 1;
    for (let i = a; i <= b; i++) {
        if (i % 2 == 0 && Math.floor(i / 10) == 4) {
            x = x * i;
        }
    }
    if (x == 1) {
        console.log(0);
    }
    else {
        console.log(x);
    }
});