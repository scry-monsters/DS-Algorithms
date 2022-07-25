/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
    let slow = head;
    let fast = head;
       while(fast !== null && fast.next !== null){
           slow = slow.next;
           fast = fast.next.next;
       }
       return slow;
   };


// good place to learn about linked lists in general:
// https://www.andrew.cmu.edu/course/15-121/lectures/Linked%20Lists/linked%20lists.html#:~:text=The%20entry%20point%20into%20a,is%20a%20dynamic%20data%20structure. 
// https://www.programiz.com/dsa/linked-list