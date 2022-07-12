// factorial of element using map
let nums = [1,2,3,4,5];

let factorial = nums.map((num)=>{
    let fact =1;
    for(let i=num;i>0;i--){
        fact*=i
    }
    return fact;
})
console.log(factorial,nums);

