//a non-empty array of integers nums
//every element appears twice except for one
// Find that single one
/*
let nums = [6,3,4,6,3]
for (i = 0; i<nums.length; i++){
    let actual = num[i]
    if (actual/2 > 2){
        console.log(nums(actual));
    } else {
        console.log("Can not find");
    }
    
}
console.log(nums);
*/

function singleElement(nums){
    let next = 0;
    for (i = 0; i<nums.length ; i++){
    //for (let i of nums){
        
    for (j = 0; j<nums.length; j++){
      //for (let j of nums)  {
    
        if(i === j){
            next++;          
        } 
    }
        if (next === 1){
            return i;
        }

    }
    
    return "No value";
    }
    let nums = [1,1,2,3,3];
    console.log(singleElement(nums));
    
    nums =[1,2,3,4,5];
    console.log(singleElement(nums));
    
/*
    function find_single(arr) {

        // Iterate over every element
        for (let i of arr) {
        
            // Initialize count to 0
            let count = 0;
            for (let j of arr) {
            
                // Count the frequency of the element
                if (i === j) {
                    count++;
                }
            }
            
            // If the frequency of the element is one
            if (count === 1) {
                return i;
            }
        }
        
        // If no element exists at most once
        return -1;
    }
    
    // Driver code
    const arr = [2, 3, 5,2, 4, 3];
    console.log(find_single(arr));
    /*

    function singleElement(nums) {
        for (i = 0; i<nums.length ; i++)
        {
                
                    // Initialize count to 0
                    let next = 0;
        for (j = 0; j<nums.length; j++)
        {
                    
                        // Count the frequency of the element
                        if (i === j) {
                            count++;
                        }
                    }
                    
                    // If the frequency of the element is one
                    if (next === 1) {
                        return i;
                    }
                }
                
                // If no element exists at most once
                return "Number not Found";
            }
        
            let nums = [1,1,2,3,3];
    console.log(singleElement(nums));
    
    nums =[1,2,3,4,5];
    console.log(singleElement(nums));
    */