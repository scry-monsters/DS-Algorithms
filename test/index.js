class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}


class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    insertAtFirst(data){
        this.head = new Node(data, this.head)
        this.size ++;
    }

    insertLast(data){
        let node = new Node(data);
        let current;
        if(!this.head){
            this.head = node;
            this.size++;
        }
        else{
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    insertAt(data, index){
        if(index > 0 && index > this.size){
            return;
        }
        if(index === 0){
            this.head = new Node(data, this.head);
            return;
        } 

        const node = new Node(data);
        let current, previous;

        current = this.head;
        let count = 0;

        while(count < index){
            previous = current;
            count++;
            current = current.next;
        }

        node.next = current;
        previous.next = node;

        this.size++;
    }

    insertMe(data, index){
        if(index > 0 && index > this.size){
            return;
        }
        if(index === 0){
            let node = new Node(data, this.head);
            this.head = node;
            return;
        }
        let node = new Node(data);
        let previous, current;
        current = this.head;
        let count = 0;
        while(count < index){
            previous = current;
            count++;
            current = current.next;
        }
        node.next = current;
        previous.next = node;
        this.size++;
    }

    printListData(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next
        }
    }
}

const ll = new LinkedList();
ll.insertAtFirst(3)
ll.insertAtFirst(9)
ll.insertAtFirst(15)
ll.insertLast(1)
ll.insertMe(500, 0)
ll.printListData();



