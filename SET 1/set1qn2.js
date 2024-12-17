//prompts a user to enter their year of birth
//prints a string in the console 
//stating whether the user is a minor, a youth, or an elder
//below 18 years is a minor
//anyone between 18 and 36 years youth
// rest are elders

let dateOfBirth = prompt("Please Enter Date of Birth");

if (dateOfBirth > 2006){
  console.log(dateOfBirth ,"This is a Minor");
} 
else if ( 2006 > dateOfBirth && dateOfBirth > 1988){
  console.log(dateOfBirth, "This is an Youth")
} 
else {
    console.log(dateOfBirth,"This is an Elder");
}
 