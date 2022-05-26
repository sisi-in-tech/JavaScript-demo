/* description 

Grasshopper - Array Mean

Find Mean
Find the mean (average) of a list of numbers in an array.

Information
To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

For an example list of 1, 3, 5, 7

1. Add all of the numbers

1+3+5+7 = 16

2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

16/4 = 4

3. The mean (or average) of this list is 4

*/ 

//JavaScript solution 1: 

var findAverage = function (nums) {
    return nums.reduce((a,b)=>a + b )/ nums.length
 }
 
 // JavaScript solution2 : 
 
 const findAverage = nums => nums.reduce((a, b) => a + b) / nums.length;
 
 
 // P.R.E.P 
 
 //parameter 
 
//  set parameter nums , use method .reduce() get summary of number of values . 
 
 // return 
 
//  return the mean , it's average . 
 
 // example 
//  list of number 1, 3, 5, 7  it's (1 + 3 + 5 + 7  ) divide how many nunbers in this list , total is 4 , so 16 / 4 = 4 
 
 /* pesdo code 
 set variable equal a function with parameter nums 
 var findAverage = function (nums) {
 return sum of number of values divide how many numbers in this list 
    return nums.reduce((a,b)=>a + b )/ nums.length
 }
 */
 
 