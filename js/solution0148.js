/*
leetcode -- 101. Symmetric Tree
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Example 1:


Input: root = [1,2,2,3,4,4,3]
Output: true
Example 2:


Input: root = [1,2,2,null,3,null,3]
Output: false
 

Constraints:

The number of nodes in the tree is in the range [1, 1000].
-100 <= Node.val <= 100
 

Follow up: Could you solve it both recursively and iteratively?


*/
// JavaScript solution : 
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
 * @return {boolean}
 */


var isSymmetric = function(root) {
    //迭代的写法
    //将根节点分为分割左右根节点，后面就跟判断俩个二叉树是否相等原理一样
    let q = root.left, p = root.right;
    const recursion = (q,p) => {
        if (q == null && p == null)  return true
        if(q == null || p == null) return false
        if (q.val != p.val) return false
        //symmetric is different with similar 
        return recursion(q.left, p.right) && recursion(q.right, p.left)
    }
    return recursion(q,p);
};

/*
PREP 
parameter : sign root as paramter,  Find the correct answer for Symmetric Tree . So the root left node and right node need symmetric , Given the root of a binary tree, declare variable q = root.left and p root.right . 
Return : the result need to root.left equal to root.right , there are different scenario : 
1.1 root.left and root.right both are null value . The result is true 
1.2 root.left equal to root.right value . The result is false 
1.3 root.left or root.right is null , the result is false . 
1.4 root.left and root.right are not equal , the result is false . 
1.5 if q.val != p.val , the result is false . 
Example : 
pesudo code :
*/