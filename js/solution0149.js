/*
leetcode - 108. Convert Sorted Array to Binary Search Tree

Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted:

Input: nums = [1,3]
Output: [3,1]
Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in a strictly increasing order.

https://www.youtube.com/watch?v=Pl2vza7-txU

Binary Search Tree: 左边的值小于根节点的值，右边的值大于根节点的值
A balanced binary tree ： also referred to as a height-balanced binary tree, is defined as a binary tree in which the height of the left and right subtree of any node differ by not more than 1.
// 平衡二叉树，可以选择中点作为根节点
// 左右子树的创建，选择数组的区间范围
// 终止，l > r，当 l ==r 的时候，还是有一个节点需要创建的，不能直接返回

*/
var sortedArrayToBST = function(nums, left = 0 , right = nums.length -1){
    if (left > right) return null ; 

    let mid = Math.floor((left + right)/2);
    let root = new TreeNode(nums[mid]);

    root.left = sortedArrayToBST(nums, left, mid-1);
    root.right = sortedArrayToBST(nums, mid + 1, right);

    return root ;
}