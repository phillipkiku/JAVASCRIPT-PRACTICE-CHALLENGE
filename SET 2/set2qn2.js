// integer array nums
//return true if any value appears at least twice
//return false if every element is distinct
//


function chechArray(nums){
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
console.log(chechArray(nums));

nums =[1,2,3,4,5];
console.log(chechArray(nums));
/*
// JavaScript Program check if there are any duplicates 
// in the array using nested loops approach 

function checkDuplicates(arr) {
	let n = arr.length;
    
    // Outer loop to pick each element one by one
    for (let i = 0; i < n - 1; i++) {
    
        // Inner loop to compare the current element with 
        // the rest of the elements
        for (let j = i + 1; j < n; j++) {
        
            // If a duplicate is found return true
            if (arr[i] === arr[j]) {
                return true;  
            }
        }
    }

    // If no duplicates are found, return false
    return false;
}

let arr = [4, 5, 6, 4];
console.log(checkDuplicates(arr));
*/