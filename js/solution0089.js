/*
They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it. This is a sadly story #1: Are they opposite?
Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: The result should be a boolean value, instead of a string.

The opposite means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters or it's a empty string. Also take note of the edge case - if both strings are empty then you should return false/False.

Examples (input -> output)
"ab","AB"     -> true
"aB","Ab"     -> true
"aBcd","AbCD" -> true
"AB","Ab"     -> false
"",""         -> false

*/

// JavaScript solution1 : 
function isOpposite(s1,s2){
    // set str as a empty string 
    let str = '';
    // if statement , if both strings are empty then you should return false/False ; or if two strings are different length , then return false ; if the case is not opposite , then also should return false . 
    if(s1.length != s2.length || s1.length == 0 || s2.length == 0) return false;
    // for loop, loop through s1 , if the case is opposite , then return str as s2
    for(let i = 0; i < s1.length; i++){
      s1[i] === s1[i].toUpperCase() ? str += s1[i].toLowerCase() : str += s1[i].toUpperCase(); 
    }
    return str === s2;
  }

/*P R E P

1. parameter :s1 and s2 are the two strings ,but the case is opposite
2. return : if both strings are empty then you should return false/False ; or if two strings are different length , then return false ; if the case is not opposite , then also should return false . 
3. example : "ab","AB" two of strings are samle lengthe , the case are opposite , so it returns true. "AB","Ab"  they have the same string length but the case is not opposite . so it returns false . "","" both of strings are empty then should return false . 

*/