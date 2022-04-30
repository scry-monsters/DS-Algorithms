/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
 var deleteNode = function(node, previous) {
    if(node.next){
    previous = node;
    node.val = node.next.val;
    deleteNode(node.next, previous)
    }
    else{
        previous.next = null;
    }
};

//What I did was check if there is a next value, if yes then make the previous the number you need to remove(we can't access the head directly in this problem) and make the given node equal to next node value, basically we just move all the numbers backwards until the last and element before last are the same, then we get out of the recursion because the node.next doesn't exist for last element, and using the "previous" variable just set it's next value to null essentially saying that you don't have anything in front of you and solving the problem.