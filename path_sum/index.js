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
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
    function pathChecker(node, currSum){
        if(!node){
        return false;
    }
        currSum += node.val;
        if(!node.left && !node.right){
            return currSum === targetSum;
        }
        return pathChecker(node.left, currSum)|| pathChecker(node.right, currSum);
    }
    return pathChecker(root, 0);
};