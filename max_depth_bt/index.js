

  class TreeNode {
    constructor(val, left, right){
        this.val = (val===undefined ? 0 : val);
        this.left = (left===undefined ? null : left);
       this.right = (right===undefined ? null : right);
       this.maxDepth = this.maxDepth.bind(this);
    }

      maxDepth(root) {
        if (root === null) {
            return null;
        }
        let lDepth = maxDepth(root.left);
        let rDepth = maxDepth(root.right);
        if (lDepth > rDepth) {
            return lDepth + 1;
        } else {
            return rDepth + 1;
        }
    };
  }



let tree = new TreeNode();

console.log(tree.maxDepth([3,9,20,null,null,15,7]))