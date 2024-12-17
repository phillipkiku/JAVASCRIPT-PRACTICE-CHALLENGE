//Array containing integers, floats, and one character strings
//function that takes an Array as a parameter and returns an Object
//sorted even numbers
//odds is a list of sorted odd numbers
//chars is a list of sorted single-character strings.

let someArray = [3.0,'a',7,'x','20','d',4,'f', 8];

function sortArray(array){
    let evens = [];    
    let odds = [];
    let chars = [];
/*
    for (let i=0; i<array.length; i++){
        let currentElement = array[i];
        if (currentElement % 2 ===0 ){
            evens.push(currentElement);
        }
         else if (currentElement % 2 === 1 ){
            odds.push(currentElement);
        } else if (typeof currentElement === "string"){
            chars.push(currentElement);
        }
         else {
            console.log("Doesnot belong anywhere");
        }
    }
        */

    for (let element of array){
        
        if (element % 2 ===0 ){
            evens.push(element);
        }
         else if (element % 2 === 1 ){
            odds.push(element);
        } else if (typeof element === "string"){
            chars.push(element);
        }
         else {
            console.log("Doesnot belong anywhere");
        }
    }


 return {
    evenNumbers : evens,
    oddNumbers : odds,
    charaters : chars,
 }
 
}
console.log(sortArray(someArray));