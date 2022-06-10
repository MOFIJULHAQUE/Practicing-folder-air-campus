

// Question 8
// Take 10 integers as input and print their product.

// Constraints:
// 1 <= T <= 100

// Input:
// Ten lines of input containing ten integers each.
// Output:
// Print the product of all the ten integers.

// Example:
// Input:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// Output:
// 3628800








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

    let multi = 1;
    let a = parseInt(userInput[0]);
    for (let i = 1; i <= 10; i++) {
        multi = multi * i;
    }
    console.log(multi);
});