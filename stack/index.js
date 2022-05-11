// btw, this also works for problem 225 on leetcode - Implement Stack using Queues
class Stack {
    constructor() {
        this.items = [] //our stack, this is where we will add everything
        this.count = 0 //use for all the operations
    }

    // add element to top of the stack
    push(element) {
        this.items[this.count] = element
        console.log(`${element} added to ${this.count}`)
        this.count += 1
        return this.count - 1
    }

    // return and remove top element in stack
    // return undefined if stack is empty
    pop() {
        if(this.count == 0) return undefined
        let deleteItem = this.items[this.count - 1]
        this.count -= 1
        console.log(`${deleteItem} removed`)
        return deleteItem
    }

    // check top element in stack
    top() {
        console.log(`Top element is ${this.items[this.count - 1]}`)
        return this.items[this.count - 1]
    }

    // check if stack is empty
    isEmpty() {
        console.log(this.count == 0 ? 'Stack is empty' : 'Stack is NOT empty')
        return this.count == 0
    }

    // check size of stack
    size() {
        console.log(`${this.count} elements in stack`)
        return this.count
    }

    // print elements in stack
    print() {
        let str = ''
        for(let i = 0; i < this.count; i++) {
            str += this.items[i] + ' '
        }
        return str
    }

    // clear stack
    clear() {
        this.items = []
        this.count = 0
        console.log('Stack empty')
        return this.items
    }
}

const stack = new Stack()



stack.push(100)
stack.push(200)
console.log(stack.print());

