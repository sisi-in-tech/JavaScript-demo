/* 
String ends with?
DESCRIPTION:
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

*/ 



// JavaScript solution : 

function solution(str, ending){
    return str.endsWith(ending);
  }

/*
Use standard built in object --string 
String.prototype.endsWith()
The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
ex : 
const str1 = 'Cats are the best!';
console.log(str1.endsWith('best!'));
// expected output: true
*/ 
    