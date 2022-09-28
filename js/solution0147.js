/*
94. Binary Tree Inorder Traversal （中间遍历）
Given the root of a binary tree, return the inorder traversal of its nodes' values.

Example 1:


Input: root = [1,null,2,3]
Output: [1,3,2]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
 

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
 
四种遍历traversal的主要思想：

前序遍历：访问根–>遍历左子树–>遍历右子树;
中序遍历：遍历左子树–>访问根–>遍历右子树;
后序遍历：遍历左子树–>遍历右子树–>访问根;
广度遍历：按照层次一层层遍历;

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

 var inorderTraversal = function(root) {
// declare the result as empty string 
    const res = [];
//inorder traversal left ===>root ===> right 
// declare inorder as variable use arrow function 
    const inorder = (root) => {
// if root is empty 
        if (!root) {
// return res
            return;
        }
//otherwise excute inorder
        inorder(root.left);
        res.push(root.val);
        inorder(root.right);
    }
    inorder(root);
    return res;
};
