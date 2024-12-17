//function named twoSum 
//takes two parameters: nums and target
//given an array of integer nums and an integer target, return indices of the two numbers 
//such that they add up to the target
//You may assume that each input would have exactly one solution
//
/*
function twoSum(added){
let nums = [2,4,3,4];
let target = 6;
let answer = [];





    
    for(i = 0; i<nums.length; i++){
let total = added[i] + added[1++];
if (total = target){
 answer.push(num.indexof(added[i],added[i++]))
}else{
    console.log("None of the addup")
}
    }
return{
    ad : answer
}
}
console.log(twoSum(ad));



for(let element of nums){

    if ((element + element++) = target){
        answer.push(nums.indexOf(element , element++))
    } else {
        console.log("None of them addup");
    }

} 
return {
    equal : answer
}

}
console.log(twoSum(nums));

*/

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
console.log(twoSum([2,4,3,3,7,-1], 6 ));
