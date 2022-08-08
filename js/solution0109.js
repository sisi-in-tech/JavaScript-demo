/*
Largest pair sum in array
Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an integer.

*/


//JavaScript solution1 : 
function largestPairSum(numbers)
{
  return numbers.sort((a,b)=>a-b).slice(-2).reduce((a,b)=>a+b,0);
}

/* 
use JavaScript standard built in object 
Array.prototype.slice()
The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

use JavaScript standard built in object
Array.prototype.sort()
The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. 
Arrow function
sort((a, b) => {  } )

Compare function
sort(compareFn)

Inline compare function
sort(function compareFn(a, b) { })

*/


//JavaScript solution2: 
function largestPairSum(numbers){
    numbers.sort(function(a, b){ return b - a });
    return numbers[0] + numbers[1];
  }

/* P R E P
1.Parameter : named function largestPairSum with parameter numbers 
2.Return : return the largest pair sum in the sequence. so we need the array in sort , and sum the largest number and the second largest number 
3.Example : For example, [10, 14, 2, 23, 19] this array , the largest number is 23 , the second largest number is 19 , sum them  42 (= 23 + 19)
4. pusedo code 
//named function and parameter 
function largestPairSum(numbers){
//use built in object sort() sort the array from largest number to smallest number  
    numbers.sort(function(a, b){ return b - a });
// use array's index , sum those two numbers 
    return numbers[0] + numbers[1];
  }

*/