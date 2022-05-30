/* description 

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

被要求对数字的每个数字求平方并将它们连接起来。

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

9*9 + 1*1 + 1*1 + 9*9 = 811181

Note: The function accepts an integer and returns an integer

*/ 
/* 

solution : 
To convert the integer passed in the function to a string.
Create an array of all the items in the string using the split(‘’) method.
Use the map method to square each item in the array and push it to a new array.
Join the new array formed after using the map method using the join(‘’) method.
Since the join(‘’) will return a string, convert that to integer and return.

*/ 

// JavaScript solution1 : 

function squareDigits(num){
    return Number(String(num).split("").map(function (item) { return Math.pow(Number(item), 2); }).join(""));
  }
  
  // JavaScript solution2 : 
  const squareDigits = num => parseInt(String(num).split('').map(x => parseInt(x)**2).reduce((a, x) => a + String(x)))