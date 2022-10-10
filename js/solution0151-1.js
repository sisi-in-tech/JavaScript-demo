/* Array -Leetcode 
1. Two Sum (In list 1 )
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


 var twoSum = function(nums, target){
    for (let i = 0 ; i < nums.length ; i++){
        for (let j = i+1 ; j < nums.length ; j++){
            if (nums[i] + nums[j] === target){
                return [i,j]
            }
        }
    }
}

/* PREP 
1. parameter : we sign the nums and target as two of the paramete , nums is the array , and the target is two numbers up to target . 
2. return : this question we return the two elements in the array's index , and those two index in the same array . 
3. example : Input: nums = [2,7,11,15], target = 9  ,loop throught the array , find the first element ,   element 2 index 0 , and do another loop in the arrray , find 7 index 1 , 2+7 =9 , those two of elements are correct element , and then we'll return those two numbers index  so the result is [0,1]
4. pesudo code 

//function expression ,with two of parameters
var twoSum = function(nums, target){
//for loop , loop through the array find the first element 
    for (let i = 0 ; i < nums.length ; i++){
//for loop , loop through the array find the second element 
        for (let j = i+1 ; j < nums.length ; j++){
//if statement , if two of elements sum equal target's data type and value . 
            if (nums[i] + nums[j] === target){
// return two elements index 
                return [i,j]
            }
        }
    }
}



*/