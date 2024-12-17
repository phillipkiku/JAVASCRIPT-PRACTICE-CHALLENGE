// function named fizzBuzz that takes in two(2) parameters
//expected to be strings
//should return the string Fizz 
// if the combined length divisible by 3
// Buzz if it is divisible by 5
//FizzBuzz if it is divisible by both 5 and 3
//

function fizzBuzz(string1, string2) {
    if (typeof string1 === "string" && typeof string2 === "string"){
      let combinedLength = string1.length + string2.length;
      if(combinedLength % 3 === 0){
        console.log("FIZZ");
      }else if(combinedLength % 5 === 0){
        console.log("BUZZ");
      } else if (combinedLength % 5 === 0 && combinedLength % 3){
        console.log("FIZZBUZZ");
      } else {
        console.log("Not divisible by any")
      }
      
    } else {
      console.log("Please enter Strings");
    }
    
    }
    
    fizzBuzz("man", "menrrrr");
    fizzBuzz("abc", "defghijkl");
    fizzBuzz("abc", "defghijklmn");