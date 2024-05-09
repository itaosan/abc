import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;

const readLine = () => input[inputIndex++];

const N = parseInt(readLine());
const A = readLine().split(" ").map(Number);

const Q = parseInt(readLine());

const queries = [];

class ListNode {
  value: number;
  prev: ListNode | null = null;
  next: ListNode | null = null;
  constructor(value: number) {
    this.value = value;
  }
}

class LinkedList {
  head: ListNode | null = null;
  tail: ListNode | null = null;
  map: Map<number, ListNode> = new Map();

  // 要素をリストの末尾に挿入
  append(value: number) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail) {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
    }
    this.map.set(value, newNode);
  }

  // x の直後に y を挿入
  insertAfter(x: number, y: number) {
    const xNode = this.map.get(x);
    if (!xNode) return;

    const newNode = new ListNode(y);
    newNode.next = xNode.next;
    newNode.prev = xNode;

    if (xNode.next) {
      xNode.next.prev = newNode;
    } else {
      this.tail = newNode;
    }

    xNode.next = newNode;
    this.map.set(y, newNode);
  }

  // 要素 x を削除
  delete(x: number) {
    const xNode = this.map.get(x);
    if (!xNode) return;

    if (xNode.prev) {
      xNode.prev.next = xNode.next;
    } else {
      this.head = xNode.next;
    }

    if (xNode.next) {
      xNode.next.prev = xNode.prev;
    } else {
      this.tail = xNode.prev;
    }

    this.map.delete(x);
  }

  // リストを配列に変換して返す
  toArray(): number[] {
    const result: number[] = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }
}

const list = new LinkedList();
A.forEach((value) => list.append(value));

for (let i = 0; i < Q ; i++) {
  const [type, x, y] = readLine().split(" ").map(Number);
  if (type === 1) {
    list.insertAfter(x, y);
  } else if (type === 2) {
    list.delete(x);
  }
}

console.log(list.toArray().join(" "));
