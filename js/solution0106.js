/* 
Even numbers in an array
DESCRIPTION:
Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

*/ 

//JavaScript solution1: 
function evenNumbers(array, number) {
    let result = []; 
    for (let i = 0 ; i <= array.length; i++){
       if (array[i] % 2 === 0 ) result.push(array[i])
    }
    return result.splice(result.length-number ,number)
 }

 /* P R E P 
 use array prototype :
  Array.prototype.splice()
 The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().
 Array.prototype.push()
The push() method adds one or more elements to the end of an array and returns the new length of the array.
 1. paramter : create a function assgin two of parameter : one parameter is origial array , anther parameter is the last even numbers length called number . 
 2. return : declare a variable result which is empty array . Use for loop to loop through the original array and match if statment is even number , use push() method push to empty result . at then end return the result the last even numbers from the original array in the same order . 
 3. example : ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8] , loop through each element this array , if the number is even number which are [2, 4, 6, 8 ];push to empty result match parameter number 3 , splice array length 4 to length 3 , so return result [4, 6, 8]
 4. pesudo code : 
 // create function and two paramter array and number 
function evenNumbers(array, number) {
// declare variable result as an empty array 
    let result = []; 
// use for loop to loop the array 
    for (let i = 0 ; i <= array.length; i++){
// if condintion select all of even numbers from array , and push to result
       if (array[i] % 2 === 0 ) result.push(array[i])
    }
// return the last even numbers from the original array (in the same order)
    return result.splice(result.length-number ,number)
 }

 */


 //JavaScript solution2 : 
 
/*
use array prototype :
Array.prototype.splice(): -number
If negative, it will begin that many elements from the end of the array. (In this case, the origin -1, meaning -n is the index of the nth last element, and is therefore equivalent to the index of array.length - n.) If start is -Infinity, it will begin from index 0.
Array.prototype.map(): 
The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
*/
 function evenNumbers(array, number) {
    const result = [];
    array.map(x =>{
      if (x % 2 === 0)
        result.push(x);
    })
  return result.splice(-number);
}

