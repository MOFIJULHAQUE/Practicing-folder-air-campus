// Take two numbers and find the quotient and remainder.
function quo_rem(a, b) {
    // Write your code here
    //make sure you return the output string
    if (a != 0 && b != 0) {
        let q = Math.floor(a / b)
        let r = a % b
        return (q + "," + r)
    }
    else {
        return (-1 + "," + -1)
    }
}
console.log(quo_rem(0, 0))


exports.quo_rem = quo_rem