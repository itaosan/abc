import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;

const readLine = () => input[inputIndex++];

const N = parseInt(readLine());
//const h = [0, ...readLine().split(" ").map(Number)];

const stages: [number, number, number][] = [];
for (let i = 0; i < N; i++) {
  stages.push(readLine().split(" ").map(Number) as [number, number, number]);
}

type Edge = {
  to: number;
  time: number;
};

class PriorityQueue<T> {
  private heap: T[] = [];
  private compare: (a: T, b: T) => number;

  constructor(compare: (a: T, b: T) => number) {
    this.compare = compare;
  }

  push(item: T) {
    this.heap.push(item);
    this.bubbleUp();
  }

  pop(): T | undefined {
    if (this.size() === 0) return undefined;
    const top = this.heap[0];
    const bottom = this.heap.pop();
    if (this.heap.length > 0 && bottom !== undefined) {
      this.heap[0] = bottom;
      this.bubbleDown();
    }
    return top;
  }

  size() {
    return this.heap.length;
  }

  private bubbleUp() {
    let index = this.size() - 1;
    const item = this.heap[index];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];
      if (this.compare(item, parent) < 0) {
        this.heap[index] = parent;
        this.heap[parentIndex] = item;
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  private bubbleDown() {
    let index = 0;
    const length = this.size();
    const item = this.heap[index];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let swapIndex = null;
      let leftChild, rightChild;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (this.compare(leftChild, item) < 0) {
          swapIndex = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        // ここで leftChild を直接参照する代わりに、swapIndex が leftChildIndex であるかを確認します
        if (
          (swapIndex === null && this.compare(rightChild, item) < 0) ||
          (swapIndex === leftChildIndex && this.compare(rightChild, leftChild!) < 0)
        ) {
          swapIndex = rightChildIndex;
        }
      }

      if (swapIndex === null) break;

      this.heap[index] = this.heap[swapIndex];
      this.heap[swapIndex] = item;
      index = swapIndex;
    }
  }
}

// 使用例: PriorityQueueをダイクストラ法に組み込む
const dijkstra = (N: number, graph: Edge[][]): number => {
  const dist: number[] = new Array(N + 1).fill(Infinity);
  dist[1] = 0;
  const pq = new PriorityQueue<[number, number]>((a, b) => a[0] - b[0]);
  pq.push([0, 1]); // [distance, node]

  while (pq.size() > 0) {
    const [curDist, curNode] = pq.pop()!;

    if (dist[curNode] < curDist) continue;

    graph[curNode].forEach(({ to, time }) => {
      if (dist[to] > dist[curNode] + time) {
        dist[to] = dist[curNode] + time;
        pq.push([dist[to], to]);
      }
    });
  }

  return dist[N];
};

const solve = (N: number, stages: [number, number, number][]): void => {
  const graph: Edge[][] = Array.from({ length: N + 1 }, () => []);

  stages.forEach(([A, B, X], i) => {
    const stage = i + 1;
    graph[stage].push({ to: stage + 1, time: A }); // Ai秒で次のステージへ
    if (X <= N) graph[stage].push({ to: X, time: B }); // Bi秒でステージXiへ
  });

  const result = dijkstra(N, graph);
  console.log(result);
};

solve(N, stages);
