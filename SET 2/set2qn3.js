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
    