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
 var preorderTraversal = function(root) {
    let result = [];
    if(root === null){
    return result;
    }
    let stack = [root];
    while(stack.length){
        let current = stack.pop();
        result.push(current.val)
        if(current.right) stack.push(current.right);
        if(current.left) stack.push(current.left);
    }
    return result;
};

// The order of preorder traversal is ROOT LEFT RIGHT 