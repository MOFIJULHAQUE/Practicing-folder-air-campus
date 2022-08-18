

// linear search

let nums = [1,2,3,4,5,6,56,7,8];
let target  = 56;

function is(nums,target){
    for(let i=0;i<nums.length;i++){
        if(nums[i]===target) return true;
    }
    return false;
}

console.log(is(nums,target));
