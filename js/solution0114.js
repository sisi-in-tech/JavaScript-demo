/*
Thinkful - String Drills: Repeater
Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.

Example: (Input1, Input2 --> Output)
"a", 5 --> "aaaaa"

*/ 

// JavaScript solution : 

function repeater(string, n){
    return string.repeat(n)
  }
  
/*
Use Standard built-in object : 
The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
*/



// JavaScript solution2: arrow function 
const repeater = (string, n) => {
  return string.repeat(n);
} 


