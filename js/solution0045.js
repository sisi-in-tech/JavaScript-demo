/* description 

Break camelCase

Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

*/

//JavaScript solution : 
/*
for...of statement  The for...of statement creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.
*/



function solution(string) {
    let newString = '';
    for (letter of string ){
      if (letter == letter.toUpperCase()){
         newString += ' ';
         newString += letter ;
      
    }else {

      newString += letter 
    }
   
    }
     return newString 
}


//JavaScript solution : 

function solution(string) {
  string = string.split('').map(function (el) {
    if (el === el.toUpperCase()) {
      el = ' ' + el
    }
    return el
  })
  return string.join('')
}