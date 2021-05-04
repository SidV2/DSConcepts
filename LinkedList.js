class Node {
  constructor(value) {
    this.value = value,
    this.next = null 
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null 
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    if(myLinkedList.length > 0) {
      const newNode = new Node(value);
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      newNode.next = null;
      return this; 
    }
  }

  prepend(value) {
    if(myLinkedList.length > 0) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this; 
    }
  }

  insert(position, value) {
    if(position >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const previousNode = this.traverseToIndex(position - 1);
    const holdingPointer = previousNode.next;
    previousNode.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }

  remove(position) { 
    const previousNode = this.traverseToIndex(position - 1);
    const nodeToBeDeleted = previousNode.next;
    previousNode.next = nodeToBeDeleted.next;
    this.length--;
    return this.printList();
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.printList();
myLinkedList.insert(2, 99);
myLinkedList.insert(2, 11);
myLinkedList.insert(2, 101);
myLinkedList.remove(2);
myLinkedList.printList();



