
// find minimum number from array

let nums = [1,20,30,17,89,90,-2,10,27,33,8];


let min = nums[0];
for(let i=1;i<nums.length;i++){
    let currentValue = nums[i];
    if(min > currentValue){
        min = currentValue;
    }
}
console.log(max);
