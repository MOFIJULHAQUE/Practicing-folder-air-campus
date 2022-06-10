// Question 5
// Take an integer and print the multiplication table of the interger upto a factor of 10 in this form -> n x 1 = n

// Constraints:
// 0 < n <= 100

// Input:
// A single integer
// Output:
// 10 lines of output, each with the multiplication of the form mentioned above, in ascending order

// Example:
// Input:
// 2
// Output:
// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6
// 2 x 4 = 8
// 2 x 5 = 10
// 2 x 6 = 12
// 2 x 7 = 14
// 2 x 8 = 16
// 2 x 9 = 18
// 2 x 10 = 20







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
    for (let i = 1; i <= 10; i++) {
        let multi = a * i;
        console.log(String(a) + " x " + String(i) + " = " + String(multi));
    }
});