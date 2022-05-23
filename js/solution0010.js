/* description 
Sort array by string length

Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

*/

//JavaScript solution1 : 

function sortByLength (array) {
    return array.sort(function(a,b){return a.length - b.length})
  };
  
  
  //solution 2 arrow function2 : 
  
  function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length);
  }; 
  
  
  
  //P.R.E.P
  //parameter 
  
//   creat parameter array , sort array from shortest to longest . 
  
  //return this array from shorest characters to longest characters 
  
  // for example :   ["Telescopes", "Glasses", "Eyes", "Monocles"] after ordered from shortest to longest , the result is ["Eyes", "Glasses", "Monocles", "Telescopes"]
  
  /* pesdo code : 
  create a parameter array .
  
  function sortByLength (array) {
  use array.sort()method order index shortest to index longest .
    return array.sort(function(a,b){return a.length - b.length})
  };
  
  also can use arrow function to get the order index shortest to index longest . 
  
  */
  
  