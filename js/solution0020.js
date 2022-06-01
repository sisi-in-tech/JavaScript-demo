/*description 

Multiples of 3 or 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1)

*/


function solution(number){
    let sum = 0;
    for (let i = 0; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    
    return sum;
  }
  
  
  /*
  konwledge : 
  for loop 
  if statement 
  */
  
  /*P.R.E.P
  1.parameter  create a function named solution with a parameter number . 
  2.return : returns the sum of all the multiples of 3 or 5 below the number passed in . 
  3.example : 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 those are number below 10 . and the number are postive , because the number is negative , return 0 . 
    numbers multiples of 3 or 5 , means modulus % 3 === 0 or modulus % 5 ===0  
    it's 3 and 5 
    use for loop , loop to number modulus % 3 === 0 or modulus % 5 ===0  return sum is 3 + 5 = 8 
  
  4.pseudo code 
  
  function solution(number){
  //create a new variable sum , set sum = 0 
    let sum = 0;
  // find out  each of number from 0 to less than 0 .
    for (let i = 0; i < number; i++) {
  // take numbers modulus 3 or modulus 5 
      if (i % 3 === 0 || i % 5 === 0) {
  // sum those value .
        sum += i;
      }
    }
  //return sum value .
    return sum;
  }
  
  */