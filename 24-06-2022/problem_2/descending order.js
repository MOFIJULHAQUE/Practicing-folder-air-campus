// Print all the numbers in descending order in the given range
function printNumbers(a,b){
    while(a>=b){
        console.log(a);
        return printNumbers(a-1,b);
    }
}
console.log(printNumbers(10,2));