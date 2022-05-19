/*description 

Simple string characters


In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.


*/


//JavaScript 
//solution 1 : 


const solve = (str) => (
    [/[A-Z]/, /[a-z]/, /\d/, /[\W]/].map(rgx => str.split(rgx).length - 1)
  );
  
  //solution 2 : 
  
  function solve(s){
   var up = s.match(/[A-Z]/g).length;
   var low = s.match(/[a-z]/g).length;
   var num = s.match( /\d/g).length;
   var special = s.length - (up + low + num);
    
   return [up,low,num,special]
  
  }
  
//   P.R.E.P
  //parameter 
  
//   create parameter str and use arrow function , JavaScript Regular Expressions(rgx) to display count of uppercase letters, lowercase, numbers and special characters.
//   The match() method retrieves the result of matching a string against a regular expression.
  
  //return 
  
//   and I'll use map , the function turn into  a new function , then use split(rgx) get each of the count 
  
  //example 
//   "*'&ABCDabcde12345" will[A, B, C D] [a, b , c, d]  [4, 5, 5, 3] [ *'&] .  [A, B, C D] length is 3 , [a, b , c, d] length is 3  
  
  //pesdo code 
  
  /*
  function solve(s){
  // create variable for each of array  , retrieves the result of matching the string 
   var up = s.match(/[A-Z]/g).length;
   var low = s.match(/[a-z]/g).length;
   var num = s.match( /\d/g).length;
   var special = s.length - (up + low + num);
  // return the new array 
   return [up,low,num,special]
  
  }
  */