var middleNode = function(head) {
    let fast = head;
    let slow = head;
    
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
};

console.log(middleNode([1,2,3,4,5,6,7,8,9]))


// good place to learn about linked lists in general:
// https://www.andrew.cmu.edu/course/15-121/lectures/Linked%20Lists/linked%20lists.html#:~:text=The%20entry%20point%20into%20a,is%20a%20dynamic%20data%20structure. 
// https://www.programiz.com/dsa/linked-list