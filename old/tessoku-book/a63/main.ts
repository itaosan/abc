import * as fs from "node:fs";

//移動する方向
//const dx = [0, 1, 0, -1];
//const dy = [-1, 0, 1, 0];


// 自作のキュー
class Queue<T> {
  private data: T[] = [];
  private front = 0;

  push(item: T): void {
      this.data.push(item);
  }

  pop(): T | undefined {
      if (this.front >= this.data.length) return undefined;
      const item = this.data[this.front];
      this.front++;
      return item;
  }

  isEmpty(): boolean {
      return this.front >= this.data.length;
  }
}

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
const [N, M] = readLine().split(" ").map(Number);
//const S = readLine()

// 頂点数 N を前提として、隣接リスト G を作成
const G: number[][] = Array.from({ length: N + 1 }, () => []);

for (let i = 0; i < M; i++) {
  const [a, b] = readLine().split(" ").map(Number);
  G[a].push(b);
  G[b].push(a);
}

//各径路への最短距離
const dist: number[] = Array(N + 1).fill(-1);
const queue = new Queue<number>();
queue.push(1);
dist[1] = 0;
while (!queue.isEmpty() ) {
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  const v = queue.pop()!;
  for (const next of G[v]) {
    if (dist[next] === -1) {
      dist[next] = dist[v] + 1;
      queue.push(next);
    }
  }
}

for (let i = 1; i <= N; i++) {
  console.log(dist[i]);
}
