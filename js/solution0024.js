/* 

Square(n) Sum

description 

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

*/ 

// JavaScript Solution1 : use loops: 

function squareSum(numbers){
    let sum = 0 ; 
    for (let i = 0 ; i < numbers.length ; i++){
      sum = sum + numbers[i]**2 
    }
    return sum
  }
  
  // solution2 : 
  
  function squareSum(numbers){
    return numbers.reduce((sum,num) => sum + (num * num), 0);
  }
  
  
  //The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
  // Syntax : reduce((previousValue, currentValue) => { /* ... */ } )