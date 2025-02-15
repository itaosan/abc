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
const S = readLine();

const pos: number[] = [];
//1の場所を記録
for (let i = 0; i < N; i++) {
  if (S[i] === "1") {
    pos.push(i);
  }
}

const one_cnt = pos.length; 
//まんなかの1の位置
const mid = Math.floor(one_cnt / 2);
//真ん中の１の位置からずらした分がスタート地点
const start = pos[mid] - mid;

let ans = 0;
//各1の位置から連続した時の移動距離
for (let i = 0; i < one_cnt; i++) {
  ans += Math.abs(pos[i] - (start + i));
}

// 結果を出力
console.log(ans);
