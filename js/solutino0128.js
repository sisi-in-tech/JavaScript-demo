/*
Small enough? - Beginner
You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.

*/
//JavaScript solution: 

function smallEnough(a, limit){
    for (i = 0 ; i < a.length ; i++){
      if (a[i] > limit){
        return false
      }
    }
    return true
  }
/* P R E P 
1. parameter : create function smallEnough with two parameter , a is array , limit is a limit value . 
2. return : request when all values in the array are below or equal to the limit value, return true ; if greater than limit value , return false . So I use for loop to loop through the array check each of the elements. and use if statement , to run the result . 
3. example : a=[1,2,3,4] limit value is 3 . We use for loop check each of the elements which is below or equal to 3, then return true , so value 1, 2, 3 are all match this condition . else 4 is greater than 3 , so return false . 
4. pesudo code : 
// create function and parameter 
function smallEnough(a, limit){
// loop through the array to check each of elements
    for (i = 0 ; i < a.length ; i++){
// if condition greater than limit 
      if (a[i] > limit){
// result return false
        return false
      }
    }
//otherwise return true
    return true
  }

  */

//JavaScript solution2: 
function smallEnough(a, limit){
    return Math.max(...a) <= limit
  }
  
/*
Example : 
const array1 = [2, 3, 1];

console.log(Math.min(...array1));
-- expected output: 1

*/