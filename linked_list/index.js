class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor(head, size = 0) {
		this.head = head;
		this.size = size;
	}

	insertFirst(data) {
		this.head = new Node(data, this.head);
		this.size++;
	}

	insertLast(data) {
		let node = new Node(data);
		let current;
		if (!this.head) {
			this.head = node;
			this.size++;
		} else {
			current = this.head;
			while (current.next) {
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
            this.size++;
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
            while(count  < index){
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next
        }
        this.size--;
    }

    printList(){
        while(this.head){
            console.log(this.head);
            this.head = this.head.next;
        }
    }

    reverseLL(){
        let current;
        let previous = null;
        let next = null;
        while(current !== null){
            next = current.next;
            current.next = previous;
            previous = current;
            current = next; 
        }
        return previous;
    }
}

const ll = new LinkedList();






