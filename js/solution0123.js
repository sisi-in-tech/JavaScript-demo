/*
Switcheroo
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'

*/


// JavaScript solution : 
function switcheroo(x){
    return x.split('').map(function(e){
      if (e =='b')return 'a';
      if (e == 'a') return 'b';
      if(e=='c') return 'c'
    }).join('');
  }

/* 
Array.prototype.map()
The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
String.prototype.split()
The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
Array.prototype.join()
The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
*/ 
  