/*
Find Multiples of a Number
In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

If you can, try writing it in only one line of code.

*/


//JavaScript solution : 
// function findMultiples pass to parameters 
function findMultiples(integer, limit) {
// declear a empty array which is arr .  
    const arr = [];
//i is the multiple , use for loop to loop through integers between interger and limit . 
    for (let i = 1; i <= limit; i ++) {
// if condition integer multiples i less or equal to limit    
        if (integer * i <= limit) {
// push to the empty array (arr)
          arr.push(integer * i);
        }
    }
// return the result 
    return arr;
  }

  /* P R E P 
1.parameter : create two parameter are integer which is 'build a program that takes a value' ; limit which is 
"returns a list of its multiples up to another value"
2.Return a array , and not consisting of 0. The limit will always be higher than the base.
3.For example : if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6. 2 * 2 < 6 , so push to the empty array . 
4. pseudo code

  */