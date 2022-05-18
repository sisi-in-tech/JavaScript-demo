/* description 

Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]

*/

// JavaScript 
// solution 1 : 

function fizzbuzz(n)
{
  //declare the array variable
  var list = []; 
  //declare for loop
  for (let i=1 ; i<=n ;  i++)
  //When number is divisible by both 3 & 5
  {
    var num = "";
    if ( i % 3 == 0 && i % 5 == 0 ) {
      num ="FizzBuzz"
      list.push(num);
      }
    //When a number is divisible by three only
    else if ( i % 3 == 0 ) {
      num ="Fizz";
      list.push(num);
      }
    //When a number is divisible by five only
    else if (i % 5 == 0){
      num = "Buzz";
      list.push(num);
    }  
    //When a number isn't divisible by either
    else {
      num = i;
      list.push(i)};
   ;
  }
  // return the list
  return list;
  
}