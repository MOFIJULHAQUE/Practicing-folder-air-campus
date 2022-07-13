

// or(default value of reduce is 0 and it is a inbuilt function)
// (reduce is converting a array into singlr digit number)

let nums = [1,2,3,4,5];
let sum = nums.reduce(function(prev,current){
    return prev + current
})
console.log(sum);


