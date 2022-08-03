/*
Flatten and sort an array
Challenge:

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

Addendum:

Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well

*/ 

//JavaScript solution1: 
function flattenAndSort(array) {
    let result =[];
    for  (let i = 0 ; i < array.length; i++){
      for (let j = 0 ; j < array[i].length; j++ ){
        result.push(array[i][j])
      }
    }
       for (let i = 0 ; i < result.length-1 ; i++){
         for (let j = i +1 ; j < result.length; j++ ){
           if (result[i] > result[j]){
             [result[i], result[j]]=[result[j],result[i]]
           }
       }
     }
     return result 
   }

/*
P R E P 
use method : 
The push() method adds one or more elements to the end of an array and returns the new length of the array.
We're going to run a for loop, hit every single one of these arrays in the arrays and then we're going to iterate through with another for loop inside of the arrays in the arrays.
And then after that we're just going to sort it out with another double for loop, which pushes which is going to push the lower numbers to left, and the higher numbers to the right. 
1. parameter : create a function flattenAndSort with parameter names array, declear a empty array name is result , run a for loop , hit every single one of these arrays in the arrays and then we to iterate through with another for loop inside for the arrays in the result . 
2. return : after above double loop we sort it out with another for loop , which pushes push the lower number to left , and the high numbers to the right . 
3. example : [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]] we concat the array in the arrays [3, 2, 1,4, 6, 5,9, 7, 8] and then we sort it out with anther double for loop , which pushes which is going to push the lower numbers to left , and the higher number to the right . and then return array result : [1, 2, 3, 4, 5, 6, 7, 8, 9]
4. pesudo code 
// create function and parameter 
function flattenAndSort(array) {
// declare variable result as an empty array 
    let result =[];
// loop every single elements in these arrays in the array 
    for  (let i = 0 ; i < array.length; i++){
      for (let j = 0 ; j < array[i].length; j++ ){
// push to result return the new length of the array 
        result.push(array[i][j])
      }
    }
// loop each elements in result and sort these numbers 
       for (let i = 0 ; i < result.length-1 ; i++){
         for (let j = i +1 ; j < result.length; j++ ){
// make sure the sort is ascending
           if (result[i] > result[j]){
             [result[i], result[j]]=[result[j],result[i]]
           }
       }
     }
// return this array 
     return result 
   }

*/ 


//JavaScript solution2: 
const flattenAndSort = array => 
 [].concat (...array).sort((a,b)=>a - b )

/*
P R E P 
simple use arrow function to solve this problem . 
use method : 
Array.prototype.concat() 
The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
Array.prototype.sort()
The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
use operator : 
Spread syntax (...)
Spread syntax (...) allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.


1. Parameter : use arrow function , set const flattenAndSort and parameter is array 
2. return : concat all of these arrays in the array , and sort the numbers by ascending . 
3. example : concat all of these arrays in the array ,[[3, 2, 1], [4, 6, 5], [], [9, 7, 8]] to  [3, 2, 1,4, 6, 5,9, 7, 8] , and then sort the numbers by ascending [1, 2, 3, 4, 5, 6, 7, 8, 9] , and return the numbers into the empty array . 
4. pesudo code 
*/