/*description  average / round down integer / .reduce() /length property
Get the mean of an array

It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.



/*knowledge

** Array.prototype.reduce()
The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
Perhaps the easiest-to-understand case for reduce() is to return the sum of all the elements in an array:
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10


**JavaScript Demo: Array.length

const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];

console.log(clothing.length);
// expected output: 4

*/


//JavaScript solution1 : 

function getAverage(marks){
    //TODO : calculate the downwar rounded average of the marks array
    return Math.floor(marks.reduce((x, y) => x + y) / marks.length);
  }
  
  //P.R.E.P 
  //parameter 
//   create parameter marks , use reduce() method to return the sum of all the elements in an array , and divide how many elements in the array 
  
  //result 
  
//   The result is average of the given array rounded down to its nearest integer.
  
  //Example 
//    For example , this array = [1, 2, 3, 4, 5, 6 ] . marks.reduce previous num + current num , as 1+2 = 3, 3 + 4 = 7 , 7 + 5= 12 , 12 + 6 = 18 ,18 divide how many elements in this array , 
  
//   length 1, 2, 3, 4, 5 ,6 total 6 , 18/ 6 = 3 if 18/4 = 4.5 , use Math.floor () round down to 4 . 
  
  // Pesdo code 
//   create function with parameter marks 
  function getAverage(marks){
    //TODO : calculate the downwar rounded average of the marks array
    return Math.floor(marks.reduce((x, y) => x + y) / marks.length);
  }
  
  
  
  //solution2 : 
  
  function getAverage(marks){
    // calculates total number of marks
    let total = 0;
    for(let i = 0; i < marks.length; i++){
      total += marks[i];
    }
    
    /* returns total number of marks divided by number of marks
       rounded down to nearest integer */
    return Math.floor(total / marks.length);
  }
  
  
  
  