// Question 6
// Take an integer and return the factorial.

// Constraints:
// 0 < n <= 100

// Input:
// A single integer
// Output:
// A single integer eaual to the factorial of the input integer

// Example:
// Input:
// 4
// Output:
// 24




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

    let factorial = 1;
    let a = parseInt(userInput[0]);
    for (i = 1; i <= a; i++) {
        factorial = factorial * i;
    }

    console.log(factorial);
});