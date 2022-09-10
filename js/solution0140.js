/*
88. Merge Sorted Array--leetcode 

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
 

Constraints:

nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[j] <= 109
 

Follow up: Can you come up with an algorithm that runs in O(m + n) time?



*/

// JavaScript solution1 : 
var merge = function(nums1, m, nums2, n) {
// insert at index m ,  and delete all of 0 , insert the nums2 (use spread syntax )
    nums1.splice(m, nums1.length - m, ...nums2);
// asc order 
    nums1.sort((a, b) => a - b);
};

/*

Thinking : 
1. if nums1 is an empty array , or nums2 is an empty array , or both have value in the array 
2. remarked : return requested to nums1 : The final sorted array should not be returned by the function, but instead be stored inside the array nums1. 

.splice() method : 
The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
VS slice() : To access part of an array without modifying it
For example : 
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

*/

// JavaScript solution2: 
var merge = function(nums1, m, nums2, n) {
// if nums2 is an empty array , so n equal to 0 
    if (n === 0) return nums1
// otherwise ,  if nums1 is not an empty array , insert at index m , delete n , insert array nums2
    else {
        if (nums1.length) {
            nums1.splice(m, n, ...nums2)
// sort ascending order
            return nums1.sort((a, b) => a - b)
        } else {
// if nums1 is an empty array . 
            return nums2
        }
    }
};



