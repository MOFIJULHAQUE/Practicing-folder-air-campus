// for first repeting number with function 

let nums = [1,2,1,2,1,3,4,5,5];
function getFirstNonRepeatingNo(nums){
    for(let i=0; i<nums.length;i++){
        if(nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])){
            console.log(nums[i]);
            return nums[i];
        }
    }
}
console.log(getFirstNonRepeatingNo(nums));

