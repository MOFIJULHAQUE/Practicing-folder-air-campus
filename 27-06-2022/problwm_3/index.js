// Swap two numbers using a 3rd variable
function swap(a, b) {
    // Write your code here

    //make sure you return the output string

    let temp;



    temp = a;
    a = b;
    b = temp;

    return (a + "," + b);
}

console.log(swap(10, 2));

exports.swap = swap