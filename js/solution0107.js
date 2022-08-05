/*
Smallest value of an array
Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

min([1,2,3,4,5], 'value') // => 1
min([1,2,3,4,5], 'index') // => 0
*/


//JavaScript solution1 : 
function min(arr, toReturn) {
    if (toReturn==='value')
    return Math.min(...arr)
    return arr.indexOf(Math.min(...arr))
  }
/*
1. operator : Spread syntax (...)
Spread syntax (...) allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.
2. standard build-in object : 
Math.min()
Array.prototype.indexOf() :
The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
P R E P 
1. As the question mentioned , create function min() , and with two parameters , first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.
2. Return :  return the smallest value of an array or the index of that value. Use if else statment , if 
toReturn==='value' return the minimun value , else return the minimun value's index 
3. Example : 
min([1,2,3,4,5], 'value') // => 1
min([1,2,3,4,5], 'index') // => 0
if toReturn==='value' then return Math.min(...arr) , the result is 1 ; 
if toReturn==='index' then excute  return arr.indexOf(Math.min(...arr)) , the result is 0 . 
4. pesudo code 
// create function min with two parameter , first paramter is an array filled with at least 1 number and no duplicates; the second parameter will be a string holding one of two values: 'value' and 'index'.
function min(arr, toReturn) {
// if condition if the second parameter equal to 'value'
    if (toReturn==='value')
// return minimun value in the array 
    return Math.min(...arr)
// otherwise return minimun value's index 
    return arr.indexOf(Math.min(...arr))
  }

*/

//JavaScript solution2 : 
function min(arr, toReturn) {
    var val = Math.min.apply(null, arr)
    return toReturn == 'value' ? val : arr.indexOf(val)
  }

/* 
1. funciton method : Function.prototype.apply() 
The apply() method calls the specified function with a given this value, and arguments provided as an array (or an array-like object).
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// expected output: 7
2. Conditional (ternary) operator:
The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement. 

*/