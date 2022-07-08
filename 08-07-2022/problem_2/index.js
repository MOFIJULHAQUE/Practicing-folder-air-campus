
// find maximum number from array for negative number

let nums = [-1,-20,-30,-17,-89,-90,-10,-27,-33,-8];

let max = [0];
for(let i=0;i<nums.length;i++){
    let currentValue = nums[i];
    if(max < currentValue){
        max = currentValue;
    }
}
console.log(max);



