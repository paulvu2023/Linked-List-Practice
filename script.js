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
    let nextNode = null;
    if (this.head !== null) {
      nextNode = this.head;
    }
    const newNode = new Node(value, nextNode);
    this.head = newNode;
  }

  size() {
    let size = 0;
    let currentNode = this.head;
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
    let currentNode = this.head;
    while (currentNode !== null || currentIndex > index) {
      if (currentIndex === index) {
        return currentNode;
      }
      currentNode = currentNode.nextNode;
      currentIndex += 1;
    }
    return null;
  }

  pop() {
    let currentNode = this.head;
    let nextNode = this.head.nextNode;
    while (nextNode !== null) {
      currentNode = nextNode;
      nextNode = nextNode.nextNode;
    }
    currentNode.nextNode = null;
    tail = currentNode;
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  find(value) {
    let currentIndex = 0;
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return currentIndex;
      }
      currentNode = currentNode.nextNode;
      currentIndex += 1;
    }
    return false;
  }

  toString() {
    let currentNode = this.head;
    let linkedList = "";
    while (currentNode !== null) {
      linkedList += `${currentNode.value} -> `;
      currentNode = currentNode.nextNode;
    }
    linkedList += "null";
    return linkedList;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const list = new LinkedList();
list.toString();
