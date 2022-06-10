// Question 3
// Take two integers a,b and return the count of all the odd numbers in between them, inclusive of the input.

// Constraints:
// 0 <= a < b <= 100

// Input:
// Two integers, each in a new line
// Output:
// A single integer which equals the count of all the odd numbers in the inclusive range of a and b.

// Example:
// Input:
// 2
// 9

// Output:
// 4



const readline = require("readline");
// readline ek library hoti hai. Input lene me help karti hai

const code = readline.createInterface({
    input: process.stdin,
});

const userInput = [];

code.on("line", (data) => {
    userInput.push(data);
});

// neglect code above it
code.on("close", () => {
    let a = parseInt(userInput[0]);
    let b = parseInt(userInput[1]);
    let count = 0;
    // write your code here
    for (let i = a; i <= b; i++) {
        if (i % 2 != 0) {
            count++;
        }
    }
    console.log(count);
});
