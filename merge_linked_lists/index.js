
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
    }
    
   var mergeTwoLists = function(list1, list2) {
       if(list1 === null) return list2;
       if(list2 === null) return list1;
      let fakeHead = new ListNode(0, null);
       let curr = fakeHead;
       while(list1 !== null & list2 !== null){
           if(list1.val < list2.val){
               fakeHead.next = list1;
               list1 = list1.next
           }
           else{
               fakeHead.next = list2;
               list2 = list2.next
           }
           fakeHead = fakeHead.next;
   }
       if(list1 !== null){
           fakeHead.next = list1;
           list1 = list1.next;
       }
       if(list2 !== null){
           fakeHead.next = list2;
           list2 = list2.next;
       }
       return curr.next;
   };