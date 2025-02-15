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

let cnt = 0;

const G: Map<string, number> = new Map();

for (let i = 1; i <= M; i++) {
  const [u, v] = readLine().split(" ").map(Number);

  if (u === v) {
    cnt++;
    continue;
  }
  const a = Math.min(u, v);
  const b = Math.max(u, v);
  const key = `${a}-${b}`; 
  const prev = G.get(key) ?? 0;
  G.set(key, prev + 1);
}

for (const count of G.values()) {
  if (count > 1) {
    cnt += count - 1;
  }
}

console.log(cnt);
