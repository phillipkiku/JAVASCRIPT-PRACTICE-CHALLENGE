//Given an integer num
//function that repeatedly adds all its digits
//until the result has only one digit
//return it.
/*

let num = 899;
function adder(){
    for(i=0; i<num.length; i++){
        let answer = num[i] + num[i++];
        if( answer === '1') {
            return answer;
        } 
    }
}

console.log(adder(num));

*/

// JavaScript program to find the digit sum by 
// repetitively Adding its digits
let n;
function singleDigit(n) {
    let sum = 0;

    // Repetitively calculate sum until
    // it becomes single digit
    while (n > 0 || sum > 9) {

        // If n becomes 0, reset it to sum 
        // and start a new iteration.
        if (n === 0) {
            n = sum;
            sum = 0;
        }

        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}

// Driver Code
n = 1234;
console.log(singleDigit(n));

n = 898;
console.log(singleDigit(n));