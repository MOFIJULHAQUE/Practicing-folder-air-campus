// Question 7
// Take an integer and print "YES" if the integer is prime and "NO" if it is not.

// Constraints:
// 2 <= N <= 1000

// Input:
// A single integer
// Output:
// A string "YES" or "NO"

// Example:
// Input
// 3
// Output
// YES





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
    // let b = parseInt(userInput[1])
    // write your code here
    let check = true
    for (let i = 2; i < a; i++) {
        if (a % i == 0) {
            check = false
        }
    }
    if (check == true) {
        console.log("YES")
    } else {
        console.log("NO")
    }
});