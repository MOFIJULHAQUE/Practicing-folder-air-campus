
// Question 2
// Take two integers a,b and print all the even numbers in between them, excluding the input integers.

// Constraints:
// 0 <= a < b <= 100

// Input:
// Two integers each in a new line.

// Output:
// Each line in the output contains an even integer between a,b in ascending order.

// Example:
// Input:
// 3
// 12

// Output:
// 4
// 6
// 8
// 10


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
    let a = parseInt(userInput[0])
    let b = parseInt(userInput[1])
    // write your code here
    for (let i = a + 1; i < b; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }

    }

});