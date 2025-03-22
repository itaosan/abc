import * as fs from "node:fs";

//移動する方向
//const dx = [0, 1, 0, -1];
//const dy = [-1, 0, 1, 0];

// 頂点数 N を前提として、隣接リスト G を作成
//const G: number[][] = Array.from({ length: N + 1 }, () => []);

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

const N = Number.parseInt(readLine());
const A = readLine().split(" ").map(Number);
//const S = readLine()

const map = new Map<number, [number, number]>();

for (let i = 0; i < A.length; i++) {
  const a = A[i];
  //console.error(a);
  if (map.has(a)) {
    map.set(a, [2, i + 1]);
  } else {
    map.set(a, [1, i + 1]);
  }
}
//console.error(map);
let max = 0;
let maxIndex = -1;
for (const [k, v] of map) {
  if (v[0] === 1) {
    if (max < k) {
      max = k;
      maxIndex = v[1];
    }
  }
}

console.log(maxIndex);
