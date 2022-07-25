/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let dummyHead = new ListNode(-1);
    dummyHead.next = head;
    let resultHead = dummyHead;
    let counter = 0;
    let tail = head;
    while(counter < n){
        counter++;
        tail = tail.next;
    }
    let current = head;
    let prev = dummyHead;
    while(tail){
        tail = tail.next;
        current = current.next;
        prev = prev.next;
    }
    prev.next = current.next;
    return resultHead.next;
};

//https://www.youtube.com/watch?v=M0CLi1HwpvM&ab_channel=AndyGala - Andy Gala's YouTube channel