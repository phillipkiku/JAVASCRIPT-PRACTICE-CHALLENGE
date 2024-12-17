// integer array nums
//return true if any value appears at least twice
//return false if every element is distinct
//


function checkArray(nums){
for (i = 0; i<nums.length -1; i++){
for (j = i+1; j <nums.length; j++){

    if(nums[i] === nums[j]){
        return true;
    } else {
        return false;
    }
}
}
}
let nums = [1,1,4,5];
console.log(checkArray(nums));

nums =[1,2,3,4,5];
console.log(checkArray(nums));