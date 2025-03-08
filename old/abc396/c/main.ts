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

//const N = Number.parseInt(readLine());
const [N, M] = readLine().split(" ").map(Number);
const B = readLine().split(" ").map(BigInt);
const W = readLine().split(" ").map(BigInt);
//const S = readLine()

//ソート
B.sort((a, b) => (a < b ? 1 : -1));
W.sort((a, b) => (a < b ? 1 : -1));

//累積和
let sumB = 0n;
let sumW = 0n;
let maxBindex = N - 1;
let maxWindex = M - 1;
const sumBList = [];
const sumWList = [];
let max = 0n;
for (let i = 0; i < N; i++) {
  if (maxBindex === N - 1 && B[i] < 0) {
    maxBindex = i - 1;
  }
  sumB += B[i];
  sumBList.push(sumB);
}
for (let i = 0; i < M; i++) {
  if (maxWindex === M - 1 && W[i] < 0) {
    maxWindex = i - 1;
  }
  sumW += W[i];
  sumWList.push(sumW);
}

// console.error(sumBList);
// console.error(sumWList);
// console.error(`maxBindex: ${maxBindex}`);
// console.error(`maxWindex: ${maxWindex}`);

if (maxBindex < 0) {
  maxBindex = 0;
}

for (let i = maxBindex; i < N; i++) {
  let j = maxWindex;
  if (maxWindex > i) {
    j = i;
  }

  if (j < 0) {
    if (max < sumBList[i]) {
      max = sumBList[i];
    }
  } else {
    if (max < sumBList[i] + sumWList[j]) {
      max = sumBList[i] + sumWList[j];
    }
  }
}

console.log(max.toString());
