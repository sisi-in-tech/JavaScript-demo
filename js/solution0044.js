/*description 

Powers of 2

Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]


*/ 


//JavaScript solution1 : 

function powersOfTwo(n){
    let arr = [];
    for(let i=0; i<=n; i++)
      arr[i] = 2**i;
    return arr;
  }
  
  //first create an empty array, then using the for loop store the result of 2**i (2 to the power of i, ** is same as Math.pow() ) in the array. Then, return the array.
  
  
  //JavaScript solution2 : 
  
  function powersOfTwo(n){
    var result = [];
    for (var i = 0; i <= n; i++) {
      result.push(Math.pow(2, i));
    }
    return result;
  }