class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {

  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if(this.length === 0) {
      this.first = newNode;
      this.last = newNode;
      this.length++;
    } else {
      this.last.next = newNode;
      this.last = newNode;
      this.length++;
    }
    return this;
  }

  dequeue() {
    if(!this.first) {
      return null;
    }
    const leadingPointer = this.first.next;
    this.first = leadingPointer;
    this.length--;
    return this;
  }

}

const myQueue = new Queue();
myQueue.enqueue("Google");
myQueue.enqueue("Udemy");
myQueue.enqueue("Discord");
myQueue.dequeue();
myQueue.dequeue();
myQueue.peek();

