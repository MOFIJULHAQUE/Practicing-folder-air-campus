
// first non repeting number
let nums = [1,2,1,2,1,3,4,5,5];

for(let i=0; i<nums.length;i++){
    if(nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])){
        console.log(nums[i]);
        break;
    }
}