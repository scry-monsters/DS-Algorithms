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
 * @return {string[]}
 */

 let helper = (node, current_path, result) => {
    current_path += "->" + node.val;
    if(node.left === null && root.right === null){
        result.push(current_path);
        return;
    }
    if(root.left !== null){
        helper(root.left, current_path, result);
    }

    if(root.right !== null){
        helper(root.right, current_path, result);
    }
}

 var binaryTreePaths = function(root) {
    let result = [];
    let current_path = JSON.stringify(root.val);

    if(root.left === null && root.right === null){
        result.push(current_path)
    } 
    if(root.left !== null){
        helper(root.left, current_path, result);
    }

    if(root.right !== null){
        helper(root.right, current_path, result);
    }
    
    return result;
    
};