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
