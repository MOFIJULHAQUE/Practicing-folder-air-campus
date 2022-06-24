// Print all the numbers in the given range.
function printNumbers(a,b){
    while(a<=b){
        console.log(a);
        return printNumbers(a+1,b);
    }
}
console.log(printNumbers(2,10));