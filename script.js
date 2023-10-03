class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(value) {
    const nextNode = null;
    if ((head = null)) {
      tail = nextNode;
    } else {
      nextNode = head.nextNode;
    }
    const newNode = new Node(value, nextNode);
    head = newNode;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
