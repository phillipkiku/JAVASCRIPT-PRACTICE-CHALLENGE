//a function to find the longest common prefix string
//amongst an array of strings
//no common prefix
//return an empty string ""

/*
let longest =["men", "mi","cars", "computer"]
function longestString(){
    for(i = 0; i<longest.length; i++){
        if (longest[i].length > longest[i++].length){
            console.log(longest(longest[i]))
        } else {
            console.log("")
        }
    }
}
console.log(longestString(longest[i]));
*/

// JavaScript program to find the longest common prefix
// using Sorting

function longestCommonPrefix(arr){

    // Sort the array of strings
    arr.sort();

    // Get the first and last strings after sorting
    let first = arr[0];
    let last = arr[arr.length - 1];
    let minLength = Math.min(first.length, last.length);

    let i = 0;
    
    // Find the common prefix between the first and 
    // last strings
    while (i < minLength && first[i] === last[i]) {
        i++;
    }

    // Return the common prefix
    return first.substring(0, i);
}

// Driver Code
let arr = ["geeksforgeeks", "geeks", "geek", "geezer"];
console.log(longestCommonPrefix(arr));