//function named twoSum 
//takes two parameters: nums and target
//given an array of integer nums and an integer target, return indices of the two numbers 
//such that they add up to the target
//You may assume that each input would have exactly one solution

/*
let nums = [2,4,5,1,4];
let target = 6;
function twoSum1(nums, target){
    for(i = 0; i <= nums.lenght; i++){
        for(j = i+1; j <= nums.lenght; j++){
            if (nums[i] + nums[j] === target){
                return [i,j]
            }
        }
    }
    return []
}
console.log(twoSum1(nums));
*/


let nums;
let target;
function twoSum(nums, target) {
    const n = nums.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}
console.log(twoSum([2,4,1,2,-1], 3 ));
console.log(twoSum([1,2,3,4,5,6], 11 ));
