const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  add(value) {
    if (this.length === 0) {
      this.head = new ListNode(value);
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = new ListNode(value);
    }

    this.length++;
  }
  removeAt(position) {
    if (position < 0 || this.length <= position) {
      return null;
    }
    let current = this.head;
    if (position === 0) {
      this.head = current.next;
    } else {
      let prev = null;
      let index = 0;

      while (index < position) {
        prev = current;
        current = current.next;
        index++;
      }
      prev.next = current.next;
    }

    this.length--;
    return current.value;
  }

  remove(element) {
    for (let position of this.indexOf(element)) {
      this.removeAt(position);
    }
  }
  indexOf(element) {
    let current = this.head;
    let index = 0;
    let indexes = [];

    while (current) {
      if (current.value === element) {
        indexes.push(index);
      }

      current = current.next;
      index++;
    }

    return indexes.length ? indexes : -1;
  }
}

function removeKFromList(l, k) {
  let newList = new LinkedList();
  for (let val of l) {
    newList.add(val);
  }
  newList.remove(k);
  return newList;
}

module.exports = {
  removeKFromList,
};
