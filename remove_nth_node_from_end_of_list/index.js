class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(head, size = 0){
        this.head = head;
        this.size = size;
    }

    addElemToBegin(data){
        this.head = new Node(data, this.head);
        this.size++;
    }


    removeElem(index){
        if(index < 0 || index > this.size){
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;
        if(index === 0){
            this.head = current.next;
        }
        else{
            while(count < index){
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
    }
}

let ll = new LinkedList();
ll.addElemToBegin(300);
ll.addElemToBegin(200);
ll.addElemToBegin(100);
ll.removeElem(1);
console.log(ll.size);