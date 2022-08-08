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
    let stack = [];
    let result = [];
    if(root === null){
        return result;
    }
    let current = root;
    while(current || stack.length){
        while(current){
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        result.push(current.val);
        current = current.right;
    }
    return result;
};


//https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/