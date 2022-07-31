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
 var deleteDuplicates = function(head) {
    let slowHead = head;
    while(slowHead && slowHead.next){
        let fastHead = slowHead;
        while(fastHead.next){
        if(slowHead.val === fastHead.next.val){
        fastHead.next = fastHead.next.next;
        }
        else{
            fastHead = fastHead.next;
        }
        }
        slowHead = slowHead.next;
    }
    return head;
};