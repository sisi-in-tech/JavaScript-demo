/*
Fix string case
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

*/

//JavaScript solution : 
function solve(s){
    let upperNum = 0 ; 
    let lowerNum = 0 ; 
    for (let i = 0 ; i < s.length ; i++){
      if (s[i]===s[i].toLowerCase()){
           lowerNum += 1    
       }else{
           upperNum += 1
       }
      }
    
  return lowerNum >= upperNum ? s.toLowerCase() : s.toUpperCase() 
  }
/*
1. for loop 
2. toLowerCase() / toUpperCase() 
3. ternary opertor 
P R E P 
1. Parameter : named function solve with parameter s , s is the string from the question . Declare two of the variables , upperNum and lowerNum assign them with same value . Use for loop to loop through the string s , get the real lowercase number and real uppercase number . 
2. return : use ternary operator to find out if Lowercase characters > uppercase or  Uppercase characters > lowecase. return the following result . 
3. example : for example : solve("coDe") = "code". We loop through this string , three lowercase and one uppercase , so if lowercase more than uppercase , the uppercase turn to lowercase , so return s.toUpperCase() 
4. pseudo code : 
// named function solve , parameter s 
 function solve(s){
// declare variable upperNum and lowerNum assign value 0 
    let upperNum = 0 ; 
    let lowerNum = 0 ; 
// loop through the string s 
    for (let i = 0 ; i < s.length ; i++){
// if Upper == lowercase. Change all to lowercase.
      if (s[i]===s[i].toLowerCase()){
           lowerNum += 1  
// else change all to uppercase   
       }else{
           upperNum += 1
       }
      }
// use tenary operator return result   
  return lowerNum >= upperNum ? s.toLowerCase() : s.toUpperCase() 
  }

*/




  // or can write as : 
  function solve(s){
    let lowerNum = 0;
    let upperNum = 0;
    
      for(let i = 0; i <= s.length-1; i += 1){
        
        if(s[i] === s[i].toLowerCase()) {
          lowerNum += 1;
        } else {
          upperNum += 1;
        }
     }
    
    return lowerNum >= upperNum ? s.toLowerCase() : s.toUpperCase();
  }





