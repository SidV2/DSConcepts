class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++
    return this;
  }

  insert(position, value) {
    if (position >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const previousNode = this.traverseToIndex(position - 1);
    const holdingPointer = previousNode.next;
    previousNode.next = newNode;
    newNode.prev = previousNode;
    newNode.next = holdingPointer;
    holdingPointer.prev = newNode;
    this.length++;
    return this.printList();
  }

  remove(position) {
    const previousNode = this.traverseToIndex(position - 1);
    const nodeToBeDeleted = previousNode.next;
    const holdingPointer = nodeToBeDeleted.next;
    previousNode.next = nodeToBeDeleted.next;
    holdingPointer.prev = previousNode;
    this.length--;
    return this.printList();
  }

  reverse() {
    if(!this.head.next) {
      return this.head;
    }
    let firstNode = this.head;
    let secondNode = firstNode.next;
    while(secondNode) {
      const tempNode = secondNode.next;
      secondNode.next = firstNode;
      firstNode = secondNode;
      secondNode = tempNode;
    }
    this.head.next = null;
    this.head = first;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

}

const doublyLinkedList = new DoublyLinkedList(5);
doublyLinkedList.prepend(4);
doublyLinkedList.insert(1, 16);
const arraylist = doublyLinkedList.printList();
console.log(arraylist);
console.log(doublyLinkedList);
doublyLinkedList.remove(1);

console.log(doublyLinkedList);
