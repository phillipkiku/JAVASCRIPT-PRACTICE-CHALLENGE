//function named firstPalindrome which takes a parameter:words
//Given an array of string words,
//return the first palindromic string in the array.
//no such string, return an empty string "".

// first
let words = ["aba", "car", 'r', "wow", "timoth", 3,];
function firstPalindrome(words){
    let paraWords = [];
    for(i=0; i<words.length; i++){
    if (typeof words === "string"){        
    let currentElement = words[i];
        if ( currentElement === currentElement.reverse){
            return paraWords.push(currentElement);
        } else {
            console.log("")
        }
        }
    }
}
console.log(firstPalindrome(words));


/*
function isPalindrome(str) {
    let left=0,right=str.length
    while(left<right){
        if(str.charAt(left)!=str.charAt(right)){
            return false
        }
        left++;
        right--;
    }
    return true
    }
    function firstPalindrome(words) {
      for (let i=0;i<words.length;i++) {
        if (isPalindrome(words[i])) {
          return words[i];
        }
      }
      return "";
    }
    
    console.log(firstPalindrome(["abc", "car", "wow", "ada", "racecar", "cool"]));
    */