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

const N = BigInt(readLine());
//const [N, M] = readLine().split(" ").map(Number);
//const S = readLine()

const set = new Set<bigint>();

const log2n = BigInt(Math.ceil(Math.log2(Number(N))));
const sqrt = BigInt(Math.ceil(Math.sqrt(Number(N))));
for (let i = 1; i <= log2n; i++) {
  for (let j = 1; j <= sqrt; j++) {
    const val = 2n ** BigInt(i) * BigInt(j) ** 2n;
    if (val <= N ) {
      set.add(val);
    } else {
      break;
    }
  }
}

console.log(set.size);
