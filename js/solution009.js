/* description 

Is the string uppercase?

"c".isUpperCase() == false
"C".isUpperCase() == true
"hello I AM DONALD".isUpperCase() == false
"HELLO I AM DONALD".isUpperCase() == true
"ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() == false
"ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() == true


In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

description :JavaScript 

.toString() 
 every() 
.toUpperCase() 
*/

-- solution1 : 

String.prototype.isUpperCase = function() {
    return this.toString() === this.toUpperCase() 
}



-- solution2 : 

String.prototype.isUpperCase = function() {
  return this.split('').every(char => char === char.toUpperCase())
}


/*
P.R.E.P 

//parameter : 

make sure it's string , so use .toString() method . and When used in an object method, this refers to the object.
use toUpperCase() make sure the string are all caps 

//return :
if all caps are uppercase then return ture , if all of the caps are not uppercase then return false . 

//example : 

"c".isUpperCase() == false this is not cap 
"C".isUpperCase() == true   this is cap 
"hello I AM DONALD".isUpperCase() == false  those are not all caps .
"HELLO I AM DONALD".isUpperCase() == true   those are all caps .
"ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() == false  those are not all caps .
"ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() == true   those are all caps . 

//pesdo code : 

create a function return make sure this object are all string and data type and value equal to all caps . 

*/