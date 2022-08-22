


//print largest number if the array has repeting no
let nums = [5,54,21,8,54,77,47];
let unique = nums.filter((char,index)=>{
        return nums.indexOf(char) !== index;
    });
    unique.sort((a,b) => a - b); 
console.log(nums[nums.length - 2]);

