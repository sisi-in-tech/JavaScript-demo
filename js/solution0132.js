/*
Testing 1-2-3
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

*/

//JavaScript solution1:  
var number = function(array) {
    return array.map(function (line, index) {
      return (index + 1) + ": " + line;
    });
  }

/*
Array.prototype.map()
The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

*/

//JavaScript solution2: 
var number = function(arr) {
    var newArr = [];
      if (arr.length === 0) {
        return [];
      } else {
        for (var i = 0, len = arr.length; i < len; i += 1) {
          newArr.push((i + 1) + ': ' + arr[i]);
        }
      }
      return newArr;
    }
/* P R E P 
Parameter : declear a new empty array nameed newArr , use if statement and for loop to get result . 
Return : if original array is an empty array ,then return result is an empty array ; but if this array is not an empty array , looping through this array and get the result , use push()method , push to the newArr element with format request , and then return the newArr array . 
Example : [] --> [] if ["a", "b", "c"] --> loop through this array and return index plus 1 of this element + ": " + this index correspoding element 
Pesudo Code : 
var number = function(arr) {
//declear empty array 
    var newArr = [];
// if the orginal array is empty 
      if (arr.length === 0) {
        return [];
// if the original array with any value 
      } else {
// loop through this array 
        for (var i = 0, len = arr.length; i < len; i += 1) {
// push the (index+1) + : (space)+ the value  
          newArr.push((i + 1) + ': ' + arr[i]);
        }
      }
      return newArr;
    }


*/ 