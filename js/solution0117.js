/*
Abbreviate a Two Word Name
DESCRIPTION:
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

*/

//JavaScript solution : 
/*
split the name into two words
take the first character of the word
capitalize this character
do this for both words
join both characters with a dot
return the joined characters

1. Use Array.prototype.map()
The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
2. 
*/



function abbreviateName(name) {
    return (
      name
        // split the name into two words . For example : Sam Harris = ("Sam","Harris")
            .split(" ")
  
        // take first char of both parts and capitalize them
        .map((part) => part[0].toUpperCase())
  
        // join both characters with a dot
        .join(".")
    );
  }