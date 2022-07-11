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

    removeNth(elem){
        if(elem < 0 || elem > this.size){
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;
        if(elem === 0){
            this.head = current.next;
        }
        else{
            while(count < elem){
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
    }
}


