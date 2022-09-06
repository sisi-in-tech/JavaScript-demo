/*
Two sum 
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


//JavaScript solution : 
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {//the first loop
        const complement = target - nums[i];
        if (map.has(complement)) {//complement if it is exsited 
            return [map.get(complement), i]; //if it's existed , return both of the index 
        } else {
            map.set(nums[i], i);//if it's not existed , store current value and index to map
        }
    }
    return [];
};

// JavaScript solution : 
var twoSum = function(nums, target) {
    for(let i = 0, len = nums.length;i < len;i++){
        // 因为同一元素不允许重复出现，所以从i的下一位开始遍历
        for(let j = i + 1;j < len;j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    // 所有样例都是有返回结果的，这里无所谓
    return [-1, -1];
};

