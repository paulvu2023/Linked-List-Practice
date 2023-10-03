class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value, null);
    if (tail === null) {
      tail = newNode;
      head = newNode;
    } else {
      tail.nextNode = newNode;
      tail = newNode;
    }
  }

  prepend(value) {
    const nextNode = null;
    if (head === null) {
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
