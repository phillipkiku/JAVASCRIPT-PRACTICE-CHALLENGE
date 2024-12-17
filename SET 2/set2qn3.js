// an array nums of size n
//return the majority element  that appears more than ⌊n / 2⌋ times
//


function majorityElement(nums){
    for (i = 0; i<nums.length ; i++){
        let next = 0;

    for (j = 0; j<nums.length; j++){
    
        if(nums[i] === nums[j]){
            next++;          
        } 
        if (next > nums.length / 2){
            return nums[i];
        }

    }
    }
    return "No value";
    }
    let nums = [1,1,1,1,4,4,4,4,4,4,5];
    console.log(majorityElement(nums));
    
    nums =[1,2,3,4,5];
    console.log(majorityElement(nums));
    


/*
    // Javascript program to find Majority
// element in an array using nested loops

// Function to find the Majority element in an array
function majorityElement(arr) {
    let n = arr.length;  

    // Loop to consider each element as a candidate for majority
    for (let i = 0; i < n; i++) {
        let count = 0;

        // Inner loop to count the frequency of arr[i]
        for (let j = 0; j < n; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }

        // Check if count of arr[i] is more than half the size of the array
        if (count > n / 2) {
            return arr[i];
        }
    }

    // If no majority element found, return -1
    return -1;
}

let arr = [1, 1, 2, 1, 3, 5, 1];

console.log(majorityElement(arr));
*/