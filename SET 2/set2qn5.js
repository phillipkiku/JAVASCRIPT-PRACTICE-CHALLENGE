//a function to find the longest common prefix string
//amongst an array of strings
//no common prefix
//return an empty string ""


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
