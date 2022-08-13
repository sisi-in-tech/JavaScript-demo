/*
Sum of array singles
In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

*/

// JavaScript solution : 

function repeats(arr){
    return arr
    .filter(x => arr.indexOf(x) === arr.lastIndexOf(x))
    .reduce((a , b)=> a + b )
 };

 /* 
1. string : A string consists of one or more characters, which can include letters, numbers, and other types of characters. 
2. Array.prototype.filter() 
// Arrow function
filter((element) => { } )
The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
3. String.prototype.lastIndexOf()
The lastIndexOf() method, given one argument: a substring to search for, searches the entire calling string, and returns the index of the last occurrence of the specified substring.
4. Array.prototype.indexOf()
The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
5. Array.prototype.reduce() 
reduce() is to return the sum of all the elements in an array


The example of indexOf () vs lastIndexOf()
const anyString = 'Brave, Brave New World';

console.log(`The index of the first "Brave" is ${anyString.indexOf('Brave')}`);
// logs 0
console.log(`The index of the last "Brave" is ${anyString.lastIndexOf('Brave')}`);
// logs 7
 */ 

/* P R E P 
1. parameter : 
named the function repeats and parameter arr is the array , use fileter() method , filter the array to only get the items occuring once, in the filter method , variable x is the single element value in the array . then use reduce to return the sum of the all the elements in the array . 
2. return : return the sum of the numbers that occur only once
3. example : array [4,5,7,5,4,8] , the index 0 value is 4 , the last index value appear 4 is index 4 , so arr.indexOf(x) === arr.lastIndexOf(x) is false ; the index 2 value is 7 , the last index value appear 7 is still index 2, so arr.indexOf(x) === arr.lastIndexOf(x) is true , so 7 is one of the number occur once . Use the same way , we can find the second number is 8 occur once , and then use reduce() method sum of those two numbers , 7 + 8 = 15 . 
4. pseudo code : 

function repeats(arr){
  // first filter the array to only get the items occuring once, aka filter for items where indexOf values = lastIndexOf value
   return arr
   .filter(x => arr.indexOf(x) === arr.lastIndexOf(x))
  //  then reduce to get the sum of the two numbers
   .reduce((a, b) => a + b);
};
 */