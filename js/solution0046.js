/* description 

Convert an array of strings to array of numbers

Oh no!
Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

You need to cast the whole array to the correct type.

Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

ie:["1", "2", "3"] to [1, 2, 3]

Note that you can receive floats as well.

*/ 


//JavaScript solution : 

const toNumberArray = stringarray => stringarray.map(Number);


//JavaScript solution2 : 

function toNumberArray(stringarray){
   return stringarray.map(Number)
}


//JavaScript solution3 : 
//The parseFloat() function parses an argument (converting it to a string first if needed) and returns a floating point number.

function toNumberArray(stringarray)
{
  return stringarray.map(parseFloat);
}