/*
leetcode 66. Plus One

You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant  to least significant in left-to-right order. The large integer does not contain any leading 0's .

Increment the large integer by one and return the resulting array of digits.

给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。


Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
Example 3:

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
 

Constraints:

1 <= digits.length <= 100
0 <= digits[i] <= 9
digits does not contain any leading 0's.


*/ 


//JavaScript solution : 

var plusOne = function(digits) {
// loop through the array find the last element in the array 
 for (let i = digits.length -1 ; i >= 0 ; i--){
// if index less than 9 
    if (digits[i] < 9) {
// the result is direct as the last element + 1
        digits[i] = digits[i] + 1;
// return the digits 
        return digits;
// if index equal to 9 
    }else {
        digits[i] = 0;
    }
 } 
// if [9,9] should return [1,0,0], use unshift add 1 at the front of the array . 
 digits.unshift(1);
 return digits;
}

