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

function singleElement(nums) {
  let element = 0;
  for (i = 0; i <=nums.length; i++) {
    for (j = 0; j <=nums.length; j++) {
       if (i === j) {
        element++;
      }
    }
    if (element === 1) {
      return i;
    }
  }
  return "No value";
}
let nums = [1, 1, 2, 3, 3];
console.log(singleElement(nums));

nums = [1,1,2,2, 3, 3, 3];
console.log(singleElement(nums));
