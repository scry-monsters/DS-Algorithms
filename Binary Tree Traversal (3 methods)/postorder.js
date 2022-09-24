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
 var postorderTraversal = function(root) {
    if(!root) return [];
    const res = [];
    const helper = (node) => {
        if(!node) return;
        helper(node.left);
        helper(node.right);
        res.push(node.val);
    }
    helper(root);
    return res;
};

//The order of postorder traversal is LEFT RIGHT ROOT

//iterative 
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
 var postorderTraversal = function(root) {
    const result = []
    if (!root) {
        return result;
    }
    const stack = [root];
    while (stack.length) {
        const curr = stack.pop();
        result.unshift(curr.val);
        if (curr.left) stack.push(curr.left);
        if (curr.right) stack.push(curr.right);
    }

    return result;
};