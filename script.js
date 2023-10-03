class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value, null);
    if (this.tail === null) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
  }

  prepend(value) {
    const nextNode = null;
    if (this.head === null) {
      this.tail = nextNode;
    } else {
      nextNode = this.head.nextNode;
    }
    const newNode = new Node(value, nextNode);
    this.head = newNode;
  }

  size() {
    let size = 0;
    currentNode = this.head;
    if (this.head === null) {
      return 0;
    }
    while (currentNode !== null) {
      currentNode = currentNode.nextNode;
      size++;
    }
    return size;
  }

  at(index) {
    if (index === 0) {
      return this.head;
    }
    let currentIndex = 0;
    currentNode = this.head;
    while (currentNode !== null || currentIndex > index) {
      currentNode = currentNode.nextNode;
      if (currentIndex === index) {
        return currentNode;
      }
      currentIndex++;
    }
    return null;
  }

  pop() {
    currentNode = this.head;
    nextNode = this.head.nextNode;
    while (nextNode !== null) {
      currentNode = nextNode;
      nextNode = nextNode.nextNode;
    }
    currentNode.nextNode = null;
    tail = currentNode;
  }

  contains(value) {
    currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
