//Given an integer num
//function that repeatedly adds all its digits
//until the result has only one digit
//return it.


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

