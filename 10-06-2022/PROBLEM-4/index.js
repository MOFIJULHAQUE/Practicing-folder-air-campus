// Question 4
// Print the sum of all even numbers from 1 to 100.

// Input:
// No input will be provided.
// Output:
// A single integer equal to the sum of all even numbers from 1 to 100.





let sum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        sum = sum + i;

    }

}
console.log(sum);