
// filter element
let nums = [1,5,2,3,7,4,5,8,6,9,1];

let newArr = [];

for(let i = 0; i<nums.length;i++){
    if(nums[i] < 3){
        newArr.push(nums[i]);
    }
}console.log(newArr)
