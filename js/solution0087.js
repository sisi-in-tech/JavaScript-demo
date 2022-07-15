/*
DESCRIPTION:
This kata is from check py.checkio.org

You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

Let's look at a few examples:

array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.
FUNDAMENTALS

*/
// JavaScript solution: 
function index(array, n){
   // if n is outside of the array or n is negative, return -1
    if (array.length <= n || 0 > n) {
      return -1;
      // otherwise , return  N-th power of the element in the array with the index N.
    } else {
      return Math.pow(array[n], n);
    }
  }

  /* P R E P
parameter : created parameter array and n 
return : if array's length less than n then return nth power , this number is array with the index value is N , 
for example: array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
*/




  */