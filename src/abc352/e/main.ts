import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

const [N, M] = readLine().split(" ").map(Number);

class PriorityQueue<T> {
  private heap: T[];
  private comparator: (a: T, b: T) => number;

  constructor(comparator: (a: T, b: T) => number) {
    this.heap = [];
    this.comparator = comparator;
  }

  private getLeftChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 1;
  }

  private getRightChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 2;
  }

  private getParentIndex(childIndex: number): number {
    return Math.floor((childIndex - 1) / 2);
  }

  private swap(indexOne: number, indexTwo: number): void {
    [this.heap[indexOne], this.heap[indexTwo]] = [this.heap[indexTwo], this.heap[indexOne]];
  }

  private heapifyUp(): void {
    let index = this.heap.length - 1;
    while (index !== 0 && this.comparator(this.heap[index], this.heap[this.getParentIndex(index)]) < 0) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  private heapifyDown(): void {
    let index = 0;
    while (this.getLeftChildIndex(index) < this.heap.length) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.getRightChildIndex(index) < this.heap.length &&
        this.comparator(this.heap[this.getRightChildIndex(index)], this.heap[smallerChildIndex]) < 0
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }
      if (this.comparator(this.heap[index], this.heap[smallerChildIndex]) < 0) {
        break;
      }
      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }

  enqueue(element: T): void {
    this.heap.push(element);
    this.heapifyUp();
  }

  dequeue(): T | undefined {
    const item = this.heap[0];
    if (this.heap.length > 1) {
      this.heap[0] = this.heap.pop()!;
      this.heapifyDown();
    } else {
      this.heap.pop();
    }
    return item;
  }

  isEmpty(): boolean {
    return this.heap.length === 0;
  }
}

const adjacencyList = new Map<number, Map<number, number>>();

for (let i = 0; i < M; i++) {
  const [Ki, Ci] = readLine().split(" ").map(Number);
  const vertices = readLine().split(" ").map(Number);

  for (let j = 0; j < Ki; j++) {
    for (let k = j + 1; k < Ki; k++) {
      const u = vertices[j] - 1;
      const v = vertices[k] - 1;
      if (!adjacencyList.has(u)) adjacencyList.set(u, new Map());
      if (!adjacencyList.has(v)) adjacencyList.set(v, new Map());
      const currentWeightU = adjacencyList.get(u).get(v) ?? Infinity;
      const currentWeightV = adjacencyList.get(v).get(u) ?? Infinity;
      if (Ci < currentWeightU) {
        adjacencyList.get(u).set(v, Ci);
        adjacencyList.get(v).set(u, Ci);
      }
    }
  }
}

const prim = (start: number) => {
  const pq = new PriorityQueue<{ vertex: number; weight: number }>((a, b) => a.weight - b.weight);
  const visited = new Set<number>();
  let mstCost = 0;
  let edgeCount = 0;

  pq.enqueue({ vertex: start, weight: 0 });

  while (!pq.isEmpty() && visited.size < N) {
    const { vertex, weight } = pq.dequeue()!;
    if (visited.has(vertex)) continue;
    visited.add(vertex);
    mstCost += weight;
    edgeCount++;
    if (adjacencyList.has(vertex)) {
      adjacencyList.get(vertex).forEach((cost, adjVertex) => {
        if (!visited.has(adjVertex)) {
          pq.enqueue({ vertex: adjVertex, weight: cost });
        }
      });
    }
  }

  if (edgeCount === N) return mstCost;
  else return -1;
};

const result = prim(0);
console.log(result);
