/*
Highest and Lowest
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.

*/



//JavaScript Solution : 
function highAndLow(numbers){
    var arr = numbers.split(' ').sort(function(a, b) { return a - b });
    return arr[arr.length -1] + ' ' + arr[0];
  }

/*
Use JS string split () 
The split() method splits a string into an array of substrings.
The split() method returns the new array.
The split() method does not change the original string.
If (" ") is used as separator, the string is split between words.
Use JS array sort() 
The sort() sorts the elements of an array.
The sort() overwrites the original array.
The sort() sorts the elements as strings in alphabetical and ascending order.

P R E P 
1. parameter : named function highAndLow, and create parameter numbers . Declare variable arr , use string split() method splits a string between letters . sort the array by ascending order . 
2. return : the ascending order array the last index element is the maximun number , and space , then the first index element is the minimun number . 
3. example : highAndLow("1 2 3 4 5");
 use string split() method splits a string between letters . highAndLow("1" "2" "3" "4" 5") ; 
 sort the array by ascending order , is going to be the same order highAndLow("1" "2" "3" "4" 5") ; 
 the ascending order array the last index element is the maximun number , array the last index is array[5-1] is 5 ; and then add the space use + ' ' + , then then the first index element is the minimun number , array[0] is 1 . so 
4.pesudo code 
// amed function highAndLow, and create parameter numbers 
function highAndLow(numbers){
//Declare variable arr , use string split() method splits a string between letters . sort the array by ascending order . 
    var arr = numbers.split(' ').sort(function(a, b) { return a - b });
//return the ascending order array the last index element is the maximun number , and space , then the first index element is the minimun number .
    return arr[arr.length -1] + ' ' + arr[0];
  }

*/ 





//JavaScript Solution2 : 
function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
  }

/*
Array.prototype.map()
The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

Standard built-in object 
Number
Number is a primitive wrapper object used to represent and manipulate numbers like 3 or -1.25.

Function.prototype.apply()
The apply() method calls the specified function with a given this value, and arguments provided as an array (or an array-like object).
ex : const numbers = [5, 6, 2, 3, 7];

    const max = Math.max.apply(null, numbers);

    console.log(max);
     // expected output: 7

     const min = Math.min.apply(null, numbers);

     console.log(min);
     // expected output: 2

*/ 