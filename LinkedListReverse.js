reverse() {
    if(!this.head.next) {
      return this.head;
    }
    let firstNode = this.head;
    let secondNode = firstNode.next;
    this.tail = this.head;
    while(secondNode) {
      const tempNode = secondNode.next;
      secondNode.next = firstNode;
      firstNode = secondNode;
      secondNode = tempNode;
    }
    this.head.next = null;
    this.head = firstNode;
    return this.printList();
  }
