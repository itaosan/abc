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
//const [N, M] = readLine().split(" ").map(Number);
//const S = readLine()

const moji = []
const cnt = []
for (let i = 0; i < N; i++) {
  const S = readLine()
  moji.push(S)
  cnt.push([i,S.length])
}

//cntのlengthでソート
cnt.sort((a,b) => a[1] - b[1])
let ans = ""
//ソート順のindexで文字を結合
for(let i = 0; i < N; i++){
  ans = ans + moji[cnt[i][0]]
}
console.log(ans)

