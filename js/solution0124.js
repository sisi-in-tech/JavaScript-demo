/*
Currying functions: multiply all elements in an array

To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

The returned array should consist of each of the elements from the first array multiplied by the integer.

Example:

multiplyAll([1, 2, 3])(2) = [2, 4, 6];
You must not mutate the original array.

您需要创建一个函数 multiplyAll/multiply_all，它将整数数组作为参数。arr ex:[1,2,3]
此函数必须返回另一个函数，该函数将单个整数作为参数并返回一个新数组。n ex:2

返回的数组应由第一个数组中的每个元素乘以整数组成。arr.[i]*n
*/

// JavaScript solution : 
function multiplyAll(arr) {
    return function(n) {
      return arr.map(e => e * n);
    }
  }

/* P R E P 
The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
1. Parameter : create a function named multiplyAll , and with parameter arr as argument . and return another function named n , return a new array,this array should consist of each of the elements from the first array multiplied by the integer.
2. Return :  first we return a another function named n , in this function we return a new array from the previous array use map() method to creates a new array populated with the results of each element in the calling array . 
3. example : multiplyAll([1, 2, 3])(2) --- parameter arr is an array of integers [1, 2, 3] , n is 2 a single integer. use map() method to creates a new array : [1*2, 2*2, 3*2] the return result is equal  [2, 4, 6]
4. Pesudo code :
//create a function named multiplyAll , and with parameter arr as argument 
function multiplyAll(arr) {
//return another function named n   
    return function(n) {
// use map() method to creates a new array populated with the results of each element in the calling array
      return arr.map(e => e * n);
    }
  }
*/

// arrow function : 
multiplyAll = arr => n => arr.map(e => e * n);

//JavaScript forloop : 
function multiplyAll(arr){
    return function(n){
    if (arr.length == 0)
    return [];
    let result = [];
    for(let i =0;i< arr.length; i++){
        result.push(arr[i]*n)
    }
    return result;
    }
}